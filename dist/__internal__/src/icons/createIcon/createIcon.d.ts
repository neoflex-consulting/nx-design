import React from 'react';
declare type SizeComponent = React.FC<React.SVGProps<SVGSVGElement>>;
declare type CreateIconArguments = {
    m: SizeComponent;
    s: SizeComponent;
    xs: SizeComponent;
    name: string;
};
export declare function createIcon({ m, s, xs, name }: CreateIconArguments): React.FC<import("../../utils/types/PropsWithHTMLAttributes").PropsWithHTMLAttributes<import("../Icon/Icon").Props, HTMLSpanElement>>;
export {};
