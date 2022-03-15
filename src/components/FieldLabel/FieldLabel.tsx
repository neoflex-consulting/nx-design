import './FieldLabel.css';

import React from 'react';

import { cn } from '../../utils/bem';
import { forwardRefWithAs } from '../../utils/types/PropsWithAsAttributes';
import {TextPropSize, Typography} from '../Typography/Typography';

type FieldLabelProps = {
  size?: TextPropSize;
  required?: boolean;
};

const cnFieldLabel = cn('FieldLabel');

export const FieldLabel = forwardRefWithAs<FieldLabelProps>((props, ref) => {
  const { className, required, children, size, ...otherProps } = props;

  return (
    <Typography view="primary" className={cnFieldLabel(null, [className])} ref={ref} size={size || "m"} {...otherProps} >
      {children}
      {required && <span className={cnFieldLabel('Star')}>*</span>}
    </Typography>
  );
});
