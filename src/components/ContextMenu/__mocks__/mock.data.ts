import { IconProps } from '../../../icons/_Icon/Icon';
import { CheckDouble } from '../../../icons/CheckDouble/CheckDouble';
import { Layers } from '../../../icons/Layers/Layers';
import { Bank } from '../../../icons/IconBank/IconBank';
import { Eye } from '../../../icons/Eye/Eye';
import { Wifi } from '../../../icons/Wifi/Wifi';
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
    icon: Layers,
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
            icon: Wifi,
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
            icon: Wifi,
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
            icon: Wifi,
          },
        ],
      },
    ],
  },
  {
    name: 'Глаз',
    status: 'normal',
    icon: Eye,
    accent: 'success',
    group: 1,
  },
  {
    name: 'Две галочки',
    group: 2,
    icon: CheckDouble,
    switch: false,
    accent: 'error',
  },
  {
    name: 'Чемодан',
    group: 2,
    icon: Bank,
    switch: false,
    accent: 'error',
  },
  {
    name: 'Солнце',
    group: 2,
    icon: Wifi,
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
