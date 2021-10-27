import './Steps.css';
import React from 'react';
import { PropsWithHTMLAttributesAndRef } from '../../utils/types/PropsWithHTMLAttributes';
export declare const stepsSizes: readonly ["m", "l"];
export declare type StepsPropSize = typeof stepsSizes[number];
export declare const stepsDefaultSize: StepsPropSize;
export declare type StepsPropGetLabel<ITEM> = (item: ITEM) => string;
export declare type StepsPropGetCommon<ITEM> = (item: ITEM) => boolean;
export declare type StepsPropOnChange<ITEM> = (props: {
    e: React.MouseEvent;
    value: ITEM;
}) => void;
declare type Props<ITEM> = {
    size?: StepsPropSize;
    items: ITEM[];
    value: ITEM;
    getLabel: StepsPropGetLabel<ITEM>;
    getDisabled?: StepsPropGetCommon<ITEM>;
    getCompleted?: StepsPropGetCommon<ITEM>;
    getSkipped?: StepsPropGetCommon<ITEM>;
    onChange: StepsPropOnChange<ITEM>;
    className?: string;
};
declare type Steps = <ITEM>(props: PropsWithHTMLAttributesAndRef<Props<ITEM>, HTMLDivElement>) => React.ReactElement | null;
export declare const cnSteps: import("@bem-react/classname").ClassNameFormatter;
export declare const Steps: Steps;
export {};
