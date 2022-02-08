import React from 'react';

import {DatePickerExampleAdditionalControls} from "../DatePickerExampleAdditionalControls/DatePickerExampleAdditionalControls";
import {DatePickerExampleCaption} from "../DatePickerExampleCaption/DatePickerExampleCaption";
import {DatePickerExampleFormat} from "../DatePickerExampleFormat/DatePickerExampleFormat";
import {DatePickerExampleLabel} from "../DatePickerExampleLabel/DatePickerExampleLabel";
import {DatePickerExampleMulti} from "../DatePickerExampleMulti/DatePickerExampleMulti";
import {DatePickerExampleOnError} from "../DatePickerExampleOnError/DatePickerExampleOnError";
import {DatePickerExampleRequired} from "../DatePickerExampleRequired/DatePickerExampleRequired";
import {DatePickerExampleStatus} from "../DatePickerExampleStatus/DatePickerExampleStatus";
import {
  DatePickerExampleTypeCalendar,
  DatePickerExampleTypeDate,
  DatePickerExampleTypeDateRange
} from "../DatePickerExampleType/DatePickerExampleType";
import {DatePickerExampleValue} from "../DatePickerExampleValue/DatePickerExampleValue";
import {cnDocsExample} from "../../../../../uiKit/components/DocsExample/DocsExample";

export const DatePickerExampleOverView = () => {
  return (
    <div>
      <div className={cnDocsExample()}>
        <DatePickerExampleAdditionalControls/>
      </div>
      <div className={cnDocsExample()}>
        <DatePickerExampleTypeDateRange/>
      </div>
      <div className={cnDocsExample()}>
        <DatePickerExampleOnError/>
      </div>
      <div className={cnDocsExample()}>
        <DatePickerExampleCaption/>
        <DatePickerExampleStatus/>
      </div>
      <div className={cnDocsExample()}>
        <DatePickerExampleFormat/>
        <DatePickerExampleMulti/>
        <DatePickerExampleTypeCalendar/>
      </div>
      <div className={cnDocsExample()}>
        <DatePickerExampleLabel/>
      </div>
      <div className={cnDocsExample()}>
        <DatePickerExampleRequired/>
      </div>
      <div className={cnDocsExample()}>
        <DatePickerExampleTypeDate/>
      </div>
      <div className={cnDocsExample()}>
        <DatePickerExampleValue/>
      </div>
    </div>
  )
};
