declare type GetKey<ITEM> = (item: ITEM) => string | number;
declare type GetOnChange<ITEM, EVENT> = (item: ITEM) => (e: EVENT) => void;
declare type GetChecked<ITEM> = (item: ITEM) => boolean;
declare type UseChoiceGroupValues<ITEM, EVENT> = {
    getOnChange: GetOnChange<ITEM, EVENT>;
    getChecked: GetChecked<ITEM>;
};
declare type CallbackWithMultiple<ITEM, EVENT> = (props: {
    e: EVENT;
    value: ITEM[] | null;
}) => void;
declare type CallbackWithoutMultiple<ITEM, EVENT> = (props: {
    e: EVENT;
    value: ITEM;
}) => void;
declare type PropsWithMultiple<ITEM, EVENT> = {
    multiple: true;
    value: ITEM[] | null;
    callBack: CallbackWithMultiple<ITEM, EVENT>;
};
declare type PropsWithoutMultiple<ITEM, EVENT> = {
    multiple: false;
    value: ITEM | null;
    callBack: CallbackWithoutMultiple<ITEM, EVENT>;
};
declare type CommonProps<ITEM> = {
    getKey: GetKey<ITEM>;
};
declare type UseChoiceGroupProps<ITEM, EVENT> = CommonProps<ITEM> & (PropsWithMultiple<ITEM, EVENT> | PropsWithoutMultiple<ITEM, EVENT>);
export declare function useChoiceGroup<ITEM, EVENT>(props: UseChoiceGroupProps<ITEM, EVENT>): UseChoiceGroupValues<ITEM, EVENT>;
export {};
