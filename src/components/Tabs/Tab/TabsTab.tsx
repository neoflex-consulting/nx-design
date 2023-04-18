import './TabsTab.css';

import React, { forwardRef } from 'react';

import { IconProps, IconPropSize } from '../../../icons/_Icon/Icon';
import { cn } from '../../../utils/bem';
import { getSizeByMap } from '../../../utils/getSizeByMap';
import { TabsPropSize } from '../Tabs';
import {IconClose} from "../../../icons/IconClose/IconClose";

export const cnTabsTab = cn('TabsTab');

export type Props = {
  size: TabsPropSize;
  onlyIcon?: boolean;
  icon?: React.FC<IconProps>;
  iconSize?: IconPropSize;
  closeIcon?: boolean;
  label: string;
  checked: boolean;
  onChange: React.MouseEventHandler<HTMLButtonElement>;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const sizeMap: Record<TabsPropSize, IconPropSize> = {
  s: 'xs',
  m: 's',
};

export const TabsTab = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    label,
    onChange,
    onClose,
    checked,
    size,
    onlyIcon,
    closeIcon,
    icon: Icon,
    iconSize: iconSizeProp,
    className,
  } = props;
  const iconSize = getSizeByMap(sizeMap, size, iconSizeProp);

  return (
    <>
      <button
        className={cnTabsTab({ size, checked, onlyIcon }, [className])}
        onClick={checked ? undefined : onChange}
        ref={ref}
        role="tab"
        type="button"
        title={onlyIcon ? label : undefined}
      >
        {Icon && <Icon className={cnTabsTab('Icon')} size={iconSize} />}
        {!onlyIcon && label}
      </button>
      {closeIcon && <IconClose className={cnTabsTab({closeIcon})} size={'xs'} onClick={onClose}/>}
    </>
  );
});
