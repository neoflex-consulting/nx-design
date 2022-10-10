import './ContextMenuItem.css';

import React from 'react';

import {IconComponent} from '../../../icons/_Icon/Icon';
import {cn} from '../../../utils/bem';
import {getSizeByMap} from '../../../utils/getSizeByMap';
import {Typography} from '../../Typography/Typography';
import {sizeMapIcon} from '../helper';
import {
  contextMenuDefaultSize,
  contextMenuDefaultTheme,
  ContextMenuItemComponent,
  ContextMenuItemProps,
  ContextMenuPropSize,
} from '../types';
import {IconChevronRight} from "../../../icons/IconChevronRight/IconChevronRight";

const cnContextMenuItem = cn('ContextMenuItem');

function renderSide(
  side: React.ReactNode,
  position: 'left' | 'right',
  withArrow: boolean,
  size: ContextMenuPropSize,
  icon: IconComponent | undefined,
): React.ReactNode {
  const sides = side ? [...(Array.isArray(side) ? side : [side])] : [];

  if (icon) {
    const Icon = icon;
    const render = <Icon size={getSizeByMap(sizeMapIcon, size)} />;
    if (position === 'left') {
      sides.unshift(render);
    }
    if (position === 'right') {
      sides.push(render);
    }
  }

  if (withArrow) {
    sides.push(<IconChevronRight size="xs" view="secondary" />);
  }

  const sidesRender: React.ReactNode[] = sides.map((item, index) => (
    <div
      className={cnContextMenuItem('Slot', {
        position
      })}
      key={cnContextMenuItem('Slot', {
        position,
        index,
      })}
    >
      {item}
    </div>
  ));

  return sidesRender;
}

function ContextMenuItemRender(props: ContextMenuItemProps, ref: React.Ref<HTMLDivElement>) {
  const {
    label,
    rightSide,
    leftSide,
    size = contextMenuDefaultSize,
    as = 'div',
    disabled,
    status,
    withSubMenu,
    className,
    active,
    leftIcon,
    rightIcon,
    theme = contextMenuDefaultTheme,
    ...otherProps
  } = props;
  const view = (disabled ? undefined : status) || 'primary';

  return (
    <Typography
      className={cnContextMenuItem({ size, active, disabled, theme }, [className])}
      as={as}
      size={size}
      view={view}
      lineHeight="xs"
      ref={ref}
      {...otherProps}
    >
      {renderSide(leftSide, 'left', false, size, leftIcon)}
      {!rightSide && !leftSide && !withSubMenu && !leftIcon && !rightIcon ? (
        label
      ) : (
        <div className={cnContextMenuItem('Slot', { position: 'center' })} key="center">
          {label}
        </div>
      )}
      {renderSide(rightSide, 'right', withSubMenu, size, rightIcon)}
    </Typography>
  );
}

export const ContextMenuItem = React.forwardRef(ContextMenuItemRender) as ContextMenuItemComponent;
