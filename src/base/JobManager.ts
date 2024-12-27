import cron, { ScheduledTask } from "node-cron";
import prismaClient from "./config/prismaClient";
import moment from "moment";

class JobManager {
  private jobs: Map<string, ScheduledTask>;

  constructor() {
    this.jobs = new Map();
  }

  async addJob(
    name: string,
    cronTime: string,
    task: () => Promise<void>
  ): Promise<void> {
    if (this.jobs.has(name)) {
      throw new Error(`Job with name ${name} already exists`);
    }

    // Schedule job
    const scheduledTask = cron.schedule(cronTime, async () => {
      await this.executeJob(name, task);
    });
    this.jobs.set(name, scheduledTask);
    console.log(`Job ${name} scheduled at ${moment().format()}`);
  }

  async removeJob(name: string): Promise<void> {
    if (!this.jobs.has(name)) {
      throw new Error(`Job with name ${name} does not exist`);
    }

    // Stop and remove the job from memory
    const scheduledTask = this.jobs.get(name);
    scheduledTask?.stop();
    this.jobs.delete(name);
  }

  private async executeJob(
    name: string,
    task: () => Promise<void>
  ): Promise<void> {
    try {
      console.log(`Executing job ${name}`);
      await task();
      // Update job execution time
      await prismaClient.job.upsert({
        where: { name },
        update: { name },
        create: { name },
      });
    } catch (error) {
      console.error(`Error executing job ${name}:`, error);
    }
  }
}

export default new JobManager();
