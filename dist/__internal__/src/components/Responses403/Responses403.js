import React from 'react';
import { ResponsesImage403 } from '../../responsesImages/ResponsesImage403/ResponsesImage403';
import { Button } from '../Button/Button';
import { createResponses } from '../Responses/createResponses';
export var Responses403 = createResponses({
    name: 'Responses403',
    image: ResponsesImage403,
    title: 'Нет доступа',
    description: 'Если вы уверены, что вам нужна эта страница, запросите доступ у администратора',
    actions: React.createElement(Button, { label: "\u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F", view: "ghost" })
});
