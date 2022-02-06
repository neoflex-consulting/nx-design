import './Calendar.css';

import React, {useEffect, useState} from 'react';

import Day from './Day';
import Month from './Month';
import Year from './Year';
import {PropsWithHTMLAttributes} from "../../../../utils/types/PropsWithHTMLAttributes";
import {cn} from "../../../../utils/bem";
import {usePropsHandler} from "../../../EventInterceptor/usePropsHandler";
const moment = require('moment');

type Props = {
  isOpen?: any,
  shortcuts?: any,
  splitPanel?: any,
  showTimePicker?: any,
  showCalendarPicker?: any,
  className?: any,
  onSelect?: any,
  value?: any,
  maxDate?: any,
  minDate?: any,
  selected?: any,
  range?: any,
  rangeAt?: any,
  dateLimit?: any,
  style?: any,
  onChange?: any,
  months?: any,
  changePanel?: any,
  dayFormat?: any,
  weeks?: any,
  minPanel?: any,
}

export type CalendarProps = PropsWithHTMLAttributes<Props, HTMLDivElement>;

export const cnCalendar = cn('Calendar');

export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>((props, ref) => {
  const calendarRef = ref || React.useRef<HTMLDivElement>(null);
  const {
    isOpen,
    shortcuts,
    splitPanel,
    showTimePicker,
    showCalendarPicker,
    className,
    onSelect,
    value,
    maxDate,
    minDate,
    selected,
    range,
    rangeAt,
    dateLimit,
    style,
    onChange,
    months,
    changePanel,
    dayFormat,
    weeks,
    minPanel,
    ...otherProps
  } = usePropsHandler(cnCalendar(), props, calendarRef as React.RefObject<HTMLDivElement>);

  const getCurrentMoment = () => {
    const now = valueState ? valueState || moment() : moment();
    let result = value;

    if (result) {
      if (range) {
        result = result[rangeAt] || now;
      }
    } else {
      result = now;
    }

    return result;
  }

  const [valueState, setValueState] = useState<any>(getCurrentMoment);
  const [panel, setPanel] = useState<any>(minPanel || 'day');

  useEffect(() => {
    setValueState(getCurrentMoment)
    if (!isOpen) {
      setPanel(minPanel || 'day')
    }
  }, [props]);

  const handleSelect = (selected:any) => {
    const nextPanel = (panel === 'year' ? 'month' : 'day') === 'month'
      ? minPanel === 'year' ? 'year' : 'month'
      : minPanel === 'month' ? 'month' : 'day';
    let _selected = value;
    let shouldChange = panel === minPanel;

    if (_selected && !shouldChange) {
      if (range) {
        shouldChange = rangeAt === 'start' ? _selected.start : _selected.end;
      } else {
        shouldChange = true;
      }
    }

    if (range) {
      const copyed = _selected ? {..._selected} : {};

      copyed[rangeAt] = selected;
      _selected = copyed;
    } else {
      _selected = selected;
    }

    changePanel_(nextPanel, selected);

    if (shouldChange) {
      onChange && onChange(_selected, panel);
    }
  }

  const changePanel_ = (panel:any, valueState_: any) => {
    setPanel(panel)
    setValueState(valueState_)
  }

  const commonProps = {
    value: valueState,
    selected: value,
    onSelect: handleSelect,
    changePanel: changePanel_,
    weeks: weeks,
    months: months,
    dayFormat: dayFormat,
    maxDate: maxDate,
    minDate: minDate,
    dateLimit: dateLimit,
    range: range,
    rangeAt: rangeAt
  };

  const isDayPanel = panel === 'day';
  const isMonthPanel = panel === 'month';
  const isYearPanel = panel === 'year';

  return (
    <div style={style}>
      <div
        className="Calendar"
        ref={calendarRef}
        {...otherProps}
      >
        <Day
          {...commonProps}
          style={{display: isDayPanel ? 'block' : 'none'}} />
        <Month
          {...commonProps}
          style={{display: isMonthPanel ? 'block' : 'none'}} />
        <Year
          {...commonProps}
          style={{display: isYearPanel ? 'block' : 'none'}} />
      </div>
    </div>
  );

})
