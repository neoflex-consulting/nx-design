import './Button.css';

import React from 'react';

import { cnMixFocus } from '../../mixs/MixFocus/MixFocus';
import { cn } from '../../utils/bem';
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
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onlyIcon?: boolean;
  title?: string;
  children?: never;
};

export const cnButton = cn('Button');

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
    ...otherProps
  } = usePropsHandler(cnButton(), props);

  const Tag = as as string;
  const IconOnly = (!label || onlyIcon) && (iconLeft || iconRight);
  const IconLeft = iconLeft;
  const IconRight = iconRight;
  const withIcon = !!iconLeft || !!iconRight;
  const title = props.title || (!!IconOnly && label) || undefined;

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
      {IconOnly &&
        <span className={cnButton('Icon')}> {iconLeft || iconRight} </span>
      }
      {!IconOnly &&
        ((IconLeft || IconRight) && label ? (
          <>
            {IconLeft && (
              <span className={cnButton('Icon', { position: 'left' })}> {iconLeft} </span>
            )}
            <span className={cnButton('Label')}>{label}</span>
            {IconRight && (
              <span className={cnButton('Icon', { position: 'right' })}> {iconRight} </span>
            )}
          </>
        ) : (
          label
        ))}
      {loading && <Loader className={cnButton('Loader')} size="s" />}
    </Tag>
  );
});
