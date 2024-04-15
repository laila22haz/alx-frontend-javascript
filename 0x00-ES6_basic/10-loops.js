export default function appendToEachArrayValue(array, appendString) {
    let index = 0;
    for (let idx of array) {
      const value = idx;
      array[index] = appendString + value;
      index++;
    }

    return array;
}
