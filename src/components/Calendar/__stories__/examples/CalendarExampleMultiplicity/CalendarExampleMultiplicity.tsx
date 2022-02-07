import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { Calendar } from '../../../Calendar';

export const CalendarExampleMultiplicity = () => {
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <Calendar type="time" multiplicityHours={2} multiplicityMinutes={5} multiplicitySeconds={0} />
    </StoryBookExample>
  );
};
