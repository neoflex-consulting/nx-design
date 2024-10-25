import { ClassNameFormatter } from '@bem-react/classname';

export type CSSTransitionClassNames = {
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

function cnFunctionHelper(
  cnFunction: ClassNameFormatter,
  animateName: string,
  animate: string,
  element?: string,
  modifier?: string,
) {
  const params = {
    [animateName]: animate
  };
  if(modifier){
    params['']= modifier
  };
  return element
    ? cnFunction(element, params)
    : cnFunction(params);
}

export function cnForCssTransition(
  cnFunction: ClassNameFormatter,
  element?: string,
  modifier?: string,
  animateName = 'animate',
): CSSTransitionClassNames {
  return {
    appear: cnFunctionHelper(cnFunction, animateName, 'appear', element, modifier),
    appearActive: cnFunctionHelper(cnFunction, animateName, 'appearActive', element, modifier),
    appearDone: cnFunctionHelper(cnFunction, animateName, 'appearDone', element, modifier),
    enter: cnFunctionHelper(cnFunction, animateName, 'enter', element, modifier),
    enterActive: cnFunctionHelper(cnFunction, animateName, 'enterActive', element, modifier),
    enterDone: cnFunctionHelper(cnFunction, animateName, 'enterDone', element, modifier),
    exit: cnFunctionHelper(cnFunction, animateName, 'exit', element, modifier),
    exitActive: cnFunctionHelper(cnFunction, animateName, 'exitActive', element, modifier),
    exitDone: cnFunctionHelper(cnFunction, animateName, 'exitDone', element, modifier),
  };
}
