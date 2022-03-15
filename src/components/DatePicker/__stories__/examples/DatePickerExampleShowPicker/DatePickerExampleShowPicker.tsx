import React, { useState } from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { DatePicker } from '../../../DatePicker';

export const DatePickerExampleShowPicker = () => {
  const [value, setValue] = useState<Date | null>(null);
  const [valueRange, setValueRange] = useState<[Date?, Date?] | null>(null);

  return (
    <div>
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
        />
        <DatePicker
          value={value}
          onChange={({ value }) => setValue(value)}
          label="Только год"
          showPicker={"year"}
        />
        <DatePicker
          value={valueRange}
          onChange={({ value }) => setValueRange(value)}
          label="Полная дата"
          showPicker={"date"}
          type={"date-range"}
          labelPosition={"top"}
        />
        <DatePicker
          value={valueRange}
          onChange={({ value }) => setValueRange(value)}
          label="Только год и месяц"
          showPicker={"month"}
          type={"date-range"}
          labelPosition={"top"}
        />
        <DatePicker
          value={valueRange}
          onChange={({ value }) => setValueRange(value)}
          label="Только год"
          showPicker={"year"}
          type={"date-range"}
          labelPosition={"top"}
        />
      </StoryBookExample>
    </div>
  );
};
