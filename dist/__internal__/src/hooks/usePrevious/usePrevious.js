import React from 'react';
export function usePrevious(value) {
    var ref = React.useRef(value);
    React.useEffect(function () {
        ref.current = value;
    }, [value]);
    return ref.current;
}
