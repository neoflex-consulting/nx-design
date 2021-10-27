import './StepsStep.css';
import React from 'react';
import { StepsPropSize } from '../Steps';
export declare const cnStepsStep: import("@bem-react/classname").ClassNameFormatter;
declare type Props = {
    size: StepsPropSize;
    label: string;
    active?: boolean;
    disabled?: boolean;
    completed?: boolean;
    skipped?: boolean;
    onChange: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
};
export declare const StepsStep: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLButtonElement>>;
export {};
