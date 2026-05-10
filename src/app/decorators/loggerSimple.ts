/**
 * @Log() simple
 * Source : YT Simon Dieny : https://www.youtube.com/watch?v=ts7svW5-pYQ
 */
export function LogSimple(): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    // Original method
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log('@Log() propertyKey: ', propertyKey, ', Arguments: ',JSON.stringify(args));
      const result = originalMethod.apply(this, args);
      console.log('Result: ',result);
      return result;
    };
    return descriptor;
  };
}
