import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import * as wp from '../../../../../uiKit/whitepaper/whitepaper';
import { Typography } from '../../../Typography';

export const TextExampleDecoration = () => {
  return (
    <div className={cnDocsDecorator('Section')}>
      <Typography size="s" view="ghost" className={wp.decorator({ 'indent-b': 'xs' })}>
        text_decoration_underline
      </Typography>
      <Typography decoration="underline">Газпром нефть</Typography>
    </div>
  );
};
