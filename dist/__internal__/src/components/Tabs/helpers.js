export var getTabsDirection = function (linePosition) {
    return linePosition === 'left' || linePosition === 'right' ? 'vertical' : 'horizontal';
};
export var getTabsWidth = function (tabsDimensions) {
    return tabsDimensions.reduce(function (acc, td) { return acc + td.size + td.gap; }, 0);
};
