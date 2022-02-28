import React, { useState } from 'react';

import { IconProps } from '../../../../../icons/_Icon/Icon';
import { IconCamera } from '../../../../../icons/IconCamera/IconCamera';
import { IconImage } from '../../../../../icons/IconImage/IconImage';
import { IconBell } from '../../../../../icons/IconBell/IconBell';
import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { Tabs } from '../../../Tabs';

type Item = {
  name: string;
  icon?: React.FC<IconProps>;
};

const items = [
  {
    name: 'Первый',
    icon: IconImage,
  },
  {
    name: 'Второй',
    icon: IconBell,
  },
  {
    name: 'Третий вариант',
    icon: IconCamera,
  },
];

export const TabsExampleIcon = () => {
  const [value, setValue] = useState<Item | null>(items[0]);
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <Tabs
        value={value}
        onChange={({ value }) => setValue(value)}
        items={items}
        getLabel={(item) => item.name}
        getIcon={(item) => item.icon}
      />
      <Tabs
        value={value}
        onChange={({ value }) => setValue(value)}
        items={items}
        getLabel={(item) => item.name}
        getIcon={(item) => item.icon}
        onlyIcon
      />
    </StoryBookExample>
  );
};
