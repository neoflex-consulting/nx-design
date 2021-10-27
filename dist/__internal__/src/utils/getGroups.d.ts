declare type Group<ITEM, GROUP> = {
    items: ITEM[];
    key: string | number;
    group?: GROUP;
    groupIndex: number;
};
declare type GetItemGroupKey<ITEM> = (item: ITEM) => string | number | undefined;
declare type GetGroupKey<GROUP> = (item: GROUP) => string | number | undefined;
declare type SortGroups<ITEM, GROUP> = (a: Group<ITEM, GROUP>, b: Group<ITEM, GROUP>) => number;
declare type GetGroupsResult<ITEM, GROUP> = Group<ITEM, GROUP>[];
export declare const defaultGroupKey = "no-group";
/**
 * @param items список который нужно групировать
 * @param getItemGroupKey признак принадлежности к группе
 * @param groups список групп
 * @param getGroupKey результат функции должен вернуть уникальный ключ группы
 * @param sortGroups сортировка групп
 * @param noGroupKey ключ группы которая создаться если item небудет принадлежать ни к одной из групп
 */
export declare function getGroups<ITEM, GROUP>(items: ITEM[], getItemGroupKey: GetItemGroupKey<ITEM> | undefined, groups: GROUP[] | undefined, getGroupKey: GetGroupKey<GROUP> | undefined, sortGroups: SortGroups<ITEM, GROUP> | undefined, noGroupKey?: string): GetGroupsResult<ITEM, GROUP>;
export {};
