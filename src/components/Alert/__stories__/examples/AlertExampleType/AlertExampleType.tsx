import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { Alert } from '../../../Alert';

export const AlertExampleType = () => (
  <div>
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <Alert
        status="success"
        view="filled"
        title="Всё хорошо — это 'success'"
        label="Подходит, чтобы рассказать об успешном результате процесса, в котором сейчас находится пользователь"
      />
      <Alert
        status="warning"
        view="filled"
        title="Внимание — это 'warning'"
        label="Здесь можно написать важную информацию, которая может понадобиться прямо сейчас. Например, о каких-то ограничениях"
      />
      <Alert
        status="error"
        view="filled"
        title="Не получилось — это 'error'"
        label="Подходит, чтобы рассказать об ошибке в процессе"
      />
      <Alert
        status="info"
        view="filled"
        title="Важно, но не критично — это 'info'"
        label="Это просто информация, которую стоит выделить"
      />
      <Alert
        status="system"
        view="filled"
        title="Уведомления системы — это 'system'"
        label="Это просто системная информация. Например: вышло обновление"
      />
    </StoryBookExample>
  </div>
);
