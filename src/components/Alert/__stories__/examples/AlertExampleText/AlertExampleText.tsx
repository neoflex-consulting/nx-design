import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { Alert } from '../../../Alert';

export const AlertExampleSuccess = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <Alert
      status="success"
      view="filled"
      title="Заявка отправлена"
      label="Подождите до завтра: мы всё посчитаем и вам позвоним"
    />
  </StoryBookExample>
);

export const AlertExampleAlert = () => (
  <StoryBookExample className={cnDocsDecorator('Section')}>
    <Alert
      status="error"
      view="filled"
      title="Ничего не вышло"
      label="Попробуйте выйти и зайти снова. Если не получается, нажмите красную кнопку три раза"
    />
  </StoryBookExample>
);
