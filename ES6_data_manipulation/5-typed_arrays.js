export default function createInt8TypedArray(length, position, value) {
    if (position < 0 || position >= length) {
        throw new Error('Position outside range');
    }
    const typedArray = new Int8Array(length);
    typedArray[position] = value;
    return new DataView(typedArray.buffer);
};
