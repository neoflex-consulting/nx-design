import './SkeletonText.css';

import React from 'react';

import { cn } from '../../../utils/bem';
import {
  TextPropSize,
  textPropSizeDefault,
} from '../../Typography/Typography';
import { SkeletonBrick } from '../Skeleton';

type SkeletonTextProps = {
  className?: string;
  rows: number;
  fontSize?: TextPropSize;
};

export const SkeletonText: React.FC<SkeletonTextProps> = ({
  className,
  rows,
  fontSize = textPropSizeDefault,
}) => {
  const varFontSize = `var(--size-text-${fontSize})`;
  return (
    <div
      className={cnSkeletonText(null, [className])}
      key={
        /* форсируем полный ререндер компонента при смене количества строк,
          чтобы анимация у всех строк запустилась заново */
        rows
      }
    >
      {new Array(rows).fill(null).map((_v, idx) => (
        <div
          key={idx}
          className={cnSkeletonText('Row')}
          style={{ fontSize: varFontSize}}
        >
          <SkeletonBrick width={getRowWidth(idx, rows)} height={varFontSize} />
        </div>
      ))}
    </div>
  );
};

const cnSkeletonText = cn('SkeletonText');

export const getRowWidth = (
  idx: number,
  total: number,
): React.ComponentProps<typeof SkeletonBrick>['height'] => {
  if (idx === total - 1) {
    return '50%';
  }

  switch (idx % 3) {
    case 0:
      return '100%';
    case 1:
      return '85%';
    case 2:
      return '93%';
  }

  return '100%';
};
