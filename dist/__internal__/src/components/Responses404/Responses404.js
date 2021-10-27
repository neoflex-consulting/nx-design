import React from 'react';
import { ResponsesImage404 } from '../../responsesImages/ResponsesImage404/ResponsesImage404';
import { Button } from '../Button/Button';
import { createResponses } from '../Responses/createResponses';
export var Responses404 = createResponses({
    name: 'Responses404',
    image: ResponsesImage404,
    title: 'Такой страницы нет',
    description: 'Возможно, эту страницу уже удалили, или в вашей ссылке ошибка',
    actions: React.createElement(Button, { label: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430\u0437\u0430\u0434", view: "ghost" })
});
