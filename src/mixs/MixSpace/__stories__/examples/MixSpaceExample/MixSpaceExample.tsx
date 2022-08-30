import React from 'react';

import { Button } from '../../../../../components/Button/Button';
import { Typography } from '../../../../../components/Typography/Typography';
import { cnMixSpace } from '../../../MixSpace';

export const MixSpaceExampleButtonWithoutSpaces = () => {
  return (
    <>
      <Typography>Это текст, он нужен, чтобы показать отступы от кнопки сверху</Typography>
      <Button label="Это кнопка без отступов" />
      <Typography>Это текст, он нужен, чтобы показать отступы от кнопки снизу</Typography>
    </>
  );
};

export const MixSpaceExampleButtonWithSpaces = () => {
  return (
    <>
      <Typography>Это текст, он нужен, чтобы показать отступы от кнопки сверху</Typography>
      <Button
        label="Это кнопка с отступами снаружи"
        className={cnMixSpace({
          m: 'm',
          mT: '3xs',
        })}
      />
      <Typography>Это текст, он нужен, чтобы показать отступы от кнопки снизу</Typography>
    </>
  );
};
