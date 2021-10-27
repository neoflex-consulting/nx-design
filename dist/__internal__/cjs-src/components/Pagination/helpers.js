"use strict";
exports.__esModule = true;
exports.getPaginationInfo = void 0;
exports.getPaginationInfo = function (currentPage, totalPages) {
    var maxCount = 10;
    var delta = 3;
    var prevPage = currentPage - 1 || null;
    var nextPage = (currentPage < totalPages && currentPage + 1) || null;
    var isStartDots = maxCount < totalPages && prevPage && prevPage > 1 + delta;
    var isEndDots = maxCount < totalPages && nextPage && nextPage < totalPages - delta - 1;
    var paginationStart = (isStartDots && isEndDots && prevPage && prevPage - 1) ||
        (isStartDots && totalPages - (maxCount - delta)) ||
        1;
    var paginationEnd = (isStartDots && isEndDots && nextPage && nextPage + 2) ||
        (isEndDots && maxCount - delta + 1) ||
        totalPages;
    var pages = Array.from(new Array(paginationEnd - paginationStart + 1), function (val, i) { return i + paginationStart; });
    return {
        isEmpty: totalPages <= 1,
        prevPage: prevPage,
        nextPage: nextPage,
        isStartDots: isStartDots,
        isEndDots: isEndDots,
        pages: pages
    };
};
