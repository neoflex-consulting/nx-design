import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import * as wp from '../../../../../uiKit/whitepaper/whitepaper';
import { Typography, textPropSpacing } from '../../../Typography';

export const TextExampleSpacing = () => {
  return (
    <div
      className={cnDocsDecorator('Section', [
        wp.tplGrid({ 'xs-columns': 2, 'col-gap': 'full', 'row-gap': 'full' }),
      ])}
    >
      {textPropSpacing.map((item, index) => (
        <div key={index} className={wp.tplGrid('fraction', { row: 'third' })}>
          <Typography size="s" view="ghost" className={wp.decorator({ 'indent-b': 'xs' })}>
            {`text*spacing*${item}`}
          </Typography>
          <Typography spacing={item}>
            «Неофлекс» ведет работу в крупнейших российских банках.
          </Typography>
        </div>
      ))}
    </div>
  );
};
