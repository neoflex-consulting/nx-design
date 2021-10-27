import { __assign, __rest } from "tslib";
import './Header.css';
import React from 'react';
import { cn } from '../../utils/bem';
export var cnHeader = cn('Header');
export function Header(props) {
    var leftSide = props.leftSide, rightSide = props.rightSide, className = props.className, otherProps = __rest(props, ["leftSide", "rightSide", "className"]);
    return (React.createElement("header", __assign({}, otherProps, { className: cnHeader(null, [className]) }),
        leftSide && React.createElement("div", { className: cnHeader('LeftSide') }, leftSide),
        rightSide && React.createElement("div", { className: cnHeader('RightSide') }, rightSide)));
}
export { HeaderLogo } from './Logo/HeaderLogo';
export { HeaderSearchBar } from './SearchBar/HeaderSearchBar';
export { HeaderMenu } from './Menu/HeaderMenu';
export { HeaderModule } from './Module/HeaderModule';
export { HeaderLogin } from './Login/HeaderLogin';
export { HeaderButton } from './Button/HeaderButton';
