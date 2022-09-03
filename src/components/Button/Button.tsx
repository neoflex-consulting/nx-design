import './Button.css';

import React, {useRef} from 'react';

import {IconProps, IconPropSize} from '../../icons/_Icon/Icon';
import { cn } from '../../utils/bem';
import {getSizeByMap} from '../../utils/getSizeByMap';
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
  iconLeft?: React.ReactNode | React.FC<IconProps>;
  iconRight?: React.ReactNode | React.FC<IconProps>;
  onlyIcon?: boolean;
  title?: string;
  children?: never;
  iconSize?: IconPropSize;
  name?: string;
};

export const COMPONENT_NAME = 'Button' as const;
export const cnButton = cn(COMPONENT_NAME);

export const Button = forwardRefWithAs<Props, 'button'>((props, ref) => {

  const buttonRef = useRef<HTMLButtonElement | null>(null);

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
    key,
    name,
    ...otherProps
  } = usePropsHandler(COMPONENT_NAME, props, buttonRef);

  const sizeMap: Record<ButtonPropSize, IconPropSize> = {
    xs: 'xs',
    s: 'xs',
    m: 's',
    l: 'm',
  };

  const sizeMapOnlyIcon: Record<ButtonPropSize, IconPropSize> = {
    xs: 'xs',
    s: 'xs',
    m: 's',
    l: 'm',
  };

  const Tag = as as string;
  const IconOnly: any = (!label || onlyIcon) && (iconLeft || iconRight);
  const IconLeft: any = iconLeft;
  const IconRight: any = iconRight;
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

  // @ts-ignore
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
        view != buttonPropView[4] ? [className] : [className],
      )}
      tabIndex={tabIndex}
      title={title}
      ref={ref}
      key={key}
      name={name}
      {...(Tag === 'button' ? { disabled: disabled || loading } : {})}
    >
      {IconOnly &&
      (
        (React.isValidElement(iconLeft) && <span className={cnButton('Icon')}> {iconLeft} </span> ) ||
        (React.isValidElement(iconRight) && <span className={cnButton('Icon')}> {iconRight} </span> )
      )
      }
      {IconOnly && !React.isValidElement(iconLeft) && !React.isValidElement(iconRight) && <IconOnly className={cnButton('Icon')} size={iconSize}/> }
      {!IconOnly &&
      ((IconLeft || IconRight) && label ? (
        <>
          {IconLeft && React.isValidElement(iconLeft) && <span className={cnButton('Icon', { position: 'left'})}> {iconLeft} </span>}
          {IconLeft && !React.isValidElement(iconLeft) && <IconLeft className={cnButton('Icon', { position: 'left' })} size={iconSize} />}
          <span className={cnButton('Label')}>{label}</span>
          {IconRight && React.isValidElement(iconRight) && <span className={cnButton('Icon', { position: 'right' })}> {iconRight} </span>}
          {IconRight && !React.isValidElement(iconRight) && <IconRight className={cnButton('Icon', { position: 'right' })} size={iconSize} />}
        </>
      ) : (
        label
      ))}
      {loading && <Loader className={cnButton('Loader')} size="s" />}
    </Tag>
  );
});
