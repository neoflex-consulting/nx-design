import React from 'react';

import { ResponsesImageEmptyBox } from '../../responsesImages/ResponsesImageEmptyBox/ResponsesImageEmptyBox';
import { Button } from '../index';
import { createResponses } from '../Responses/createResponses';

export const ResponsesEmptyBox = createResponses({
  name: 'ResponsesEmptyBox',
  image: ResponsesImageEmptyBox,
  title: 'Здесь пока ничего нет',
  description: 'Будьте первым, добавьте что-нибудь полезное',
  actions: <Button label="Добавить что-нибудь" />,
});
