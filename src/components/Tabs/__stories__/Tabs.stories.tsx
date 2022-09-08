import React, { useState } from 'react';
import { boolean, object, select } from '@storybook/addon-knobs';

import { IconProps } from '../../../icons/_Icon/Icon';
import { IconCamera } from '../../../icons/IconCamera/IconCamera';
import { IconPhone } from '../../../icons/IconPhone/IconPhone';
import { IconImage } from '../../../icons/IconImage/IconImage';
import { IconBell } from '../../../icons/IconBell/IconBell';
import { createMetadata } from '../../../utils/storybook';
import {
  Tabs,
  tabsDefaultFitMode,
  tabsDefaultLinePosition,
  tabsDefaultSize,
  tabsDefaultView,
  tabsFitModes,
  tabsLinePositions,
  tabsSizes,
  tabsViews,
} from '../Tabs';

import mdx from './Tabs.docs.mdx';

const defaultKnobs = () => ({
  size: select('size', tabsSizes, tabsDefaultSize),
  view: select('view', tabsViews, tabsDefaultView),
  linePosition: select('linePosition', tabsLinePositions, tabsDefaultLinePosition),
  withIcon: boolean('withIcon', false),
  onlyIcon: boolean('onlyIcon', false),
});

type Item = {
  name: string;
  icon?: React.FC<IconProps>;
};

const itemIcons = [IconImage, IconBell, IconCamera, IconPhone];

const getItems = (): Item[] => {
  const knobItems = object('items', [
    {
      name: 'Первый',
    },
    {
      name: 'Очень длинный второй вариант',
    },
    {
      name: 'Третий вариант',
    },
    {
      name: 'Четвёртый вариант',
    },
  ]);

  return knobItems.map((item, idx) => ({
    ...item,
    icon: itemIcons[idx % itemIcons.length],
  }));
};

export function Playground() {
  const { size, view, linePosition, withIcon, onlyIcon } = defaultKnobs();
  const items = getItems();
  const [value, setValue] = useState<Item | null>(items[0]);

  return (
    <Tabs
      items={items}
      value={value}
      getLabel={(item) => item.name}
      getIcon={withIcon ? (item) => item.icon : undefined}
      onChange={({ value }) => setValue(value)}
      size={size}
      view={view}
      {...(linePosition === 'bottom' || linePosition === 'top'
        ? {
            linePosition,
            fitMode: select('fitMode', tabsFitModes, tabsDefaultFitMode),
          }
        : {
            linePosition,
          })}
      onlyIcon={onlyIcon}
    />
  );
}

export default createMetadata({
  title: 'Компоненты|/Навигация/Tabs',
  id: 'components/Tabs',
  parameters: {
    docs: {
      page: mdx,
    }
  },
});
