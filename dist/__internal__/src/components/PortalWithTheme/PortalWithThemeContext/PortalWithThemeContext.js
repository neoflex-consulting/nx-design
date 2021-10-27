import { __read, __spread } from "tslib";
import React, { createContext, useContext, useEffect, useState } from 'react';
var Context = createContext({
    refs: []
});
export function usePortalContext() {
    return useContext(Context);
}
/**
 * PortalWithThemeProvider
 * нужен для того чтобы получать рефы дочерних порталов и прокидывать их в родительские порталы
 * Это нужно чтобы в компонетах использовать usePortalContext()
 * и получать рефы всех вложенных порталов в компонент, чтобы без ошибочно реализовать onOutsideClick.
 * Проблема заклбчалась в том что при нажатии на любой вложенный портал,
 * компонент думал ччто клик произашел вне компонента и срабатывал onOutsideClick.
 * Сечас когда мы знаем рефы всех вложенных порталов мы можем игнорировать события кликов на вложенных порталах
 */
export var PortalWithThemeProvider = function (props) {
    var _a = __read(useState([]), 2), refs = _a[0], setRefs = _a[1];
    var contextAddRefs = usePortalContext().addRefs;
    /**
     * фукция для добавления рефов дочерних порталов
     * @param {React.RefObject<HTMLElement>[]} addRef массив ссылок
     */
    var addRefs = function (addRef) {
        if (addRef.length > 0) {
            var newRefs = __spread(refs.filter(function (item) { return item.current; }), addRef.filter(function (addItem) {
                if (!addItem.current) {
                    return false;
                }
                return !refs.find(function (item) { return item.current === addItem.current; });
            }));
            setRefs(newRefs);
        }
    };
    /**
     * при изменении дочерних рефов необходимо добавить их в родительские порталы
     */
    useEffect(function () {
        contextAddRefs && contextAddRefs(refs);
    }, [refs]);
    useEffect(function () { return function () { return setRefs([]); }; }, []);
    return React.createElement(Context.Provider, { value: { refs: refs, addRefs: addRefs } }, props.children);
};
