import './DragNDropFieldContent.css';
import React from 'react';
import { IconAttach } from '../../../icons/IconAttach/IconAttach';
import { cn } from '../../../utils/bem';
import { Button } from '../../Button/Button';
import { Text } from '../../Text/Text';
import { formatFileRequirements } from './formatFileRequirements';
var cnDragNDropFieldContent = cn('DragNDropFieldContent');
export var DragNDropFieldContent = function (_a) {
    var accept = _a.accept, maxSize = _a.maxSize, multiple = _a.multiple, openFileDialog = _a.openFileDialog;
    var requirements = formatFileRequirements(accept, maxSize);
    var fileText = multiple ? 'файлы' : 'файл';
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { view: "secondary", size: "s", lineHeight: "s", align: "center" },
            "\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 ",
            fileText,
            " \u0441\u044E\u0434\u0430 \u0438\u043B\u0438\u00A0\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043F\u043E\u00A0\u043A\u043D\u043E\u043F\u043A\u0435",
            requirements && (React.createElement(React.Fragment, null,
                React.createElement("br", null),
                requirements))),
        React.createElement(Button, { className: cnDragNDropFieldContent('Button'), label: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C " + fileText, iconLeft: IconAttach, view: "ghost", size: "s", onClick: openFileDialog })));
};
