import './ComboboxStories.css';

import React, { useState } from 'react';
import {boolean, object, select, text} from '@storybook/addon-knobs';

import { groups, Item, items, myData, myGroup, MyItem } from '../__mocks__/data.mock';
import { cn } from '../../../utils/bem';
import { createMetadata, createStory } from '../../../utils/storybook';
import {
  defaultPropForm,
  defaultPropSize,
  defaultPropView,
  propForm,
  propView,
} from '../../SelectComponents/types';
import {Combobox, defaultPropIconView, propIconView} from '../Combobox';

import mdx from './Combobox.docs.mdx';
import {IconSearch} from "../../../icons/IconSearch/IconSearch";
import {IconCaretDown} from "../../../icons/IconCaretDown/IconCaretDown";
import {IconDoubleDown} from "../../../icons/IconDoubleDown/IconDoubleDown";

const cnComboboxStories = cn('ComboboxStories');

const getKnobs = () => ({
  disabled: boolean('disabled', false),
  size: select('size', ['m', 's', 'l'], defaultPropSize),
  view: select('view', propView, defaultPropView),
  form: select('form', propForm, defaultPropForm),
  placeholder: text('placeholder', 'Placeholder'),
  withGroups: boolean('withGroups', false),
  changeIcon: select('changeIcon', propIconView, defaultPropIconView),
  iconUp: boolean('iconUp', true),
});

export function Playground(): JSX.Element {
  const { size, disabled, view, form, placeholder, withGroups, iconUp, changeIcon } = getKnobs();
  const [value, setValue] = useState<Item | null>(null);
  const [valueMultiple, setValueMultiple] = useState<Item[] | null>(null);
  const multiple = boolean('multiple', false);
  const Icon = changeIcon === propIconView[1] ? <IconSearch size="xs"/> : changeIcon === propIconView[2] ? <IconDoubleDown size="xs"/> : <IconCaretDown size="xs"/>;

  if (multiple) {
    return (
      <Combobox
        key="multiple"
        size={size}
        disabled={disabled}
        view={view}
        form={form}
        placeholder={placeholder}
        items={items}
        value={valueMultiple}
        onChange={({ value }) => setValueMultiple(value)}
        groups={withGroups ? groups : []}
        multiple
        iconUp={iconUp}
        iconRight={Icon}
      />
    );
  }
  return (
    <Combobox
      key="not-multiple"
      size={size}
      disabled={disabled}
      view={view}
      form={form}
      placeholder={placeholder}
      items={items}
      value={value}
      onChange={({ value }) => setValue(value)}
      groups={withGroups ? groups : []}
      iconUp={iconUp}
      iconRight={Icon}
    />
  );
}

export const WithRender = createStory(
  () => {
    const { size, disabled, view, form, placeholder, withGroups } = getKnobs();
    const [value, setValue] = useState<MyItem | null>();

    return (
      <Combobox
        size={size}
        disabled={disabled}
        view={view}
        form={form}
        placeholder={placeholder}
        items={myData}
        value={value}
        onChange={({ value }) => setValue(value)}
        groups={withGroups ? myGroup : []}
        renderItem={({ item, active, hovered, onClick, onMouseEnter }) => (
          <div
            className={cnComboboxStories('MyItem', { active, hovered })}
            role="option"
            tabIndex={0}
            aria-selected={active}
            aria-hidden="true"
            onMouseEnter={onMouseEnter}
            onClick={onClick}
          >
            {item.name}
          </div>
        )}
        renderValue={({ item }) => (
          <div>
            <span role="img" aria-label="Panda">
              🐼
            </span>{' '}
            - {item.name}
          </div>
        )}
        getGroupKey={(group) => group}
        getGroupLabel={(group) => group}
        getItemGroupKey={(item) => item.group}
        getItemKey={(item) => item.name}
        getItemLabel={(item) => item.name}
      />
    );
  },
  {
    name: 'со своим списком и заначением',
  },
);

export const WithCreate = createStory(
  () => {
    const { size, disabled, view, form, placeholder, withGroups } = getKnobs();
    const [value, setValue] = useState<Item | null>();
    const [list, setList] = useState<Item[]>(items);
    return (
      <Combobox
        key="not-multiple"
        size={size}
        disabled={disabled}
        view={view}
        form={form}
        placeholder={placeholder}
        items={list}
        value={value}
        onChange={({ value }) => setValue(value)}
        groups={withGroups ? groups : []}
        onCreate={({ label }) => setList([{ label, id: `${label}_${list.length + 1}` }, ...list])}
      />
    );
  },
  {
    name: 'с созданием новой опции',
  },
);

export default createMetadata({
  title: 'Компоненты|/Базовые/Select/Combobox',
  id: 'components/Combobox',
  parameters: {
    docs: {
      page: mdx,
    }
  },
});
