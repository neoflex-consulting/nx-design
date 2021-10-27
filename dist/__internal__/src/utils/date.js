import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import { isDefined } from './type-guards';
export var getMonthTitle = function (date) {
    return format(date, 'LLLL', { locale: ruLocale });
};
export var isDateRange = function (value) {
    return Array.isArray(value) &&
        value.length === 2 &&
        value.every(function (date) { return date instanceof Date || !isDefined(date); });
};
export var isOnlyOneDateInRange = function (range) {
    return Boolean((range[0] && !range[1]) || (!range[0] && range[1]));
};
