import '../DatePickerFieldTypeDateRange/DatePickerFieldTypeDateRange.css';

import React, {forwardRef} from 'react';

import {cn} from '../../../utils/bem';
import {getSizeByMap} from '../../../utils/getSizeByMap';
import {DatePickerFieldTypeDate} from '../DatePickerFieldTypeDate/DatePickerFieldTypeDate';

import {DatePickerFieldTypeDateRangeProps, mapFormForEnd, mapFormForStart} from '../DatePickerFieldTypeDateRange/helpers';

const cnDatePickerFieldTypeDateRange = cn('DatePickerFieldTypeDateRange');

export const DatePickerFieldTypeDateRangeDouble = forwardRef<
  HTMLDivElement,
  DatePickerFieldTypeDateRangeProps
  >((props, ref) => {
  const {
    form = 'default',
    startFieldInputRef,
    startFieldLeftSide,
    startFieldRightSide,
    endFieldInputRef,
    endFieldLeftSide,
    endFieldRightSide,
    onError,
    name,
    disabled,
    size,
    view,
    status,
    autoFocus,
    placeholder,
    readOnly,
    required,
    tabIndex,
    ariaLabel,
    iconSize,
    formatMask,
    separator,
    minDate,
    maxDate,
    startFieldOnBlur,
    startFieldOnFocus,
    endFieldOnBlur,
    endFieldOnFocus,
    startFieldRef,
    endFieldRef,
    startFocused,
    endFocused,
    showPicker,
    countTextField,
    startDate,
    handleStartDateChange,
    endDate,
    handleEndDateChange
  } = props;

  const commonProps = {
    className: cnDatePickerFieldTypeDateRange('Field'),
    disabled,
    name,
    onError,
    size,
    view,
    status,
    autoFocus,
    placeholder,
    readOnly,
    required,
    tabIndex,
    ariaLabel,
    iconSize,
    formatMask,
    separator,
    minDate,
    maxDate,
    countTextField
  };


  return (
    <div className={cnDatePickerFieldTypeDateRange('Fields')}>
      <DatePickerFieldTypeDate
        {...commonProps}
        inputRef={startFieldInputRef}
        ref={startFieldRef}
        leftSide={startFieldLeftSide}
        rightSide={startFieldRightSide}
        form={getSizeByMap(mapFormForStart, form)}
        value={startDate}
        onChange={handleStartDateChange}
        onFocus={startFieldOnFocus}
        onBlur={startFieldOnBlur}
        focused={startFocused}
        showPicker={showPicker}
      />

      <DatePickerFieldTypeDate
        {...commonProps}
        inputRef={endFieldInputRef}
        ref={endFieldRef}
        leftSide={endFieldLeftSide}
        rightSide={endFieldRightSide}
        form={getSizeByMap(mapFormForEnd, form)}
        value={endDate}
        onChange={handleEndDateChange}
        onFocus={endFieldOnFocus}
        onBlur={endFieldOnBlur}
        focused={endFocused}
        showPicker={showPicker}
      />
    </div>
  );
});
