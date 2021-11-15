import React from 'react';

import { Typography } from '../../../../Typography/Typography';
import { Card } from '../../../Card';

export const CardExample = () => {
  return (
    <Card verticalSpace="2xl" horizontalSpace="2xl" status="alert">
      <Typography>Здесь может быть ваш текст</Typography>
    </Card>
  );
};
