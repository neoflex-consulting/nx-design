import React, { useState } from 'react';

import { IconProps } from '../../../../../icons/_Icon/Icon';
import { Camera } from '../../../../../icons/Camera/Camera';
import { Image } from '../../../../../icons/Image/Image';
import { Bell } from '../../../../../icons/Bell/Bell';
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
    icon: Image,
  },
  {
    name: 'Второй',
    icon: Bell,
  },
  {
    name: 'Третий вариант',
    icon: Camera,
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
