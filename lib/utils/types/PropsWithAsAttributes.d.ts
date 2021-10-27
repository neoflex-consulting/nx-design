import React from 'react';
export declare type PropsWithAsAttributes<Props, As extends keyof JSX.IntrinsicElements> = Props & {
    as?: As;
} & Omit<JSX.IntrinsicElements[As], keyof Props>;
export declare type ComponentWithAs<Props, DefaultTag extends keyof JSX.IntrinsicElements = 'div'> = <As extends keyof JSX.IntrinsicElements = DefaultTag>(props: PropsWithAsAttributes<Props, As> & React.RefAttributes<Element>) => React.ReactElement | null;
declare type ForwardRefWithAs<Props> = <As extends keyof JSX.IntrinsicElements>(props: PropsWithAsAttributes<Props, As>, ref: React.Ref<HTMLElement>) => React.ReactElement | null;
export declare function forwardRefWithAs<Props, As extends keyof JSX.IntrinsicElements = 'div'>(render: ForwardRefWithAs<Props>): ComponentWithAs<Props, As>;
export {};
