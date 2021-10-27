import React from 'react';
declare type ValueMultiple = number[] | null;
declare type ValueNotMultiple<IS_NULLABLE_VALUE> = IS_NULLABLE_VALUE extends true ? number | null : number;
declare type UseChoiceGroupIndexedParams<MULTIPLE extends boolean = false, IS_NULLABLE_VALUE extends boolean = false, EVENT = React.MouseEvent<HTMLDivElement, MouseEvent>> = {
    value: (MULTIPLE extends true ? ValueMultiple : ValueNotMultiple<IS_NULLABLE_VALUE>) | undefined;
    multiple: MULTIPLE;
    callBack: (props: {
        e: EVENT;
        value: MULTIPLE extends true ? ValueMultiple : ValueNotMultiple<IS_NULLABLE_VALUE>;
    }) => void;
    isNullableValue?: IS_NULLABLE_VALUE;
};
export declare function useChoiceGroupIndexed<MULTIPLE extends boolean, IS_NULLABLE_VALUE extends boolean, EVENT>(props: UseChoiceGroupIndexedParams<MULTIPLE, IS_NULLABLE_VALUE, EVENT>): {
    getOnChange: (index: number) => (e: EVENT) => void;
    getChecked: (index: number) => boolean;
};
export {};
