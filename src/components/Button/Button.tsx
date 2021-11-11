import './Button.css';

import React from 'react';

import { IconProps, IconPropSize } from '../../icons/Icon/Icon';
import { cnMixFocus } from '../../mixs/MixFocus/MixFocus';
import { cn } from '../../utils/bem';
import { getSizeByMap } from '../../utils/getSizeByMap';
import { forwardRefWithAs } from '../../utils/types/PropsWithAsAttributes';
import { usePropsHandler } from '../EventInterceptor/usePropsHandler';
import { Loader } from '../Loader/Loader';

export const buttonPropSize = ['xs', 's', 'm', 'l'] as const;
export type ButtonPropSize = typeof buttonPropSize[number];
export const buttonPropSizeDefault: ButtonPropSize = buttonPropSize[2];

export const buttonPropView = ['primary', 'clear', 'ghost', 'secondary', 'link'] as const;
export type ButtonPropView = typeof buttonPropView[number];
export const buttonPropViewDefault: ButtonPropView = buttonPropView[0];

export const buttonPropWidth = ['default', 'full'] as const;
export type ButtonPropWidth = typeof buttonPropWidth[number];
export const buttonPropWidthDefault: ButtonPropWidth = buttonPropWidth[0];

export const buttonPropForm = [
  'default',
  'brick',
  'round',
  'brickRound',
  'roundBrick',
  'brickDefault',
  'defaultBrick',
] as const;
export type ButtonPropForm = typeof buttonPropForm[number];
export const buttonPropFormDefault: ButtonPropForm = buttonPropForm[0];

export type Props = {
  size?: ButtonPropSize;
  view?: ButtonPropView;
  width?: ButtonPropWidth;
  form?: ButtonPropForm;
  tabIndex?: number;
  disabled?: boolean;
  loading?: boolean;
  label?: string | number | React.ReactNode;
  onClick?: React.EventHandler<React.MouseEvent>;
  iconLeft?: React.FC<IconProps>;
  iconRight?: React.FC<IconProps>;
  onlyIcon?: boolean;
  iconSize?: IconPropSize;
  title?: string;
  children?: never;
};

export const cnButton = cn('Button');

const sizeMap: Record<ButtonPropSize, IconPropSize> = {
  xs: 'xs',
  s: 'xs',
  m: 's',
  l: 'm',
};

const sizeMapOnlyIcon: Record<ButtonPropSize, IconPropSize> = {
  xs: 'xs',
  s: 's',
  m: 'm',
  l: 'm',
};

export const Button = forwardRefWithAs<Props, 'button'>((props, ref) => {
  const {
    size = buttonPropSizeDefault,
    view = buttonPropViewDefault,
    width = buttonPropWidthDefault,
    form = buttonPropFormDefault,
    iconLeft,
    iconRight,
    label,
    className,
    onClick,
    disabled,
    loading,
    tabIndex,
    as = 'button',
    onlyIcon,
    iconSize: iconSizeProp,
    ...otherProps
  } = usePropsHandler(cnButton(), props);

  const Tag = as as string;
  const IconOnly = (!label || onlyIcon) && (iconLeft || iconRight);
  const IconLeft = iconLeft;
  const IconRight = iconRight;
  const withIcon = !!iconLeft || !!iconRight;
  const title = props.title || (!!IconOnly && label) || undefined;
  const iconSize = IconOnly
    ? getSizeByMap(sizeMapOnlyIcon, size, iconSizeProp)
    : getSizeByMap(sizeMap, size, iconSizeProp);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!disabled && !loading && onClick) {
      onClick(e);
    }
  };

  return (
    <Tag
      {...otherProps}
      onClick={onClick ? handleClick : undefined}
      className={cnButton(
        {
          size,
          view,
          width,
          form,
          disabled,
          loading,
          withIcon,
          onlyIcon: !!IconOnly,
        },
        [cnMixFocus(), className],
      )}
      tabIndex={tabIndex}
      title={title}
      ref={ref}
      {...(Tag === 'button' ? { disabled: disabled || loading } : {})}
    >
      {IconOnly && <IconOnly className={cnButton('Icon')} size={iconSize} />}
      {!IconOnly &&
        ((IconLeft || IconRight) && label ? (
          <>
            {IconLeft && (
              <IconLeft className={cnButton('Icon', { position: 'left' })} size={iconSize} />
            )}
            <span className={cnButton('Label')}>{label}</span>
            {IconRight && (
              <IconRight className={cnButton('Icon', { position: 'right' })} size={iconSize} />
            )}
          </>
        ) : (
          label
        ))}
      {loading && <Loader className={cnButton('Loader')} size="s" />}
    </Tag>
  );
});
