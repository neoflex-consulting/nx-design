import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import * as wp from '../../../../../uiKit/whitepaper/whitepaper';
import { Typography, textPropSize } from '../../../Typography';

export const TextExampleSize = () => {
  return (
    <div
      className={cnDocsDecorator('Section', [
        wp.tplGrid({ 'xs-columns': 2, 'col-gap': 'full', 'row-gap': 'full' }),
      ])}
    >
      {textPropSize.map((item, index) => (
        <div key={index} className={wp.tplGrid('fraction', { row: 'third' })}>
          <Typography size="s" view="ghost" className={wp.decorator({ 'indent-b': 'm' })}>
            {`text*size*${item}`}
          </Typography>
          <Typography size={item}>Нефть</Typography>
        </div>
      ))}
    </div>
  );
};
