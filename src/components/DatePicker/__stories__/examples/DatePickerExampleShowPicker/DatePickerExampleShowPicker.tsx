import React, { useState } from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { DatePicker } from '../../../DatePicker';
import ruLocale from 'date-fns/locale/ru';

export const DatePickerExampleShowPicker = () => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <DatePicker
        value={value}
        onChange={({ value }) => setValue(value)}
        label="Полная дата"
        showPicker={"date"}
      />
      <DatePicker
        value={value}
        onChange={({ value }) => setValue(value)}
        label="Только год и месяц"
        showPicker={"month"}
        locale={ruLocale}
      />
      <DatePicker
        value={value}
        onChange={({ value }) => setValue(value)}
        label="Только год"
        showPicker={"year"}
      />
    </StoryBookExample>
  );
};
