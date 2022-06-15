import './DatePickerFieldTypeDateRange.css';

import React, { forwardRef, useEffect, useRef, useState } from 'react';
import isBefore from 'date-fns/isBefore';
import isEqual from 'date-fns/isEqual';

import { cn } from '../../../utils/bem';
import { FieldCaption } from '../../FieldCaption/FieldCaption';
import { FieldLabel } from '../../FieldLabel/FieldLabel';
import { datePickerErrorTypes } from '../helpers';

import {DatePickerFieldTypeDateRangeProps, mapFormForStart} from './helpers';
import {DatePickerFieldTypeDateRangeDouble} from "../DatePickerFieldTypeDateRangeDouble/DatePickerFieldTypeDateRangeDouble";
import {DatePickerFieldTypeDateRangeSingle} from "../DatePickerFieldTypeDateRangeSingle/DatePickerFieldTypeDateRangeSingle";
import {getSizeByMap} from "../../../utils/getSizeByMap";

const cnDatePickerFieldTypeDateRange = cn('DatePickerFieldTypeDateRange');

export const DatePickerFieldTypeDateRange = forwardRef<
  HTMLDivElement,
  DatePickerFieldTypeDateRangeProps
>((props, ref) => {
  const {
    className,
    form = 'default',
    startFieldInputRef,
    startFieldLeftSide,
    startFieldRightSide,
    endFieldInputRef,
    endFieldLeftSide,
    endFieldRightSide,
    value = [],
    onChange,
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
    label,
    labelPosition,
    caption,
    width,
    showPicker,
    countTextField,
    ...otherProps
  } = props;

  const [startDate, setStartDate] = useState<Date | undefined | null>(value?.[0]);
  const [endDate, setEndDate] = useState<Date | undefined | null>(value?.[1]);
  const eventRef = useRef<Event>();

  const handleChange = (
    e: Event,
    ownStartDate: Date | undefined | null,
    ownEndDate: Date | undefined | null,
  ) => {
    const start = ownStartDate || startDate;
    const end = ownEndDate || endDate;

    if (!onChange) {
      return;
    }

    if (start && end) {
      if (isBefore(start, end) || isEqual(start, end)) {
        onChange({ e, value: [start, end] });
        return;
      }
      onChange({ e, value: [start, undefined] });
      onError && onError({ type: datePickerErrorTypes[2], date: [start, end] });
      return;
    }

    if (start) {
      onChange({ e, value: [start, undefined] });
      return;
    }

    if (end) {
      onChange({ e, value: [undefined, end] });
      return;
    }

    onChange({ e, value: null });
  };

  const handleStartDateChange = (props: { e: Event; value: Date | null }) => {
    if (props.value?.getTime() === startDate?.getTime()) {
      return;
    }
    eventRef.current = props.e;
    setStartDate(props.value);
  };

  const handleEndDateChange = (props: { e: Event; value: Date | null }) => {
    if (props.value?.getTime() === endDate?.getTime()) {
      return;
    }
    eventRef.current = props.e;
    setEndDate(props.value);
  };

  useEffect(() => {
    if (eventRef.current) {
      handleChange(eventRef.current, startDate, endDate);
    }
  }, [eventRef.current]);

  useEffect(() => {
    setStartDate(value?.[0]);
  }, [value?.[0]?.getTime()]);

  useEffect(() => {
    setEndDate(value?.[1]);
  }, [value?.[1]?.getTime()]);

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
    <div
      {...otherProps}
      className={cnDatePickerFieldTypeDateRange({ view, labelPosition, width, size }, [className])}
      ref={ref}
    >
      {label && (
        <FieldLabel
          required={required}
          className={cnDatePickerFieldTypeDateRange('Label', { labelPosition })}
          size={size}
        >
          {label}
        </FieldLabel>
      )}
      <div className={cnDatePickerFieldTypeDateRange('Body')}>
        {countTextField !== 1 &&
          <DatePickerFieldTypeDateRangeDouble
            startFieldInputRef={startFieldInputRef}
            startFieldRef={startFieldRef}
            startFieldLeftSide={startFieldLeftSide}
            startFieldRightSide={startFieldRightSide}
            startDate={startDate}
            handleStartDateChange={handleStartDateChange}
            startFieldOnFocus={startFieldOnFocus}
            startFieldOnBlur={startFieldOnBlur}
            startFocused={startFocused}
            showPicker={showPicker}
            endFieldInputRef={endFieldInputRef}
            endFieldRef={endFieldRef}
            endFieldLeftSide={endFieldLeftSide}
            endFieldRightSide={endFieldRightSide}
            endDate={endDate}
            handleEndDateChange={handleEndDateChange}
            endFieldOnFocus={endFieldOnFocus}
            endFieldOnBlur={endFieldOnBlur}
            endFocused={endFocused}
          />
        }
        {countTextField === 1 &&
        <DatePickerFieldTypeDateRangeSingle
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
        }
        {caption && (
          <FieldCaption className={cnDatePickerFieldTypeDateRange('Caption')} status={status}>
            {caption}
          </FieldCaption>
        )}
      </div>
    </div>
  );
});
