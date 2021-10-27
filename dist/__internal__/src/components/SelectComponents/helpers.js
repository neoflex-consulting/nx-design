import { selectDropdownform } from './SelectDropdown/SelectDropdown';
var mapDropdownForms = {
    "default": selectDropdownform[0],
    brick: selectDropdownform[1],
    round: selectDropdownform[2],
    clearRound: selectDropdownform[2],
    roundClear: selectDropdownform[2],
    clearDefault: selectDropdownform[0],
    defaultClear: selectDropdownform[0],
    defaultBrick: selectDropdownform[0],
    brickDefault: selectDropdownform[1],
    brickClear: selectDropdownform[1],
    clearBrick: selectDropdownform[1],
    clearClear: selectDropdownform[0]
};
export function getSelectDropdownForm(form) {
    return mapDropdownForms[form];
}
export var defaultlabelForNotFound = 'Не найдено';
export var defaultlabelForCreate = '+';
export var getInputWidth = function (controlInnerRef, helperInputFakeElement) {
    if (!controlInnerRef.current || !helperInputFakeElement.current) {
        return 20;
    }
    var fakeElWidth = helperInputFakeElement.current.offsetWidth + 20;
    var maxWidth = controlInnerRef.current ? controlInnerRef.current.offsetWidth - 15 : 2;
    var width = fakeElWidth > maxWidth ? maxWidth : fakeElWidth;
    return width;
};
