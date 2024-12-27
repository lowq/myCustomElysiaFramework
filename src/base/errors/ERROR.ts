export class ERROR extends Error {
  cachedError: any;

  constructor(message: string, cachedError?: any) {
    super(message);
    this.cachedError = cachedError;
  }
}
