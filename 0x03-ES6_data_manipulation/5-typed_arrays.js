export default (lenght, position, value) => {
    if (position < 0 || position >= lenght) throw new Error('Position outside range');
    const buffer = new ArrayBuffer(lenght);
    const viewInt8 = new Int8Array(buffer);
    viewInt8[position] = value;
    //console.log(buffer);
    //console.log(unit8View);
    return new DataView(buffer);
}