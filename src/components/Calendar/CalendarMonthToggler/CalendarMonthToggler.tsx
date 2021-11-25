import './CalendarMonthToggler.css';

import React from 'react';

import { cn } from '../../../utils/bem';
import { PropsWithJsxAttributes } from '../../../utils/types/PropsWithJsxAttributes';
import { Button } from '../../Button/Button';
import { CalendarMonthLabel } from '../CalendarMonthLabel/CalendarMonthLabel';
import {Icon} from "nx-icon";

export type CalendarMonthTogglerProps = PropsWithJsxAttributes<
  {
    prevOnClick?: React.EventHandler<React.MouseEvent<HTMLDivElement>>;
    nextOnClick?: React.EventHandler<React.MouseEvent<HTMLDivElement>>;
    label: string;
    children?: never;
  },
  'div'
>;

export const cnCalendarMonthToggler = cn('CalendarMonthToggler');

export const CalendarMonthToggler: React.FC<CalendarMonthTogglerProps> = (props) => {
  const { label, className, prevOnClick, nextOnClick, ...otherProps } = props;

  return (
    <div
      {...otherProps}
      className={cnCalendarMonthToggler(
        { withPrevButton: Boolean(prevOnClick), withNextButton: Boolean(nextOnClick) },
        [className],
      )}
    >
      {prevOnClick && (
        <Button
          className={cnCalendarMonthToggler('Button', { direction: 'prev' })}
          onClick={prevOnClick}
          iconLeft={<Icon icon={"arrow-right"} size={"s"}/>}
          size="s"
          view="clear"
        />
      )}
      <CalendarMonthLabel className={cnCalendarMonthToggler('Label')} label={label} />
      {nextOnClick && (
        <Button
          className={cnCalendarMonthToggler('Button', { direction: 'next' })}
          onClick={nextOnClick}
          iconLeft={<Icon icon={"arrow-right"} size={"s"}/>}
          size="s"
          view="clear"
        />
      )}
    </div>
  );
};
