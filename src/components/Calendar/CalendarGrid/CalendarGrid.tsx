import './CalendarGrid.css';

import React from 'react';

import { cn } from '../../../utils/bem';
import { PropsWithJsxAttributes } from '../../../utils/types/PropsWithJsxAttributes';
import { Typography } from '../../Typography/Typography';
import { CalendarCell, CalendarCellPropRange } from '../CalendarCell/CalendarCell';
import { CalendarItem, CalendarItemProps } from '../CalendarItem/CalendarItem';

type Item =
  | string
  | Omit<
      CalendarItemProps & {
        range?: CalendarCellPropRange;
      },
      'ref'
    >;

export type CalendarGridProps = PropsWithJsxAttributes<
  {
    children?: never;
    items: Item[];
    itemsRefs?: React.RefObject<HTMLDivElement>[];
  },
  'div'
>;

export const cnCalendarGrid = cn('CalendarGrid');

const renderItem = (item: Item, index: number, ref?: React.RefObject<HTMLDivElement>) => {
  if (typeof item === 'string') {
    return (
      <CalendarCell ref={ref} key={cnCalendarGrid('String', { index, item })}>
        <Typography as="span" view="ghost" size="2xs" transform="uppercase">
          {item}
        </Typography>
      </CalendarCell>
    );
  }

  const { range, ...dayProps } = item;

  return (
    <CalendarCell
      ref={ref}
      key={cnCalendarGrid('Item', { index, number: dayProps.label })}
      range={range}
    >
      <CalendarItem {...dayProps} />
    </CalendarCell>
  );
};

export const CalendarGrid: React.FC<CalendarGridProps> = (props) => {
  const { className, items, itemsRefs, ...otherProps } = props;

  return (
    <div {...otherProps} className={cnCalendarGrid(null, [className])}>
      {items.map((item, index) => renderItem(item, index, itemsRefs?.[index]))}
    </div>
  );
};
