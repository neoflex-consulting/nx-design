"use strict";
exports.__esModule = true;
exports.useThemeVars = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var Theme_1 = require("../../components/Theme/Theme");
var helpers_1 = require("./helpers");
var helpers_2 = require("./helpers");
tslib_1.__createBinding(exports, helpers_2, "defaultVars");
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
    element.setAttribute('class', Theme_1.cnTheme(mods));
    document.body.append(element);
    return element;
};
exports.useThemeVars = function (options) {
    var variables = (options === null || options === void 0 ? void 0 : options.vars) || helpers_1.defaultVars;
    var theme = Theme_1.useTheme().theme;
    return react_1.useMemo(function () {
        var elementPrimary = addElement(tslib_1.__assign(tslib_1.__assign({}, theme), { color: theme.color.primary }));
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
    }, tslib_1.__spread([
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
