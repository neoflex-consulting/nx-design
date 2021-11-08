import React from 'react';

import { ResponsesImageEmptyPockets } from '../../responsesImages/ResponsesImageEmptyPockets/ResponsesImageEmptyPockets';
import { Button } from '../index';
import { createResponses } from '../Responses/createResponses';

export const ResponsesEmptyPockets = createResponses({
  name: 'ResponsesEmptyPockets',
  image: ResponsesImageEmptyPockets,
  title: 'Здесь пока ничего нет',
  description: 'Будьте первым, добавьте что-нибудь красивое',
  actions: <Button label="Добавить что-нибудь" />,
});
