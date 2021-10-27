import React from 'react';
export declare function usePortalContext(): {
    refs: React.RefObject<HTMLElement>[];
    addRefs?: ((ref: React.RefObject<HTMLElement>[]) => void) | undefined;
};
/**
 * PortalWithThemeProvider
 * нужен для того чтобы получать рефы дочерних порталов и прокидывать их в родительские порталы
 * Это нужно чтобы в компонетах использовать usePortalContext()
 * и получать рефы всех вложенных порталов в компонент, чтобы без ошибочно реализовать onOutsideClick.
 * Проблема заклбчалась в том что при нажатии на любой вложенный портал,
 * компонент думал ччто клик произашел вне компонента и срабатывал onOutsideClick.
 * Сечас когда мы знаем рефы всех вложенных порталов мы можем игнорировать события кликов на вложенных порталах
 */
export declare const PortalWithThemeProvider: React.FC;
