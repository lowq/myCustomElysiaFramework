export class ERROR extends Error {
  cachedError: any;

  constructor(public message: string, cachedError: any) {
    super(message);
    this.cachedError = cachedError;
  }
}
