import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import * as wp from '../../../../../uiKit/whitepaper/whitepaper';
import { Typography, textPropAlign } from '../../../Typography';

export const TextExampleAlign = () => {
  return (
    <div
      className={cnDocsDecorator('Section', [
        wp.tplGrid({ 'xs-columns': 3, 'col': 'gap_third', 'row': 'third' }),
      ])}
    >
      {textPropAlign.map((item, index) => (
        <div key={index} className={wp.tplGrid('fraction', { row: 'third' })}>
          <Typography size="s" view="ghost" align={item} className={wp.decorator({ 'indent-b': 'xs' })}>
            {`text_align_${item}`}
          </Typography>
          <Typography align={item}>Неофлекс</Typography>
        </div>
      ))}
    </div>
  );
};
