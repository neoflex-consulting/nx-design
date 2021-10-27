"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.cnAttach = exports.Attach = void 0;
var Attachment_1 = require("../Attachment/Attachment");
var Attachment_2 = require("../Attachment/Attachment");
__createBinding(exports, Attachment_2, "Attachment");
__createBinding(exports, Attachment_2, "cnAttachment");
/**
 * @deprecated since version 3.2.0 use Attachment
 */
var Attach = Attachment_1.Attachment;
exports.Attach = Attach;
/**
 * @deprecated since version 3.2.0 cnAttachment
 */
var cnAttach = Attachment_1.cnAttachment;
exports.cnAttach = cnAttach;
