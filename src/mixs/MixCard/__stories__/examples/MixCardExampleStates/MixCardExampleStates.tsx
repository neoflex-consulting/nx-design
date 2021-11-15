import './MixCardExampleStates.css';

import React from 'react';

import { Typography } from '../../../../../components/Typography/Typography';
import { cn } from '../../../../../utils/bem';
import { cnMixCard } from '../../../MixCard';

const cnMixCardExampleStates = cn('MixCardExampleStates');

export const MixCardExampleStates = () => {
  return (
    <div className={cnMixCardExampleStates()}>
      <div
        className={cnMixCard({
          verticalSpace: 'xl',
          horizontalSpace: 'xl',
          status: 'alert',
          form: 'round',
          shadow: true,
        })}
      >
        <Typography>alert</Typography>
      </div>
      <div
        className={cnMixCard({
          verticalSpace: 'xl',
          horizontalSpace: 'xl',
          status: 'warning',
          form: 'round',
          shadow: true,
        })}
      >
        <Typography>warning</Typography>
      </div>
      <div
        className={cnMixCard({
          verticalSpace: 'xl',
          horizontalSpace: 'xl',
          status: 'success',
          form: 'round',
          shadow: true,
        })}
      >
        <Typography>success</Typography>
      </div>
    </div>
  );
};
