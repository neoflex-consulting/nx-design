import React from 'react';

import { ResponsesImageConnectionError } from '../../responsesImages/ResponsesImageConnectionError/ResponsesImageConnectionError';
import { Button } from '../index';
import { createResponses } from '../Responses/createResponses';

export const ResponsesConnectionError = createResponses({
  name: 'ResponsesConnectionError',
  image: ResponsesImageConnectionError,
  title: 'Проблемы с загрузкой',
  description: 'Какие-то проблемы со связью. Обновите страницу.',
  actions: <Button label="Перезагрузить" view="ghost" />,
});
