import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import * as wp from '../../../../../uiKit/whitepaper/whitepaper';
import { Typography, textPropView } from '../../../Typography';

export const TextExampleView = () => {
  return (
    <div
      className={cnDocsDecorator('Section', [
        wp.tplGrid({ 'xs-columns': 3, 'col-gap': 'full', 'row-gap': 'full' }),
      ])}
    >
      {textPropView.map((item, index) => (
        <div key={index} className={wp.tplGrid('fraction', { row: 'third' })}>
          <Typography size="s" view="ghost" className={wp.decorator({ 'indent-b': 'xs' })}>
            {`text*view*${item}`}
          </Typography>
          <Typography size="l" view={item}>
            Неофлекс
          </Typography>
        </div>
      ))}
    </div>
  );
};
