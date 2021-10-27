import { __values } from "tslib";
export var defaultGroupKey = 'no-group';
/**
 * @param items список который нужно групировать
 * @param getItemGroupKey признак принадлежности к группе
 * @param groups список групп
 * @param getGroupKey результат функции должен вернуть уникальный ключ группы
 * @param sortGroups сортировка групп
 * @param noGroupKey ключ группы которая создаться если item небудет принадлежать ни к одной из групп
 */
export function getGroups(items, getItemGroupKey, groups, getGroupKey, sortGroups, noGroupKey) {
    var e_1, _a;
    if (noGroupKey === void 0) { noGroupKey = defaultGroupKey; }
    if (typeof getItemGroupKey !== 'function') {
        return [{ items: items, key: noGroupKey, groupIndex: -1 }];
    }
    var resultGroups = [];
    var _loop_1 = function (item) {
        var itemGroupKey = getItemGroupKey(item) || noGroupKey;
        var resultGroupIndex = resultGroups.findIndex(function (group) { return group.key === itemGroupKey; });
        if (resultGroupIndex >= 0) {
            resultGroups[resultGroupIndex].items.push(item);
        }
        else {
            var groupIndex = getGroupKey && groups ? groups.findIndex(function (g) { return getGroupKey(g) === itemGroupKey; }) : -1;
            var resultGroup = {
                key: itemGroupKey,
                items: [item],
                groupIndex: groupIndex,
                group: groups ? groups[groupIndex] : undefined
            };
            resultGroups.push(resultGroup);
        }
    };
    try {
        for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
            var item = items_1_1.value;
            _loop_1(item);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (items_1_1 && !items_1_1.done && (_a = items_1["return"])) _a.call(items_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    if (typeof sortGroups === 'function') {
        resultGroups.sort(sortGroups);
    }
    else if (groups && getGroupKey) {
        resultGroups.sort(function (a, b) {
            if (a.groupIndex > b.groupIndex)
                return 1;
            if (a.groupIndex < b.groupIndex)
                return -1;
            return 0;
        });
    }
    return resultGroups;
}
