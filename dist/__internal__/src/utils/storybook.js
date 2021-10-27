import { __assign } from "tslib";
import React from 'react';
export var createStory = function (Component, params) {
    if (params === void 0) { params = {}; }
    var wrapper = function () { return React.createElement(Component, null); };
    wrapper.story = __assign({}, params);
    return wrapper;
};
export var createMetadata = function (params) { return params; };
export var getStoryIds = function (obj) { return Object.keys(obj); };
