export function getSizeByMap(map, componentSize, size) {
    if (size) {
        return size;
    }
    return map[componentSize];
}
