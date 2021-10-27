"use strict";
exports.__esModule = true;
exports.useTheme = exports.Theme = exports.ThemeContext = exports.generateThemeClassNames = exports.cnTheme = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var bem_1 = require("../../utils/bem");
var presetGpnDefault_1 = require("./presets/presetGpnDefault");
var presetGpnDefault_2 = require("./presets/presetGpnDefault");
tslib_1.__createBinding(exports, presetGpnDefault_2, "presetGpnDefault");
var presetGpnDark_1 = require("./presets/presetGpnDark");
tslib_1.__createBinding(exports, presetGpnDark_1, "presetGpnDark");
var presetGpnDisplay_1 = require("./presets/presetGpnDisplay");
tslib_1.__createBinding(exports, presetGpnDisplay_1, "presetGpnDisplay");
exports.cnTheme = bem_1.cn('Theme');
function generateThemeClassNames(preset) {
    return {
        color: {
            primary: exports.cnTheme({ color: preset.color.primary }),
            accent: exports.cnTheme({ color: preset.color.accent }),
            invert: exports.cnTheme({ color: preset.color.invert })
        },
        control: exports.cnTheme({ control: preset.control }),
        font: exports.cnTheme({ font: preset.font }),
        size: exports.cnTheme({ size: preset.size }),
        space: exports.cnTheme({ space: preset.space }),
        shadow: exports.cnTheme({ shadow: preset.shadow })
    };
}
exports.generateThemeClassNames = generateThemeClassNames;
var defaultContextValue = {
    theme: presetGpnDefault_1.presetGpnDefault,
    themeClassNames: generateThemeClassNames(presetGpnDefault_1.presetGpnDefault)
};
exports.ThemeContext = react_1.createContext(defaultContextValue);
exports.Theme = react_1["default"].forwardRef(function (props, ref) {
    var className = props.className, children = props.children, preset = props.preset, otherProps = tslib_1.__rest(props, ["className", "children", "preset"]);
    var mods = tslib_1.__assign(tslib_1.__assign({}, preset), { color: preset.color.primary });
    var themeClassNames = generateThemeClassNames(preset);
    return (react_1["default"].createElement(exports.ThemeContext.Provider, { value: { theme: preset, themeClassNames: themeClassNames } },
        react_1["default"].createElement("div", tslib_1.__assign({}, otherProps, { ref: ref, className: exports.cnTheme(mods, [className]) }), children)));
});
function useTheme() {
    return react_1.useContext(exports.ThemeContext);
}
exports.useTheme = useTheme;
