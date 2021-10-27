import { __assign, __rest } from "tslib";
import './Avatar.css';
import React, { useMemo } from 'react';
import { cn } from '../../utils/bem';
import { forwardRefWithAs } from '../../utils/types/PropsWithAsAttributes';
export var avatarPropSize = ['m', 's', 'xs'];
export var avatarPropSizeDefault = avatarPropSize[0];
export var avatarPropForm = ['round', 'brick', 'default'];
export var avatarPropFormDefault = avatarPropForm[0];
export var cnAvatar = cn('Avatar');
var MAX_COLOR_INDEX = 17;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
export var getColorIndexForName = function (name, maxIndex) {
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
export var getInitialsForName = function (name) {
    if (!name) {
        return '';
    }
    var words = name.split(' ');
    var firstLetter = words[0] ? words[0][0] : '';
    var secondLatter = words[1] ? words[1][0] : '';
    return "" + firstLetter.toUpperCase() + secondLatter.toUpperCase();
};
export var Avatar = forwardRefWithAs(function (props, ref) {
    var _a = props.as, as = _a === void 0 ? 'div' : _a, className = props.className, _b = props.size, size = _b === void 0 ? avatarPropSizeDefault : _b, _c = props.form, form = _c === void 0 ? avatarPropFormDefault : _c, url = props.url, name = props.name, otherProps = __rest(props, ["as", "className", "size", "form", "url", "name"]);
    var Tag = as;
    var showImage = Boolean(url);
    var initials = useMemo(function () { return getInitialsForName(name); }, [name]);
    var colorIndex = useMemo(function () { return getColorIndexForName(name); }, [name]);
    return (React.createElement(Tag, __assign({}, otherProps, { style: !showImage ? { '--avatar-color': "var(--avatar-color-" + colorIndex + ")" } : {}, className: cnAvatar({ size: size, form: form }, [className]), ref: ref }),
        showImage && React.createElement("img", { className: cnAvatar('Image'), src: url, alt: name }),
        !showImage && initials));
});
