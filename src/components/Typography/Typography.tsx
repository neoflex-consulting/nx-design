import './Typography.css';

import React from 'react';

import { cn } from '../../utils/bem';
import { forwardRefWithAs } from '../../utils/types/PropsWithAsAttributes';

export const textPropAlign = ['left', 'center', 'right'] as const;
export type TextPropAlign = typeof textPropAlign[number];

export const textPropDisplay = ['block', 'inlineBlock', 'inline'] as const;
export type TextPropDisplay = typeof textPropDisplay[number];

export const textPropCursor = ['pointer'] as const;
export type TextPropCursor = typeof textPropCursor[number];


export const textPropSize = [
  '2xs',
  'xs',
  's',
  'm',
  'l',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
  'h1',
  'h2',
  'h3',
  'h4',
  'body',
  'caption'
] as const;
export type TextPropSize = typeof textPropSize[number];
export const textPropSizeDefault: TextPropSize = textPropSize[4];

export const textPropSpacing = ['xs', 's', 'm', 'l'] as const;
export type TextPropSpacing = typeof textPropSpacing[number];


export const textPropView = [
  'primary',
  'alert',
  'brand',
  'ghost',
  'link',
  'linkMinor',
  'primary',
  'secondary',
  'success',
  'warning',
] as const;
export type TextPropView = typeof textPropView[number];
export const textPropViewDefault: TextPropView = textPropView[0];

export const textPropWeight = ['light', 'regular', 'medium', 'bold',] as const;
export type TextPropWeight = typeof textPropWeight[number];


export const textPropTransform = ['uppercase'] as const;
export type TextPropTransform = typeof textPropTransform[number];

export const textPropWidth = ['default'] as const;
export type TextPropWidth = typeof textPropWidth[number];

type Props = {
  align?: TextPropAlign;
  cursor?: TextPropCursor;
  display?: TextPropDisplay;
  size?: TextPropSize;
  spacing?: TextPropSpacing;
  transform?: TextPropTransform;
  view?: TextPropView;
  weight?: TextPropWeight;
  width?: TextPropWidth;
};

export const cnText = cn('Typography');

export const Typography = forwardRefWithAs<Props>((props, ref) => {
  const {
    as = 'div',
    align,
    cursor,
    display,
    size = textPropSizeDefault,
    spacing,
    transform,
    view = textPropViewDefault,
    weight,
    width,
    className,
    children,
    ...otherProps
  } = props;

  const Tag = as as string;

  return (
    <Tag
      {...otherProps}
      className={cnText(
        {
          align,
          cursor,
          display,
          size,
          spacing,
          transform,
          view,
          weight,
          width,
        },
        [className],
      )}
      ref={ref}
    >
      {children}
    </Tag>
  );
});
