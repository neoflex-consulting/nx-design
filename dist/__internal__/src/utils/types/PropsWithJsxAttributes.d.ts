/// <reference types="react" />
export declare type PropsWithJsxAttributes<Props, As extends keyof JSX.IntrinsicElements = 'div'> = Omit<Props & Omit<JSX.IntrinsicElements[As], keyof Props>, 'css'>;
