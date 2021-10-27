"use strict";
exports.__esModule = true;
exports.getComputedPositionAndDirection = exports.getPositionsByDirection = void 0;
var tslib_1 = require("tslib");
var getPosition = function (x, y) { return ({
    x: Math.round(x),
    y: Math.round(y)
}); };
exports.getPositionsByDirection = function (_a) {
    var contentSize = _a.contentSize, anchorSize = _a.anchorSize, _b = _a.position, x = _b.x, y = _b.y, offset = _a.offset, _c = _a.arrowOffset, arrowOffset = _c === void 0 ? 0 : _c;
    var contentWidth = contentSize.width, contentHeight = contentSize.height;
    var anchorWidth = anchorSize.width, anchorHeight = anchorSize.height;
    var anchorCenter = {
        x: x + anchorWidth / 2,
        y: y + anchorHeight / 2
    };
    var xForRightDirections = x + anchorWidth + offset;
    var xForLeftDirections = x - contentWidth - offset;
    var xForVerticalDirections = {
        right: anchorCenter.x - arrowOffset,
        center: anchorCenter.x - contentWidth / 2,
        left: anchorCenter.x - contentWidth + arrowOffset
    };
    var yForDownDirections = y + anchorHeight + offset;
    var yForUpDirections = y - contentHeight - offset;
    var yForHorizontalDirections = {
        up: anchorCenter.y - contentHeight + arrowOffset,
        center: anchorCenter.y - contentHeight / 2,
        down: anchorCenter.y - arrowOffset
    };
    var xForStartLeftDirections = x;
    var xForStartRightDirections = x - contentWidth + anchorWidth;
    var yForStartUpDirections = y;
    var yForStartDownDirections = y - contentHeight + anchorHeight;
    return {
        upLeft: getPosition(xForVerticalDirections.left, yForUpDirections),
        upCenter: getPosition(xForVerticalDirections.center, yForUpDirections),
        upRight: getPosition(xForVerticalDirections.right, yForUpDirections),
        downLeft: getPosition(xForVerticalDirections.left, yForDownDirections),
        downCenter: getPosition(xForVerticalDirections.center, yForDownDirections),
        downRight: getPosition(xForVerticalDirections.right, yForDownDirections),
        rightUp: getPosition(xForRightDirections, yForHorizontalDirections.up),
        rightCenter: getPosition(xForRightDirections, yForHorizontalDirections.center),
        rightDown: getPosition(xForRightDirections, yForHorizontalDirections.down),
        leftUp: getPosition(xForLeftDirections, yForHorizontalDirections.up),
        leftCenter: getPosition(xForLeftDirections, yForHorizontalDirections.center),
        leftDown: getPosition(xForLeftDirections, yForHorizontalDirections.down),
        downStartLeft: getPosition(xForStartLeftDirections, yForDownDirections),
        downStartRight: getPosition(xForStartRightDirections, yForDownDirections),
        upStartLeft: getPosition(xForStartLeftDirections, yForUpDirections),
        upStartRight: getPosition(xForStartRightDirections, yForUpDirections),
        leftStartUp: getPosition(xForLeftDirections, yForStartUpDirections),
        leftStartDown: getPosition(xForLeftDirections, yForStartDownDirections),
        rightStartUp: getPosition(xForRightDirections, yForStartUpDirections),
        rightStartDown: getPosition(xForRightDirections, yForStartDownDirections)
    };
};
exports.getComputedPositionAndDirection = function (_a) {
    var initialPosition = _a.position, contentSize = _a.contentSize, viewportSize = _a.viewportSize, _b = _a.anchorSize, anchorSize = _b === void 0 ? { width: 0, height: 0 } : _b, offset = _a.offset, arrowOffset = _a.arrowOffset, initialDirection = _a.direction, possibleDirections = _a.possibleDirections, bannedDirections = _a.bannedDirections, spareDirection = _a.spareDirection;
    if (!initialPosition) {
        return { position: initialPosition, direction: initialDirection };
    }
    var positionsByDirection = exports.getPositionsByDirection({
        contentSize: contentSize,
        anchorSize: anchorSize,
        position: initialPosition,
        offset: offset,
        arrowOffset: arrowOffset
    });
    var direction = tslib_1.__spread([initialDirection], possibleDirections).filter(function (dir) { return !bannedDirections.includes(dir); })
        .find(function (dir) {
        var pos = positionsByDirection[dir];
        var width = contentSize.width, height = contentSize.height;
        var isFittingDown = pos.y + height <= viewportSize.height;
        var isFittingUp = pos.y >= 0;
        var isFittingLeft = pos.x >= 0;
        var isFittingRight = pos.x + width <= viewportSize.width;
        return isFittingUp && isFittingDown && isFittingLeft && isFittingRight;
    }) || spareDirection;
    return {
        direction: direction,
        position: positionsByDirection[direction]
    };
};
