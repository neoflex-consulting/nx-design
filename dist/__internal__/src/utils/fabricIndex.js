export var fabricIndex = function (start) {
    if (start === void 0) { start = 0; }
    var index = start;
    return function () {
        index += 1;
        return index;
    };
};
