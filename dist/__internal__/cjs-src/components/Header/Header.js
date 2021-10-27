"use strict";
exports.__esModule = true;
exports.Header = exports.cnHeader = void 0;
var tslib_1 = require("tslib");
require("./Header.css");
var react_1 = tslib_1.__importDefault(require("react"));
var bem_1 = require("../../utils/bem");
exports.cnHeader = bem_1.cn('Header');
function Header(props) {
    var leftSide = props.leftSide, rightSide = props.rightSide, className = props.className, otherProps = tslib_1.__rest(props, ["leftSide", "rightSide", "className"]);
    return (react_1["default"].createElement("header", tslib_1.__assign({}, otherProps, { className: exports.cnHeader(null, [className]) }),
        leftSide && react_1["default"].createElement("div", { className: exports.cnHeader('LeftSide') }, leftSide),
        rightSide && react_1["default"].createElement("div", { className: exports.cnHeader('RightSide') }, rightSide)));
}
exports.Header = Header;
var HeaderLogo_1 = require("./Logo/HeaderLogo");
tslib_1.__createBinding(exports, HeaderLogo_1, "HeaderLogo");
var HeaderSearchBar_1 = require("./SearchBar/HeaderSearchBar");
tslib_1.__createBinding(exports, HeaderSearchBar_1, "HeaderSearchBar");
var HeaderMenu_1 = require("./Menu/HeaderMenu");
tslib_1.__createBinding(exports, HeaderMenu_1, "HeaderMenu");
var HeaderModule_1 = require("./Module/HeaderModule");
tslib_1.__createBinding(exports, HeaderModule_1, "HeaderModule");
var HeaderLogin_1 = require("./Login/HeaderLogin");
tslib_1.__createBinding(exports, HeaderLogin_1, "HeaderLogin");
var HeaderButton_1 = require("./Button/HeaderButton");
tslib_1.__createBinding(exports, HeaderButton_1, "HeaderButton");
