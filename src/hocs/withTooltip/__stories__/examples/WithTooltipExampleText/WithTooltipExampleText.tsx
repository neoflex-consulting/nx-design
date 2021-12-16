import React from 'react';

import { Typography } from '../../../../../components/Typography/Typography';
import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { withTooltip } from '../../../withTooltip';

const TextWithTooltip = withTooltip({ content: 'Тултип' })(Typography);

export const WithTooltipExampleText = () => {
  return (
    <div className={cnDocsDecorator('Section')}>
      <TextWithTooltip size="l" as="a" href="#" view="brand">
        На мне появится тултип
      </TextWithTooltip>
    </div>
  );
};
