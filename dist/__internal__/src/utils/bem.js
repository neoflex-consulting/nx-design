import { __assign } from "tslib";
import { withNaming } from '@bem-react/classname';
var reactBemNaming = { e: '-', m: '_', v: '_' };
export var cn = withNaming(reactBemNaming);
export var withPrefix = function (prefix) { return withNaming(__assign({ n: prefix + "--" }, reactBemNaming)); };
