import React from 'react';
import { ResponsesImageDeleted } from '../../responsesImages/ResponsesImageDeleted/ResponsesImageDeleted';
import { Button } from '../Button/Button';
import { createResponses } from '../Responses/createResponses';
export var ResponsesDeleted = createResponses({
    name: 'ResponsesDeleted',
    image: ResponsesImageDeleted,
    title: '*Что-то* удалено',
    description: '*Что-то* успешно удалено',
    actions: (React.createElement(React.Fragment, null,
        React.createElement(Button, { label: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C \u043D\u0430 \u043C\u0435\u0441\u0442\u043E", view: "ghost", style: { marginRight: 'var(--space-m)' } }),
        React.createElement(Button, { label: "\u041E\u0442\u043B\u0438\u0447\u043D\u043E!", view: "ghost" })))
});
