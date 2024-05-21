export default (mapGrocery) => {
  if (!(mapGrocery instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, value] of mapGrocery) {
    if (value === 1) {
      mapGrocery.set(key, 100);
    }
  }
}