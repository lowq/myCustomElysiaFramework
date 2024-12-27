export const getLastCachedError = (err: any): any => {
  return err.cachedError ? getLastCachedError(err.cachedError) : err;
};
