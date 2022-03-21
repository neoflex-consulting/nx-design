import React, { useState } from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { DatePicker } from '../../../DatePicker';

export const DatePickerExampleFormat = () => {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <DatePicker
        type="date-time"
        formatMask="MM/dd/yyyy HH:mm"
        placeholder="ММ/ДД/ГГГГ ЧЧ:ММ"
        value={value}
        onChange={({ value }) => setValue(value)}
      />
    </StoryBookExample>
  );
};
