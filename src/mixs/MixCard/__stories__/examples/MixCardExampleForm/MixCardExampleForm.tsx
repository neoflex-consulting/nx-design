import './MixCardExampleForm.css';

import React from 'react';

import { Typography } from '../../../../../components/Typography/Typography';
import { cn } from '../../../../../utils/bem';
import { cnMixCard } from '../../../MixCard';

const cnMixCardExampleForm = cn('MixCardExampleForm');

export const MixCardExampleForm = () => {
  return (
    <div className={cnMixCardExampleForm()}>
      <div
        className={cnMixCard({
          verticalSpace: 'xl',
          horizontalSpace: 'xl',
          form: 'square',
          shadow: true,
        })}
      >
        <Typography>square</Typography>
      </div>
      <div
        className={cnMixCard({
          verticalSpace: 'xl',
          horizontalSpace: 'xl',
          form: 'round',
          shadow: true,
        })}
      >
        <Typography>round</Typography>
      </div>
    </div>
  );
};
