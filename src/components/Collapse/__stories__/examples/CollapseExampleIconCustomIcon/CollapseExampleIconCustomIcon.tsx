import React, { useState } from 'react';

import { content } from '../../../__mocks__/mock.data';
import { Plus } from '../../../../../icons/Plus/Plus';
import { Minus } from '../../../../../icons/Minus/Minus';
import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { Collapse } from '../../../Collapse';

export const CollapseExampleIconCustomIconDirection = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className={cnDocsDecorator('Section')}>
      <Collapse
        label="Здесь у иконки меняется направление"
        isOpen={isOpen}
        onClick={() => setOpen(!isOpen)}
        icon={Plus}
        directionIcon="up"
        closeDirectionIcon="downRight"
      >
        {content}
      </Collapse>
    </div>
  );
};

export const CollapseExampleIconCustomIcon = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className={cnDocsDecorator('Section')}>
      <Collapse
        label="Здесь меняется иконка"
        isOpen={isOpen}
        onClick={() => setOpen(!isOpen)}
        icon={Plus}
        closeIcon={Minus}
      >
        {content}
      </Collapse>
    </div>
  );
};
