function cacheFunction(callback) {
  let resultCached = {};
  return function (...args) {
    let argumentsKey = args.join(",");
    if (argumentsKey in resultCache) {
      return resultCached[argumentsKey];
    } else {
      resultCached[argumentsKey] = callback(args);
      return resultCached[argumentsKey];
    }
  };
}



export { cacheFunction };
