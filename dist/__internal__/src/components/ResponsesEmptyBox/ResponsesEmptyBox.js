import React from 'react';
import { ResponsesImageEmptyBox } from '../../responsesImages/ResponsesImageEmptyBox/ResponsesImageEmptyBox';
import { Button } from '../Button/Button';
import { createResponses } from '../Responses/createResponses';
export var ResponsesEmptyBox = createResponses({
    name: 'ResponsesEmptyBox',
    image: ResponsesImageEmptyBox,
    title: 'Здесь пока ничего нет',
    description: 'Будьте первым, добавьте что-нибудь полезное',
    actions: React.createElement(Button, { label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0447\u0442\u043E-\u043D\u0438\u0431\u0443\u0434\u044C" })
});
