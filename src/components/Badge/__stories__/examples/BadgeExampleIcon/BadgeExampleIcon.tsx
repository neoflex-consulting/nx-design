import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { cnDocsExample } from '../../../../../uiKit/components/DocsExample/DocsExample';
import * as wp from '../../../../../uiKit/whitepaper/whitepaper';
import { Badge } from '../../../Badge';
import { NeoIcon } from "neo-icon";

export const BadgeExampleIcon = () => (
  <div className={cnDocsDecorator('Section', [cnDocsExample()])}>
    <Badge
      icon={<NeoIcon icon={'check'}/>}
      status="success"
      label="Съедобно"
      className={wp.decorator({ 'indent-r': 'm' })}
    />
    <Badge
      icon={<NeoIcon icon={'close'}/>}
      status="error"
      label="Отрава"
      className={wp.decorator({ 'indent-r': 'm' })}
    />
  </div>
);
