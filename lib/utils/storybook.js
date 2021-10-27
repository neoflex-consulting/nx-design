"use strict";
exports.__esModule = true;
exports.getStoryIds = exports.createMetadata = exports.createStory = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
exports.createStory = function (Component, params) {
    if (params === void 0) { params = {}; }
    var wrapper = function () { return react_1["default"].createElement(Component, null); };
    wrapper.story = tslib_1.__assign({}, params);
    return wrapper;
};
exports.createMetadata = function (params) { return params; };
exports.getStoryIds = function (obj) { return Object.keys(obj); };
