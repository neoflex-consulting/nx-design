/// <reference types="react" />
export declare type PropsWithHTMLAttributes<Props, HTMLElement> = Props & Omit<React.HTMLAttributes<HTMLElement>, keyof Props | 'css'>;
export declare type PropsWithHTMLAttributesAndRef<Props, HTMLElement> = PropsWithHTMLAttributes<React.PropsWithoutRef<Props>, HTMLElement> & React.RefAttributes<HTMLElement>;
