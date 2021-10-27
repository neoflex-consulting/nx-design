"use strict";
exports.__esModule = true;
exports.cnForCssTransition = void 0;
function cnFunctionHelper(cnFunction, animateName, animate, element) {
    var _a, _b;
    return element
        ? cnFunction(element, (_a = {}, _a[animateName] = animate, _a))
        : cnFunction((_b = {}, _b[animateName] = animate, _b));
}
function cnForCssTransition(cnFunction, element, animateName) {
    if (animateName === void 0) { animateName = 'animate'; }
    return {
        appear: cnFunctionHelper(cnFunction, animateName, 'appear', element),
        appearActive: cnFunctionHelper(cnFunction, animateName, 'appearActive', element),
        appearDone: cnFunctionHelper(cnFunction, animateName, 'appearDone', element),
        enter: cnFunctionHelper(cnFunction, animateName, 'enter', element),
        enterActive: cnFunctionHelper(cnFunction, animateName, 'enterActive', element),
        enterDone: cnFunctionHelper(cnFunction, animateName, 'enterDone', element),
        exit: cnFunctionHelper(cnFunction, animateName, 'exit', element),
        exitActive: cnFunctionHelper(cnFunction, animateName, 'exitActive', element),
        exitDone: cnFunctionHelper(cnFunction, animateName, 'exitDone', element)
    };
}
exports.cnForCssTransition = cnForCssTransition;
