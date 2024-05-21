export const weakMap = new WeakMap();

export function queryAPI(endpointArgument) {
  if (!(weakMap.has(endpointArgument))) {
      weakMap.set(endpointArgument, 0);
  }
  const number = weakMap.get(endpointArgument);
  if (number >= 4) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpointArgument, number + 1);
}