import './ContextMenuItem.css';

import React from 'react';

import { IconChevronRight } from '../../../icons/IconChevronRight/IconChevronRight';
import { cn } from '../../../utils/bem';
import { Typography } from '../../Typography/Typography';
import { contextMenuDefaultSize, ContextMenuItem as ContextMenuItemType } from '../helpers';

export const cnContextMenuItem = cn('ContextMenuItem');

function renderSide(
  side: React.ReactNode,
  position: 'left' | 'right',
  withArrow: boolean,
): React.ReactNode {
  const sides = side ? [...(Array.isArray(side) ? side : [side])] : [];
  if (withArrow) {
    sides.push(<IconChevronRight size="xs" view="secondary" />);
  }
  const sidesRender: React.ReactNode[] = sides.map((item, index) => (
    <div
      className={cnContextMenuItem('Side', {
        position,
      })}
      key={index}
    >
      {item}
    </div>
  ));

  return sidesRender;
}

export const ContextMenuItem: ContextMenuItemType = React.forwardRef(
  (props, ref: React.Ref<HTMLDivElement>) => {
    const {
      label,
      rightSide,
      leftSide,
      size = contextMenuDefaultSize,
      active,
      withSubMenu,
      accent,
      disabled,
      ...otherProps
    } = props;
    const view = disabled ? undefined : accent;

    return (
      <Typography
        {...otherProps}
        className={cnContextMenuItem({ size, active, disabled })}
        ref={ref}
        size={'body'}
        view={view}
      >
        {renderSide(leftSide, 'left', false)}
        {!rightSide && !leftSide && !withSubMenu ? (
          label
        ) : (
          <div className={cnContextMenuItem('Side', { position: 'center' })}>{label}</div>
        )}
        {renderSide(rightSide, 'right', withSubMenu)}
      </Typography>
    );
  },
);
