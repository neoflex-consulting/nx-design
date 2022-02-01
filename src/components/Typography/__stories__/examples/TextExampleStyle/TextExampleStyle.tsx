import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import * as wp from '../../../../../uiKit/whitepaper/whitepaper';
import { Typography } from '../../../Typography';

export const TextExampleStyle = () => {
  return (
    <div className={cnDocsDecorator('Section')}>
      <Typography size="s" view="ghost" className={wp.decorator({ 'indent-b': 'm' })}>
        text_style_italic
      </Typography>
      <Typography fontStyle="italic">Неофлекс</Typography>
    </div>
  );
};
