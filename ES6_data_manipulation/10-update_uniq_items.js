export default function updateUniqueItems(map = 1) {
    if (!(map instanceof Map)) {
        throw new Error('Cannot process');
    }
    for (const [key, value] of map) {
        if (value === 1) {
            map.set(key, 100);
        }
    }
}
