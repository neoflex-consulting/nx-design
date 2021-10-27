import React from 'react';
import { ResponsesImageSuccess } from '../../responsesImages/ResponsesImageSuccess/ResponsesImageSuccess';
import { Button } from '../Button/Button';
import { createResponses } from '../Responses/createResponses';
export var ResponsesSuccess = createResponses({
    name: 'ResponsesSuccess',
    image: ResponsesImageSuccess,
    title: 'Письмо отправлено',
    actions: React.createElement(Button, { label: "\u0425\u043E\u0440\u043E\u0448\u043E", view: "ghost" })
});
