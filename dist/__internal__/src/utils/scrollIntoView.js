import computeScrollIntoView from 'compute-scroll-into-view';
export function scrollIntoView(node, menuNode) {
    var actions = computeScrollIntoView(node, {
        boundary: menuNode,
        block: 'nearest',
        scrollMode: 'if-needed'
    });
    actions.forEach(function (action) {
        var el = action.el, top = action.top, left = action.left;
        el.scrollTop = top;
        el.scrollLeft = left;
    });
}
