import React from 'react';
import { ResponsesImageNothingFound } from '../../responsesImages/ResponsesImageNothingFound/ResponsesImageNothingFound';
import { Button } from '../Button/Button';
import { createResponses } from '../Responses/createResponses';
export var ResponsesNothingFound = createResponses({
    name: 'ResponsesNothingFound',
    image: ResponsesImageNothingFound,
    title: 'Ничего не найдено',
    description: 'Попробуйте сформулировать запрос по-другому',
    actions: React.createElement(Button, { label: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430\u0437\u0430\u0434", view: "ghost" })
});
