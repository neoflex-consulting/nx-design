"use strict";
exports.__esModule = true;
exports.Avatar = exports.getInitialsForName = exports.getColorIndexForName = exports.cnAvatar = exports.avatarPropFormDefault = exports.avatarPropForm = exports.avatarPropSizeDefault = exports.avatarPropSize = void 0;
var tslib_1 = require("tslib");
require("./Avatar.css");
var react_1 = tslib_1.__importStar(require("react"));
var bem_1 = require("../../utils/bem");
var PropsWithAsAttributes_1 = require("../../utils/types/PropsWithAsAttributes");
exports.avatarPropSize = ['m', 's', 'xs'];
exports.avatarPropSizeDefault = exports.avatarPropSize[0];
exports.avatarPropForm = ['round', 'brick', 'default'];
exports.avatarPropFormDefault = exports.avatarPropForm[0];
exports.cnAvatar = bem_1.cn('Avatar');
var MAX_COLOR_INDEX = 17;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
exports.getColorIndexForName = function (name, maxIndex) {
    if (maxIndex === void 0) { maxIndex = MAX_COLOR_INDEX; }
    var index = 0;
    if (name) {
        index =
            name
                .split('')
                .map(function (c) { return c.charCodeAt(0); })
                .reduce(function (acc, code) { return acc + code; }, 0) % maxIndex;
    }
    else {
        index = getRandomInt(maxIndex);
    }
    return index;
};
exports.getInitialsForName = function (name) {
    if (!name) {
        return '';
    }
    var words = name.split(' ');
    var firstLetter = words[0] ? words[0][0] : '';
    var secondLatter = words[1] ? words[1][0] : '';
    return "" + firstLetter.toUpperCase() + secondLatter.toUpperCase();
};
exports.Avatar = PropsWithAsAttributes_1.forwardRefWithAs(function (props, ref) {
    var _a = props.as, as = _a === void 0 ? 'div' : _a, className = props.className, _b = props.size, size = _b === void 0 ? exports.avatarPropSizeDefault : _b, _c = props.form, form = _c === void 0 ? exports.avatarPropFormDefault : _c, url = props.url, name = props.name, otherProps = tslib_1.__rest(props, ["as", "className", "size", "form", "url", "name"]);
    var Tag = as;
    var showImage = Boolean(url);
    var initials = react_1.useMemo(function () { return exports.getInitialsForName(name); }, [name]);
    var colorIndex = react_1.useMemo(function () { return exports.getColorIndexForName(name); }, [name]);
    return (react_1["default"].createElement(Tag, tslib_1.__assign({}, otherProps, { style: !showImage ? { '--avatar-color': "var(--avatar-color-" + colorIndex + ")" } : {}, className: exports.cnAvatar({ size: size, form: form }, [className]), ref: ref }),
        showImage && react_1["default"].createElement("img", { className: exports.cnAvatar('Image'), src: url, alt: name }),
        !showImage && initials));
});
