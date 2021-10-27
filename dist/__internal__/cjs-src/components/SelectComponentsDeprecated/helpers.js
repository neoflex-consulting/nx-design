"use strict";
exports.__esModule = true;
exports.getSelectDropdownForm = void 0;
var SelectDropdown_1 = require("./SelectDropdown/SelectDropdown");
var mapDropdownForms = {
    "default": SelectDropdown_1.selectDropdownform[0],
    brick: SelectDropdown_1.selectDropdownform[1],
    round: SelectDropdown_1.selectDropdownform[2],
    clearRound: SelectDropdown_1.selectDropdownform[2],
    roundClear: SelectDropdown_1.selectDropdownform[2],
    clearDefault: SelectDropdown_1.selectDropdownform[0],
    defaultClear: SelectDropdown_1.selectDropdownform[0],
    defaultBrick: SelectDropdown_1.selectDropdownform[0],
    brickDefault: SelectDropdown_1.selectDropdownform[1],
    brickClear: SelectDropdown_1.selectDropdownform[1],
    clearBrick: SelectDropdown_1.selectDropdownform[1],
    clearClear: SelectDropdown_1.selectDropdownform[0]
};
function getSelectDropdownForm(form) {
    return mapDropdownForms[form];
}
exports.getSelectDropdownForm = getSelectDropdownForm;
