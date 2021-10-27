export var isEmpty = function (obj) {
    // eslint-disable-next-line guard-for-in
    for (var _ in obj) {
        return false;
    }
    return true;
};
