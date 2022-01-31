import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { Alert } from '../../../Alert';

export const AlertExampleSize = () => (
  <div>
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <Alert
        status="success"
        view="filled"
        title="Размер l"
        label="Это сообщение поменьше"
        size="l"
      />
      <Alert
        status="success"
        view="filled"
        title="Размер m"
        label="Это обычное сообщение, и размер обычный"
        size="m"
      />
      <Alert
        status="success"
        view="filled"
        title="Размер s"
        label="Это сообщение поменьше"
        size="s"
      />
    </StoryBookExample>
  </div>
);
