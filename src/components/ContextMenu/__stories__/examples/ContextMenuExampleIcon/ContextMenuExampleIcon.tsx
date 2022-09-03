import React, { useRef, useState } from 'react';

import { IconComponent } from '../../../../../icons/_Icon/Icon';
import { IconCheck } from '../../../../../icons/IconCheck/IconCheck';
import { IconConnect } from '../../../../../icons/IconConnect/IconConnect';
import { IconCub } from '../../../../../icons/IconCub/IconCub';
import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { Button } from '../../../../Button/Button';
import { ContextMenu } from '../../../ContextMenu';

type Item = {
  label: string;
  imageLeft?: IconComponent;
  imageRight?: IconComponent;
};

const items: Item[] = [
  {
    label: 'Скрепка',
    imageLeft: IconConnect,
  },
  {
    label: 'Две галочки',
    imageRight: IconCheck,
  },
  {
    label: 'Чемодан',
    imageLeft: IconCub,
  },
];

export const ContextMenuExampleIcon = () => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <Button ref={ref} label="Открыть" onClick={() => setIsOpen(!isOpen)} />
      <ContextMenu
        isOpen={isOpen}
        items={items}
        getItemLeftIcon={(item) => item.imageLeft}
        getItemRightIcon={(item) => item.imageRight}
        anchorRef={ref}
        direction="downStartLeft"
      />
    </StoryBookExample>
  );
};
