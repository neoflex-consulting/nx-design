import './CalendarTimeColumn.css';

import React, { memo, useRef } from 'react';

import { cn } from '../../../utils/bem';
import { PropsWithJsxAttributes } from '../../../utils/types/PropsWithJsxAttributes';
import { Typography } from '../../Typography/Typography';
import { CalendarCell } from '../CalendarCell/CalendarCell';
import { CalendarGrid } from '../CalendarGrid/CalendarGrid';

import { useScrollToElement } from './useScrollToElement/useScrollToElement';

type CalendarTimeColumnPropItem = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  selected?: boolean;
};

type CalendarTimeColumnProps = PropsWithJsxAttributes<
  {
    children?: never;
    label: string;
    items: CalendarTimeColumnPropItem[];
  },
  'div'
>;

export const cnCalendarTimeColumn = cn('CalendarTimeColumn');

export const CalendarTimeColumn: React.FC<CalendarTimeColumnProps> = memo((props) => {
  const { label, items, className, ...otherProps } = props;

  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  const [itemsRefs] = useScrollToElement(items, scrollWrapperRef);

  if (items.length === 0) {
    return null;
  }

  return (
    <div {...otherProps} className={cnCalendarTimeColumn(null, [className])}>
      <CalendarCell className={cnCalendarTimeColumn('Label')}>
        <Typography view="ghost" size="2xs">
          {label}
        </Typography>
      </CalendarCell>
      <div className={cnCalendarTimeColumn('ScrollWrapper')} ref={scrollWrapperRef}>
        <CalendarGrid
          className={cnCalendarTimeColumn('List')}
          items={items}
          itemsRefs={itemsRefs}
        />
        <div className={cnCalendarTimeColumn('FakeElemet')} />
      </div>
    </div>
  );
});
