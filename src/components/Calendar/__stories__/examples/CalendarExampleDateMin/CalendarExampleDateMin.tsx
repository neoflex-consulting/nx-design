import React, { useState } from 'react';
import { startOfWeek } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { Calendar } from '../../../Calendar';

const minDate = startOfWeek(new Date(), { locale: ruLocale });
const maxDate = new Date();

export const CalendarExampleDateMin = () => {
  const [value, setValue] = useState<Date | undefined>();
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <Calendar
        type="date-time"
        minDate={minDate}
        maxDate={maxDate}
        value={value}
        onChange={({ value }) => setValue(value)}
      />
    </StoryBookExample>
  );
};
