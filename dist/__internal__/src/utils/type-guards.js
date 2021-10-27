export var isDefined = function (p) { return p !== undefined; };
export var isNotNil = function (p) {
    return p !== undefined && p !== null;
};
export var isNumber = function (value) { return typeof value === 'number'; };
