import './DatePickerDropdown.css';

import React, { forwardRef, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { useForkRef } from '../../../hooks/useForkRef/useForkRef';
import { cn } from '../../../utils/bem';
import { cnForCssTransition } from '../../../utils/cnForCssTransition';
import { DateRange } from '../../../utils/types/Date';
import { PropsWithHTMLAttributesAndRef } from '../../../utils/types/PropsWithHTMLAttributes';
import {
  Calendar,
  CalendarAdditionalControlRenderProp,
  CalendarPropOnChange,
  CalendarPropType,
} from '../../Calendar/Calendar';
import { Popover } from '../../Popover/Popover';
import {
  DatePickerPropCalendarView,
  DatePickerPropDropdownForm,
  datePickerPropDropdownFormDefault,
} from '../helpers';

export type DatePickerDropdownPropOnChange = CalendarPropOnChange;

export type DatePickerDropdownProps = PropsWithHTMLAttributesAndRef<
  {
    anchorRef: React.RefObject<HTMLElement>;
    currentVisibleDate?: Date;
    type?: CalendarPropType;
    value?: Date | DateRange;
    onChange?: DatePickerDropdownPropOnChange;
    minDate?: Date;
    maxDate?: Date;
    events?: Date[];
    view?: DatePickerPropCalendarView;
    locale?: Locale;
    children?: never;
    form?: DatePickerPropDropdownForm;
    isOpen?: boolean;
    onChangeCurrentVisibleDate?: (date: Date) => void;
    zIndex?: number;
    renderAdditionalControls?: CalendarAdditionalControlRenderProp;
    multiplicitySeconds?: number;
    multiplicityMinutes?: number;
    multiplicityHours?: number;
  },
  HTMLDivElement
>;

type DatePickerDropdownComponent = (props: DatePickerDropdownProps) => React.ReactElement | null;

const cnDatePickerDropdown = cn('DatePickerDropdown');
const cnDatePickerDropdownCssTransition = cnForCssTransition(cnDatePickerDropdown);

export const DatePickerDropdown: DatePickerDropdownComponent = forwardRef((props, ref) => {
  const {
    form = datePickerPropDropdownFormDefault,
    anchorRef,
    isOpen,
    className,
    zIndex,
    ...otherProps
  } = props;

  const rootRef = useRef<HTMLDivElement>(null);

  return (
    <CSSTransition
      in={isOpen}
      unmountOnExit
      appear
      classNames={cnDatePickerDropdownCssTransition}
      timeout={200}
      nodeRef={rootRef}
    >
      <Popover
        ref={useForkRef([ref, rootRef])}
        anchorRef={anchorRef}
        className={cnDatePickerDropdown({ form }, [className])}
        direction="downStartLeft"
        spareDirection="downStartLeft"
        possibleDirections={['downStartLeft', 'upStartLeft', 'downStartRight', 'upStartRight']}
        style={{ zIndex }}
      >
        <Calendar {...otherProps} />
      </Popover>
    </CSSTransition>
  );
});
