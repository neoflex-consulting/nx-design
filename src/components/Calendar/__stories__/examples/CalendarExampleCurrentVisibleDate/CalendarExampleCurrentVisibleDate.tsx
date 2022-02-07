import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { Calendar } from '../../../Calendar';

export const CalendarExampleCurrentVisibleDate = () => {
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <Calendar currentVisibleDate={new Date(2000, 1, 1)} />
    </StoryBookExample>
  );
};
