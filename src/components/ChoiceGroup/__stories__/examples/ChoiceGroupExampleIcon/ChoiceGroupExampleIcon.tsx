import React, { useState } from 'react';

import { IconProps } from '../../../../../icons/_Icon/Icon';
import { IconCamera } from '../../../../../icons/IconCamera/IconCamera';
import { IconPhoto } from '../../../../../icons/IconPhoto/IconPhoto';
import { IconRing } from '../../../../../icons/IconRing/IconRing';
import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { ChoiceGroup } from '../../../ChoiceGroup';

type Item = {
  name: string;
  icon?: React.FC<IconProps>;
};

const items = [
  {
    name: 'Первый',
    icon: IconPhoto,
  },
  {
    name: 'Второй',
    icon: IconRing,
  },
  {
    name: 'Третий вариант',
    icon: IconCamera,
  },
];

export const ChoiceGroupExampleIcon = () => {
  const [value, setValue] = useState<Item | null>(items[0]);
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <ChoiceGroup
        value={value}
        onChange={({ value }) => setValue(value)}
        items={items}
        getLabel={(item) => item.name}
        getIcon={(item) => item.icon}
        name="ChoiceGroupExampleIcon"
        multiple={false}
      />
      <ChoiceGroup
        value={value}
        onChange={({ value }) => setValue(value)}
        items={items}
        getLabel={(item) => item.name}
        getIcon={(item) => item.icon}
        onlyIcon
        name="ChoiceGroupExampleIcon"
        multiple={false}
      />
    </StoryBookExample>
  );
};
