import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import * as wp from '../../../../../uiKit/whitepaper/whitepaper';
import { Typography } from '../../../Typography';

export const TextExampleTransform = () => {
  return (
    <div className={cnDocsDecorator('Section')}>
      <Typography size="s" view="ghost" className={wp.decorator({ 'indent-b': 'm' })}>
        text_transform_uppercase
      </Typography>
      <Typography transform="uppercase">Неофлекс</Typography>
    </div>
  );
};
