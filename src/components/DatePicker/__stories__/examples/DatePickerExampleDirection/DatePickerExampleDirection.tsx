import React, { useState } from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { DatePicker } from '../../../DatePicker';

export const DatePickerExampleDirection = () => {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <DatePicker
        value={value}
        onChange={({ value }) => setValue(value)}
        direction={"upStartLeft"}
      />
      <DatePicker
        value={value}
        onChange={({ value }) => setValue(value)}
        direction={"downStartRight"}
      />
    </StoryBookExample>
  );
};
