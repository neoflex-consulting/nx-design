import { IconInfo } from '../../../icons/IconInfo/IconInfo';
import { IconAlert } from '../../../icons/IconAlert/IconAlert';
import { IconDelete } from '../../../icons/IconDelete/IconDelete';
import { IconEye } from '../../../icons/IconEye/IconEye';
import { IconApps } from '../../../icons/IconApps/IconApps';
import { ContextMenuGroupDefault, ContextMenuItemDefault } from '../types';

export const groups: ContextMenuGroupDefault[] = [
  {
    label: 'Первая группа',
    id: 1,
  },
  {
    label: 'Вторая группа',
    id: 2,
  },
];

export type Item = ContextMenuItemDefault & {
  switch?: boolean;
};

export const exampleItems: Item[] = [
  {
    label: 'Скрепка',
    leftIcon: IconAlert,
    rightIcon: IconAlert,
    status: 'success',
    groupId: 1,
    subMenu: [
      {
        label: 'Пункт - 1',
        status: 'success',
      },
      {
        label: 'Пункт - 2',
        status: 'success',
        subMenu: [
          {
            label: 'Пункт - 3',
            leftIcon: IconApps,
            rightIcon: IconApps,
            subMenu: [
              {
                label: 'Пункт - 5',
              },
              {
                label: 'Пункт - 6',
              },
            ],
          },
          {
            label: 'Пункт - 4',
            leftIcon: IconApps,
            rightIcon: IconApps,
            subMenu: [
              {
                label: 'Пункт - 7',
              },
              {
                label: 'Пункт - 8',
              },
            ],
          },
          {
            label: 'Пункт - 9',
            leftIcon: IconApps,
            rightIcon: IconApps,
          },
        ],
      },
    ],
  },
  {
    label: 'Глаз',
    leftIcon: IconEye,
    rightIcon: IconEye,
    groupId: 1,
  },
  {
    label: 'Две галочки',
    groupId: 2,
    leftIcon: IconInfo,
    rightIcon: IconInfo,
    rightSide: '!',
    switch: true,
    status: 'error',
  },
  {
    label: 'Чемодан',
    groupId: 2,
    leftIcon: IconDelete,
    rightIcon: IconDelete,
    rightSide: '!',
    switch: true,
    status: 'error',
  },
  {
    label: 'Солнце',
    groupId: 2,
    leftIcon: IconApps,
    rightIcon: IconApps,
    status: 'error',
    rightSide: '!',
    switch: true,
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
