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
import { DirectionsStartEdge, directionsStartEdge, Popover } from '../../Popover/Popover';
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
    direction?: DirectionsStartEdge;
    relative?: boolean;
    alwaysVisible?: boolean;
  },
  HTMLDivElement
>;

type DatePickerDropdownComponent = (props: DatePickerDropdownProps) => React.ReactElement | null;

export const DatePickerDropdown: DatePickerDropdownComponent = forwardRef((props, ref) => {
  const {
    form = datePickerPropDropdownFormDefault,
    anchorRef,
    isOpen,
    className,
    zIndex,
    direction,
    alwaysVisible,
    relative,
    ...otherProps
  } = props;

  const cnDatePickerDropdown = cn('DatePickerDropdown');
  const cnDatePickerDropdownCssTransition = cnForCssTransition(
    cnDatePickerDropdown,
    undefined,
    relative ? 'relative' : undefined,
  );
  const directionDefault = direction || directionsStartEdge[0];
  const rootRef = useRef<HTMLDivElement>(null);
  const refValue = useForkRef([ref, rootRef]);
  return (
    <CSSTransition
      in={isOpen || alwaysVisible}
      unmountOnExit
      appear
      classNames={cnDatePickerDropdownCssTransition}
      timeout={200}
      nodeRef={rootRef}
      key={`dropdown-${relative && 'relative'}-${alwaysVisible && 'alwaysVisible'}`}
    >
      {!relative ? (
        <Popover
          ref={refValue}
          anchorRef={anchorRef}
          className={cnDatePickerDropdown({ form }, [className])}
          direction={directionDefault}
          spareDirection={directionDefault}
          possibleDirections={['downStartLeft', 'upStartLeft', 'downStartRight', 'upStartRight']}
          style={{ zIndex }}
        >
          <Calendar {...otherProps} />
        </Popover>
      ) : (
        <div ref={refValue}>
          <Calendar {...otherProps} />
        </div>
      )}
    </CSSTransition>
  );
});
