import '../SelectComponentsDeprecated/Select.css';
import React from 'react';
import { SelectContainer } from '../SelectComponentsDeprecated/SelectContainer/SelectContainer';
import { CommonSelectProps } from '../SelectComponentsDeprecated/types';
declare type SelectContainerProps = React.ComponentProps<typeof SelectContainer>;
export declare type SimpleSelectProps<ITEM> = CommonSelectProps<ITEM> & Omit<SelectContainerProps, 'value' | 'onChange'> & {
    value?: ITEM | null;
    onChange?: (v: ITEM | null) => void;
};
declare type Select = <ITEM>(props: SimpleSelectProps<ITEM>) => React.ReactElement | null;
export declare const BasicSelect: Select;
export {};
