export default class Configs {
  // Map to store configurations
  static configs: Map<
    string,
    { [key: string]:  object[] }
  > = new Map();

  /**
   * Sets a configuration value.
   * @param key - The key of the configuration.
   * @param innerKey - The inner key of the configuration.
   * @param tripleKey - The triple key of the configuration.
   * @param value - The value to be set.
   */
  static setConfigValue(
    key: string,
    innerKey: string,
    value: object[]
  ) {
    let config = Configs.configs.get(key);
    if (!config) {
      config = {};
    }
    config[innerKey] = value;
    Configs.configs.set(key, config);
  }

  /**
   * Gets a configuration value.
   * @param key - The key of the configuration.
   * @param innerKey - The inner key of the configuration.
   * @param tripleKey - The triple key of the configuration.
   * @returns The configuration value if found, otherwise undefined.
   */
  static getConfigValue(
    key: string,
    innerKey: string,
    tripleKey: string
  ): any | undefined {
    const config = Configs.configs.get(key);
    if (config && config[innerKey]) {
      return config[innerKey];
    }
    return undefined;
  }

  /**
   * Gets all configurations.
   * @returns A map of all configurations.
   */
  static getAllConfigs(): Map<
    string,
    { [key: string]:  object[] }
  > {
    return Configs.configs;
  }
}
