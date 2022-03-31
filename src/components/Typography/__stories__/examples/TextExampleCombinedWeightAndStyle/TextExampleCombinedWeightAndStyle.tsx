import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { Typography } from '../../../Typography';

export const TextExampleCombinedWeightAndStyle = () => {
  return (
    <div className={cnDocsDecorator('Section')}>
      <Typography as="div" align="left" size="m" view="primary" type="p">
        <Typography as="span">
          Примечание.&nbsp;
        </Typography>
        База скважин сформирована на основе отчетов сотрудников. Любые&nbsp;
        <Typography weight="bold" as="span">
          срочные изменения&nbsp;
        </Typography>
        должны вноситься по регламенту в сроки, указанные Центром Разработок.
      </Typography>
    </div>
  );
};
