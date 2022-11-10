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
import {presetDatagram, Theme} from "../../Theme/Theme";

// const defaultKnobs = () => ({
//   size: select('size', tabsSizes, tabsDefaultSize),
//   view: select('view', tabsViews, tabsDefaultView),
//   linePosition: select('linePosition', tabsLinePositions, tabsDefaultLinePosition),
//   withIcon: boolean('withIcon', false),
//   onlyIcon: boolean('onlyIcon', false),
// closeIcon: boolean('onlyIcon', true),
// });

const defaultKnobs = () => ({
  size: select('size', tabsSizes, "s"),
  view: select('view', tabsViews, "stroke"),
  linePosition: select('linePosition', tabsLinePositions, tabsDefaultLinePosition),
  withIcon: boolean('withIcon', true),
  onlyIcon: boolean('onlyIcon', false),
  // closeIcon: boolean('closeIcon', true),
});

type Item = {
  name: string;
  icon?: React.FC<IconProps>;
  closeIcon?: boolean;
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
      closeIcon: true,
    },
    {
      name: 'Четвёртый вариант',
      closeIcon: true,
    },
  ]);

  return knobItems.map((item, idx) => ({
    ...item,
    icon: itemIcons[idx % itemIcons.length],
  }));
};

export function Playground() {
  const { size, view, linePosition, withIcon, onlyIcon } = defaultKnobs();
  // const items = getItems();

  const [items, setItems] = useState<Item[]>(getItems());
  const [value, setValue] = useState<Item | null>(items[0]);

  const onCloseTab = (value: any) => {
    const newItem = items.filter(value1 => value.name !== value1.name)
    setItems(newItem)
  }

  return (
    <Tabs
      items={items}
      value={value}
      getLabel={(item) => item.name}
      getIcon={withIcon ? (item) => item.icon : undefined}
      onChange={({ value }) => setValue(value)}
      onClose={({ value }) => onCloseTab(value)}
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
