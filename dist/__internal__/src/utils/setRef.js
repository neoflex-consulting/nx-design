export function setRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref) {
        // eslint-disable-next-line no-param-reassign
        ref.current = value;
    }
}
