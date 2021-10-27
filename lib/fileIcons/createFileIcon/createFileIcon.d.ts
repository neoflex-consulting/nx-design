import React from 'react';
declare type SizeComponent = React.FC<React.SVGProps<SVGSVGElement>>;
declare type CreateFileIconArguments = {
    m: SizeComponent;
    s: SizeComponent;
    name: string;
};
export declare function createFileIcon({ m, s, name }: CreateFileIconArguments): React.FC<import("../../utils/types/PropsWithHTMLAttributes").PropsWithHTMLAttributes<{
    size?: "s" | "m" | undefined;
}, HTMLDivElement>>;
export {};
