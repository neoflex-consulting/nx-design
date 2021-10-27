import { __assign, __rest } from "tslib";
import React, { createContext, useContext } from 'react';
import { cn } from '../../utils/bem';
import { presetGpnDefault } from './presets/presetGpnDefault';
export { presetGpnDefault } from './presets/presetGpnDefault';
export { presetGpnDark } from './presets/presetGpnDark';
export { presetGpnDisplay } from './presets/presetGpnDisplay';
export var cnTheme = cn('Theme');
export function generateThemeClassNames(preset) {
    return {
        color: {
            primary: cnTheme({ color: preset.color.primary }),
            accent: cnTheme({ color: preset.color.accent }),
            invert: cnTheme({ color: preset.color.invert })
        },
        control: cnTheme({ control: preset.control }),
        font: cnTheme({ font: preset.font }),
        size: cnTheme({ size: preset.size }),
        space: cnTheme({ space: preset.space }),
        shadow: cnTheme({ shadow: preset.shadow })
    };
}
var defaultContextValue = {
    theme: presetGpnDefault,
    themeClassNames: generateThemeClassNames(presetGpnDefault)
};
export var ThemeContext = createContext(defaultContextValue);
export var Theme = React.forwardRef(function (props, ref) {
    var className = props.className, children = props.children, preset = props.preset, otherProps = __rest(props, ["className", "children", "preset"]);
    var mods = __assign(__assign({}, preset), { color: preset.color.primary });
    var themeClassNames = generateThemeClassNames(preset);
    return (React.createElement(ThemeContext.Provider, { value: { theme: preset, themeClassNames: themeClassNames } },
        React.createElement("div", __assign({}, otherProps, { ref: ref, className: cnTheme(mods, [className]) }), children)));
});
export function useTheme() {
    return useContext(ThemeContext);
}
