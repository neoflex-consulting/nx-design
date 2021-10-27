import { __assign, __read, __spread } from "tslib";
import { useMemo } from 'react';
import { cnTheme, useTheme } from '../../components/Theme/Theme';
import { defaultVars } from './helpers';
export { defaultVars } from './helpers';
var getVars = function (cssVars, element) {
    var vars = {};
    var style = getComputedStyle(element);
    for (var i = 0; i < cssVars.length; i++) {
        vars[cssVars[i]] = style.getPropertyValue(cssVars[i]).trim();
    }
    return vars;
};
var addElement = function (mods) {
    var element = document.createElement('div');
    element.setAttribute('class', cnTheme(mods));
    document.body.append(element);
    return element;
};
export var useThemeVars = function (options) {
    var variables = (options === null || options === void 0 ? void 0 : options.vars) || defaultVars;
    var theme = useTheme().theme;
    return useMemo(function () {
        var elementPrimary = addElement(__assign(__assign({}, theme), { color: theme.color.primary }));
        var elementAccent = addElement({ color: theme.color.accent });
        var elementInvert = addElement({ color: theme.color.invert });
        var themeVars = {
            color: {
                primary: getVars(variables.color.primary, elementPrimary),
                accent: getVars(variables.color.accent, elementAccent),
                invert: getVars(variables.color.invert, elementInvert)
            },
            control: getVars(variables.control, elementPrimary),
            font: getVars(variables.font, elementPrimary),
            size: getVars(variables.size, elementPrimary),
            space: getVars(variables.space, elementPrimary),
            shadow: getVars(variables.shadow, elementPrimary)
        };
        document.body.removeChild(elementPrimary);
        document.body.removeChild(elementAccent);
        document.body.removeChild(elementInvert);
        return themeVars;
    }, __spread([
        theme.color.primary,
        theme.color.accent,
        theme.color.invert,
        theme.control,
        theme.font,
        theme.size,
        theme.space,
        theme.shadow
    ], ((options === null || options === void 0 ? void 0 : options.deps) ? options.deps : [])));
};
