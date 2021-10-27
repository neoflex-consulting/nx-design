import { ClassNameFormatter } from '@bem-react/classname';
export declare type CSSTransitionClassNames = {
    appear: string;
    appearActive: string;
    appearDone: string;
    enter: string;
    enterActive: string;
    enterDone: string;
    exit: string;
    exitActive: string;
    exitDone: string;
};
export declare function cnForCssTransition(cnFunction: ClassNameFormatter, element?: string, animateName?: string): CSSTransitionClassNames;
