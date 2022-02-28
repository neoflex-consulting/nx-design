import { IconProps } from '../../../icons/_Icon/Icon';
import { IconCheckDouble } from '../../../icons/IconCheckDouble/IconCheckDouble';
import { IconLayers } from '../../../icons/IconLayers/IconLayers';
import { IconBank } from '../../../icons/IconBank/IconBank';
import { IconEye } from '../../../icons/IconEye/IconEye';
import { IconWifi } from '../../../icons/IconWifi/IconWifi';
import { BadgePropStatus } from '../../Badge/Badge';
import { ContextMenuAccent } from '../helpers';

export const groups = [
  {
    name: 'Первая группа',
    id: 1,
  },
  {
    name: 'Вторая группа',
    id: 2,
  },
] as const;

export declare type Item = {
  name: string;
  group?: typeof groups[number]['id'];
  subMenu?: Item[];
  switch?: boolean;
  status?: BadgePropStatus;
  icon?: React.FC<IconProps> | null;
  accent?: ContextMenuAccent;
  disabled?: boolean;
};

export const exampleItems: Item[] = [
  {
    name: 'Скрепка',
    icon: IconLayers,
    accent: 'success',
    group: 1,
    subMenu: [
      {
        name: 'Пункт - 1',
        status: 'success',
        accent: 'success',
      },
      {
        name: 'Пункт - 2',
        accent: 'success',
        subMenu: [
          {
            name: 'Пункт - 3',
            icon: IconWifi,
            subMenu: [
              {
                name: 'Пункт - 5',
              },
              {
                name: 'Пункт - 6',
              },
            ],
          },
          {
            name: 'Пункт - 4',
            icon: IconWifi,
            subMenu: [
              {
                name: 'Пункт - 7',
              },
              {
                name: 'Пункт - 8',
              },
            ],
          },
          {
            name: 'Пункт - 9',
            icon: IconWifi,
          },
        ],
      },
    ],
  },
  {
    name: 'Глаз',
    status: 'normal',
    icon: IconEye,
    accent: 'success',
    group: 1,
  },
  {
    name: 'Две галочки',
    group: 2,
    icon: IconCheckDouble,
    switch: false,
    accent: 'error',
  },
  {
    name: 'Чемодан',
    group: 2,
    icon: IconBank,
    switch: false,
    accent: 'error',
  },
  {
    name: 'Солнце',
    group: 2,
    icon: IconWifi,
    switch: false,
    accent: 'error',
    disabled: true,
  },
];

export type TestItem = {
  name: string;
  group?: typeof groups[number]['id'];
};

export const testItems: TestItem[] = [
  {
    name: 'Скрепка',
    group: 2,
  },
  {
    name: 'Глаз',
    group: 1,
  },
  {
    name: 'Две галочки',
    group: 1,
  },
  {
    name: 'Чемодан',
    group: 2,
  },
  {
    name: 'Солнце',
    group: 2,
  },
];
