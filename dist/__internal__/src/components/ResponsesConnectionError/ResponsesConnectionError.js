import React from 'react';
import { ResponsesImageConnectionError } from '../../responsesImages/ResponsesImageConnectionError/ResponsesImageConnectionError';
import { Button } from '../Button/Button';
import { createResponses } from '../Responses/createResponses';
export var ResponsesConnectionError = createResponses({
    name: 'ResponsesConnectionError',
    image: ResponsesImageConnectionError,
    title: 'Проблемы с загрузкой',
    description: 'Какие-то проблемы со связью. Обновите страницу.',
    actions: React.createElement(Button, { label: "\u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C", view: "ghost" })
});
