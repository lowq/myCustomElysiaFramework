import Logger from "./Logger";

export class QueueJob {
  static status: boolean;
  private static tries: number = 5;
  private static delay: number = 0;
  private static retryTime: number = 60;
  private static function: any;

  private static addTry() {
    this.tries++;
  }

  async function(data: any) {}

  static start(data: any) {
    try {
      setTimeout(() => {
        this.function(data);
      }, this.delay * 1000);
      this.status = true;
    } catch (error) {
      this.addTry();
      if (this.tries < 5) {
        setTimeout(() => {
          this.function(data);
        }, this.retryTime * 1000);
      } else {
        Logger.error(`Queue job failed ${this.constructor.name}`);
      }
    }
  }
}
