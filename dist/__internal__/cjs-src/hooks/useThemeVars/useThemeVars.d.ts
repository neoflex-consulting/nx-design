import { defaultVars } from './helpers';
export { defaultVars } from './helpers';
export declare type Vars = {
    readonly color: {
        readonly primary: readonly string[];
        readonly accent: readonly string[];
        readonly invert: readonly string[];
    };
    readonly control: readonly string[];
    readonly font: readonly string[];
    readonly size: readonly string[];
    readonly space: readonly string[];
    readonly shadow: readonly string[];
};
export declare type ThemeVars<T extends Vars = typeof defaultVars> = {
    color: {
        primary: {
            [key in T['color']['primary'][number]]: string;
        };
        accent: {
            [key in T['color']['accent'][number]]: string;
        };
        invert: {
            [key in T['color']['invert'][number]]: string;
        };
    };
    control: {
        [key in T['control'][number]]: string;
    };
    font: {
        [key in T['font'][number]]: string;
    };
    size: {
        [key in T['size'][number]]: string;
    };
    space: {
        [key in T['space'][number]]: string;
    };
    shadow: {
        [key in T['shadow'][number]]: string;
    };
};
declare type UseThemeVarsOptions<T> = {
    vars?: T;
    deps?: [];
};
export declare const useThemeVars: <T extends Vars = {
    readonly color: {
        readonly primary: readonly ["--color-bg-default", "--color-bg-secondary", "--color-bg-brand", "--color-bg-link", "--color-bg-border", "--color-bg-stripe", "--color-bg-ghost", "--color-bg-tone", "--color-bg-soft", "--color-bg-system", "--color-bg-normal", "--color-bg-success", "--color-bg-caution", "--color-bg-warning", "--color-bg-alert", "--color-bg-critical", "--color-typo-primary", "--color-typo-secondary", "--color-typo-ghost", "--color-typo-brand", "--color-typo-system", "--color-typo-normal", "--color-typo-success", "--color-typo-caution", "--color-typo-warning", "--color-typo-alert", "--color-typo-critical", "--color-typo-link", "--color-typo-link-minor", "--color-typo-link-hover", "--color-nums-shadow", "--color-scroll-bg", "--color-scroll-thumb", "--color-scroll-thumb-hover", "--color-control-bg-default", "--color-control-typo-default", "--color-control-typo-placeholder", "--color-control-bg-border-default", "--color-control-bg-border-default-hover", "--color-control-bg-border-focus", "--color-control-bg-focus", "--color-control-bg-active", "--color-control-bg-primary", "--color-control-bg-primary-hover", "--color-control-typo-primary", "--color-control-typo-primary-hover", "--color-control-bg-secondary", "--color-control-bg-border-secondary", "--color-control-bg-border-secondary-hover", "--color-control-typo-secondary", "--color-control-typo-secondary-hover", "--color-control-bg-ghost", "--color-control-bg-ghost-hover", "--color-control-typo-ghost", "--color-control-typo-ghost-hover", "--color-control-bg-clear", "--color-control-bg-clear-hover", "--color-control-typo-clear", "--color-control-typo-clear-hover", "--color-control-bg-disable", "--color-control-bg-border-disable", "--color-control-typo-disable"];
        readonly accent: readonly ["--color-bg-default", "--color-bg-secondary", "--color-bg-brand", "--color-bg-link", "--color-bg-border", "--color-bg-stripe", "--color-bg-ghost", "--color-bg-tone", "--color-bg-soft", "--color-bg-system", "--color-bg-normal", "--color-bg-success", "--color-bg-caution", "--color-bg-warning", "--color-bg-alert", "--color-bg-critical", "--color-typo-primary", "--color-typo-secondary", "--color-typo-ghost", "--color-typo-brand", "--color-typo-system", "--color-typo-normal", "--color-typo-success", "--color-typo-caution", "--color-typo-warning", "--color-typo-alert", "--color-typo-critical", "--color-typo-link", "--color-typo-link-minor", "--color-typo-link-hover", "--color-nums-shadow", "--color-scroll-bg", "--color-scroll-thumb", "--color-scroll-thumb-hover", "--color-control-bg-default", "--color-control-typo-default", "--color-control-typo-placeholder", "--color-control-bg-border-default", "--color-control-bg-border-default-hover", "--color-control-bg-border-focus", "--color-control-bg-focus", "--color-control-bg-active", "--color-control-bg-primary", "--color-control-bg-primary-hover", "--color-control-typo-primary", "--color-control-typo-primary-hover", "--color-control-bg-secondary", "--color-control-bg-border-secondary", "--color-control-bg-border-secondary-hover", "--color-control-typo-secondary", "--color-control-typo-secondary-hover", "--color-control-bg-ghost", "--color-control-bg-ghost-hover", "--color-control-typo-ghost", "--color-control-typo-ghost-hover", "--color-control-bg-clear", "--color-control-bg-clear-hover", "--color-control-typo-clear", "--color-control-typo-clear-hover", "--color-control-bg-disable", "--color-control-bg-border-disable", "--color-control-typo-disable"];
        readonly invert: readonly ["--color-bg-default", "--color-bg-secondary", "--color-bg-brand", "--color-bg-link", "--color-bg-border", "--color-bg-stripe", "--color-bg-ghost", "--color-bg-tone", "--color-bg-soft", "--color-bg-system", "--color-bg-normal", "--color-bg-success", "--color-bg-caution", "--color-bg-warning", "--color-bg-alert", "--color-bg-critical", "--color-typo-primary", "--color-typo-secondary", "--color-typo-ghost", "--color-typo-brand", "--color-typo-system", "--color-typo-normal", "--color-typo-success", "--color-typo-caution", "--color-typo-warning", "--color-typo-alert", "--color-typo-critical", "--color-typo-link", "--color-typo-link-minor", "--color-typo-link-hover", "--color-nums-shadow", "--color-scroll-bg", "--color-scroll-thumb", "--color-scroll-thumb-hover", "--color-control-bg-default", "--color-control-typo-default", "--color-control-typo-placeholder", "--color-control-bg-border-default", "--color-control-bg-border-default-hover", "--color-control-bg-border-focus", "--color-control-bg-focus", "--color-control-bg-active", "--color-control-bg-primary", "--color-control-bg-primary-hover", "--color-control-typo-primary", "--color-control-typo-primary-hover", "--color-control-bg-secondary", "--color-control-bg-border-secondary", "--color-control-bg-border-secondary-hover", "--color-control-typo-secondary", "--color-control-typo-secondary-hover", "--color-control-bg-ghost", "--color-control-bg-ghost-hover", "--color-control-typo-ghost", "--color-control-typo-ghost-hover", "--color-control-bg-clear", "--color-control-bg-clear-hover", "--color-control-typo-clear", "--color-control-typo-clear-hover", "--color-control-bg-disable", "--color-control-bg-border-disable", "--color-control-typo-disable"];
    };
    readonly control: readonly ["--control-radius", "--control-border-width", "--control-height-l", "--control-height-m", "--control-height-s", "--control-height-xs", "--control-box-size-m", "--control-box-size-l", "--control-space-l", "--control-space-m", "--control-space-s", "--control-space-xs", "--control-text-size-l", "--control-text-size-m", "--control-text-size-s", "--control-text-size-xs"];
    readonly font: readonly ["--font-primary", "--font-mono"];
    readonly size: readonly ["--size-text-2xs", "--size-text-xs", "--size-text-s", "--size-text-m", "--size-text-l", "--size-text-xl", "--size-text-2xl", "--size-text-3xl", "--size-text-4xl", "--size-text-5xl", "--size-text-6xl", "--line-height-text-2xs", "--line-height-text-xs", "--line-height-text-s", "--line-height-text-m", "--line-height-text-l"];
    readonly space: readonly ["--space-3xs", "--space-2xs", "--space-xs", "--space-s", "--space-m", "--space-l", "--space-xl", "--space-2xl", "--space-3xl", "--space-4xl", "--space-5xl", "--space-6xl"];
    readonly shadow: readonly ["--shadow-group", "--shadow-layer", "--shadow-modal"];
}>(options?: UseThemeVarsOptions<T> | undefined) => ThemeVars<T>;