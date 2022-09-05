import React from 'react';

import { IconInfo } from '../../../icons/IconInfo/IconInfo';
import { IconAlert } from '../../../icons/IconAlert/IconAlert';
import { IconDelete } from '../../../icons/IconDelete/IconDelete';
import { IconEye } from '../../../icons/IconEye/IconEye';
import { IconApps } from '../../../icons/IconApps/IconApps';
import { ContextMenuGroupDefault, ContextMenuItemDefault } from '../types';
import {Button} from "../../Button/Button";

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
    label: <span>Пункт</span>,
    leftIcon: IconAlert,
    rightIcon: IconAlert,
    status: 'success',
    groupId: 1,
    key: 1,
    subMenu: [
      {
        label: 'Пункт - 1',
        status: 'success',
        key: 1-1
      },
      {
        label: 'Пункт - 2',
        status: 'success',
        key: 1-2,
        subMenu: [
          {
            label: 'Пункт - 3',
            leftIcon: IconApps,
            rightIcon: IconApps,
            key: 1-2-3,
            subMenu: [
              {
                label: 'Пункт - 5',
                key: 1-2-3-5
              },
              {
                label: 'Пункт - 6',
                key: 1-2-3-6
              },
            ],
          },
          {
            label: 'Пункт - 4',
            leftIcon: IconApps,
            rightIcon: IconApps,
            key: 1-2-4,
            subMenu: [
              {
                label: 'Пункт - 7',
                key: 1-2-4-7,
              },
              {
                label: 'Пункт - 8',
                key: 1-2-4-8,
              },
            ],
          },
          {
            label: 'Пункт - 9',
            leftIcon: IconApps,
            rightIcon: IconApps,
            key: 1-2-4-9,
          },
        ],
      },
    ],
  },
  {
    label: <Button label={"Глаз"} onClick={event => alert("Это кнопка в пункте меню")}/>,
    leftIcon: IconEye,
    rightIcon: IconEye,
    groupId: 1,
    key: 2
  },
  {
    label: 'Две галочки',
    groupId: 2,
    leftIcon: IconInfo,
    rightIcon: IconInfo,
    rightSide: '!',
    switch: true,
    status: 'error',
    key: 3
  },
  {
    label: 'Чемодан',
    groupId: 2,
    leftIcon: IconDelete,
    rightIcon: IconDelete,
    rightSide: '!',
    switch: true,
    status: 'error',
    key: 4
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
    key: 5
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
