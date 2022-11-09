import React, { useState } from 'react';

import { content } from '../../../__mocks__/mock.data';
import { IconWarningC } from '../../../../../icons/IconWarningC/IconWarningC';
import { IconSettings } from '../../../../../icons/IconSettings/IconSettings';
import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { Badge } from '../../../../Badge/Badge';
import { Button } from '../../../../Button/Button';
import { Collapse } from '../../../Collapse';

export const CollapseExampleIconLeftSideBadge = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className={cnDocsDecorator('Section')}>
      <Collapse
        label="Здесь слева что-то есть"
        isOpen={isOpen}
        onClick={() => setOpen(!isOpen)}
        iconPosition={"right"}
        leftSide={[
          <Badge label="Badge" status="success" />,
          <IconWarningC size="s" view="warning" />,
        ]}
      >
        {content}
      </Collapse>
    </div>
  );
};

export const CollapseExampleIconLeftSideButton = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className={cnDocsDecorator('Section')}>
      <Collapse
        label="А здесь вообще слева настройки"
        isOpen={isOpen}
        onClick={() => setOpen(!isOpen)}
        iconPosition={"right"}
        leftSide={
          <Button
            iconLeft={IconSettings}
            size="xs"
            view="ghost"
            onClick={(e) => {
              e.stopPropagation();
              alert('Button Click');
            }}
          />
        }
      >
        {content}
      </Collapse>
    </div>
  );
};
