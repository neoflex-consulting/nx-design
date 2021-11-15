import './ContextMenuGroupHeader.css';

import React from 'react';

import { cn } from '../../../utils/bem';
import { getSizeByMap } from '../../../utils/getSizeByMap';
import { Typography, TextPropSize } from '../../Typography/Typography';
import { contextMenuDefaultSize, ContextMenuPropSize } from '../helpers';

export const cnContextMenuGroupHeader = cn('ContextMenuGroupHeader');

const sizeMap: Record<ContextMenuPropSize, TextPropSize> = {
  s: '2xs',
  m: 'xs',
  l: 's',
};

export const ContextMenuGroupHeader: React.FC<{
  label: string | number;
  size?: ContextMenuPropSize;
  children?: never;
  first: boolean;
}> = ({ label, size = contextMenuDefaultSize, first }) => (
  <Typography
    view="secondary"
    transform="uppercase"
    className={cnContextMenuGroupHeader({ size, first })}
    size={getSizeByMap(sizeMap, size)}
  >
    {label}
  </Typography>
);
