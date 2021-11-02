import React from 'react';

import { ResponsesImageSuccess } from '../../responsesImages/ResponsesImageSuccess/ResponsesImageSuccess';
import { Button } from '../index';
import { createResponses } from '../Responses/createResponses';

export const ResponsesSuccess = createResponses({
  name: 'ResponsesSuccess',
  image: ResponsesImageSuccess,
  title: 'Письмо отправлено',
  actions: <Button label="Хорошо" view="ghost" />,
});
