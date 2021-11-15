import React from 'react';

import { Typography } from '../../../../../components/Typography/Typography';
import { cnMixCard } from '../../../MixCard';

export const MixCardExample = () => {
  return (
    <div
      className={cnMixCard({
        verticalSpace: 'xl',
        horizontalSpace: '3xl',
        status: 'success',
        form: 'round',
        shadow: true,
      })}
    >
      <Typography>Здесь мог быть ваш текст</Typography>
    </div>
  );
};
