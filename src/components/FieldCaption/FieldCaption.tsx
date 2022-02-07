import React from 'react';

import { cn } from '../../utils/bem';
import { forwardRefWithAs } from '../../utils/types/PropsWithAsAttributes';
import { Typography } from '../Typography/Typography';

export type FieldCaptionPropStatus = 'error' | 'warning' | 'success';

type FieldCaptionProps = {
  status?: FieldCaptionPropStatus;
};

const cnFieldCaption = cn('FieldCaption');

export const FieldCaption = forwardRefWithAs<FieldCaptionProps>((props, ref) => {
  const { status, children, className, ...otherProps } = props;

  return (
    <Typography
      view={status || 'secondary'}
      className={cnFieldCaption(null, [className])}
      {...otherProps}
      ref={ref}
      size="xs"
      lineHeight="2xs"
    >
      {children}
    </Typography>
  );
});
