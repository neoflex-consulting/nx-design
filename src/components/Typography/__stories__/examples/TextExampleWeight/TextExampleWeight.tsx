import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import * as wp from '../../../../../uiKit/whitepaper/whitepaper';
import { Typography, TextPropWeight } from '../../../Typography';

export const TextExampleWeight = () => {
  const weight: Array<TextPropWeight> = ['black', 'bold', 'semibold', 'regular', 'light', 'thin'];
  return (
    <div
      className={cnDocsDecorator('Section', [
        wp.tplGrid({ 'xs-columns': 3, 'col-gap': 'full', 'row-gap': 'full' }),
      ])}
    >
      {weight.map((item, index) => (
        <div key={index} className={wp.tplGrid('fraction', { row: 'third' })}>
          <Typography size="s" view="ghost" className={wp.decorator({ 'indent-b': 'xs' })}>
            {`text*weight*${item}`}
          </Typography>
          <Typography size="l" weight={item}>
            Газпром нефть
          </Typography>
        </div>
      ))}
    </div>
  );
};
