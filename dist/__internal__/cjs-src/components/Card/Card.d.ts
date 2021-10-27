import React from 'react';
export declare const cardPropForm: readonly ["round", "square"];
export declare type CardPropForm = typeof cardPropForm[number];
export declare const cardPropFormDefault: CardPropForm;
export declare const cardPropSpace: readonly ["m", "xs", "s", "l", "xl", "2xl", "3xl", "4xl", "5xl"];
export declare type CardPropSpace = typeof cardPropSpace[number];
export declare const cardPropStatus: readonly ["alert", "success", "warning"];
export declare type CardPropStatus = typeof cardPropStatus[number] | string;
export declare type Props = {
    verticalSpace?: CardPropSpace;
    horizontalSpace?: CardPropSpace;
    status?: CardPropStatus;
    form?: CardPropForm;
    shadow?: boolean;
    children?: React.ReactNode;
};
export declare const cnCard: import("@bem-react/classname").ClassNameFormatter;
export declare const Card: import("../../utils/types/PropsWithAsAttributes").ComponentWithAs<Props, "div">;
