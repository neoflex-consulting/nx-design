import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import * as wp from '../../../../../uiKit/whitepaper/whitepaper';
import { Typography} from '../../../Typography';

export const TextExampleHeightLine = () => {
  return (
    <div
      className={cnDocsDecorator('Section', [
        wp.tplGrid({ 'xs-columns': 2, 'col-gap': 'full', 'row-gap': 'full' }),
      ])}
    >
        <div className={wp.tplGrid('fraction', { row: 'third' })}>
          <Typography size="s" view="ghost" className={wp.decorator({ 'indent-b': 'xs' })}>
            {/* {`text*line-height*${item}`} */}
          </Typography>
          <Typography>
            «Неофлекс» ведет работу в крупнейших российских банках.
          </Typography>
        </div>
    </div>
  );
};
