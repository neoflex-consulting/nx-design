import './CalendarToggler.css';

import React from 'react';

import { ArrowRight } from '../../../icons/ArrowRight/ArrowRight';
import { cn } from '../../../utils/bem';
import { PropsWithJsxAttributes } from '../../../utils/types/PropsWithJsxAttributes';
import { Button } from '../../Button/Button';
import { CalendarLabel } from '../CalendarLabel/CalendarLabel';

export type CalendarTogglerProps = PropsWithJsxAttributes<
  {
    prevOnClick?: React.EventHandler<React.MouseEvent<HTMLDivElement>>;
    nextOnClick?: React.EventHandler<React.MouseEvent<HTMLDivElement>>;
    onLabelClick?: React.EventHandler<React.MouseEvent<HTMLDivElement>>;
    label: string | number;
    children?: never;
  },
  'div'
>;

export const cnCalendarToggler = cn('CalendarToggler');

export const CalendarToggler: React.FC<CalendarTogglerProps> = (props) => {
  const { label, className, prevOnClick, nextOnClick, onLabelClick, ...otherProps } = props;

  return (
    <div
      {...otherProps}
      className={cnCalendarToggler(
        { withPrevButton: Boolean(prevOnClick), withNextButton: Boolean(nextOnClick) },
        [className],
      )}
    >
      {prevOnClick && (
        <Button
          className={cnCalendarToggler('Button', { direction: 'prev' })}
          onClick={prevOnClick}
          iconLeft={ArrowRight}
          size="s"
          view="clear"
          iconSize="s"
        />
      )}
      <CalendarLabel
        onClick={onLabelClick}
        cursor={onLabelClick && 'pointer'}
        className={cnCalendarToggler('Label')}
        label={label}
        align="center"
      />
      {nextOnClick && (
        <Button
          className={cnCalendarToggler('Button', { direction: 'next' })}
          onClick={nextOnClick}
          iconLeft={ArrowRight}
          size="s"
          view="clear"
          iconSize="s"
        />
      )}
    </div>
  );
};
