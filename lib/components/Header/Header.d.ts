import './Header.css';
import React from 'react';
import { PropsWithJsxAttributes } from '../../utils/types/PropsWithJsxAttributes';
export declare type HeaderProps = PropsWithJsxAttributes<{
    leftSide?: React.ReactNode;
    rightSide?: React.ReactNode;
    children?: never;
}, 'header'>;
export declare const cnHeader: import("@bem-react/classname").ClassNameFormatter;
export declare function Header(props: HeaderProps): React.ReactElement;
export { HeaderLogo } from './Logo/HeaderLogo';
export { HeaderSearchBar } from './SearchBar/HeaderSearchBar';
export { HeaderMenu } from './Menu/HeaderMenu';
export { HeaderModule } from './Module/HeaderModule';
export { HeaderLogin } from './Login/HeaderLogin';
export { HeaderButton } from './Button/HeaderButton';
