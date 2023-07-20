import React, { useState } from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { StoryBookExample } from '../../../../../uiKit/components/StoryBookExample/StoryBookExample';
import { Combobox } from '../../../Combobox';
import {IconSearch} from "../../../../../icons/IconSearch/IconSearch";
import {IconEur} from "../../../../../icons/IconEur/IconEur";
import {IconGlobe} from "../../../../../icons/IconGlobe/IconGlobe";

type Item = {
  label: string;
  id: number | string;
};

const items: Item[] = [
  {
    label: 'Первый',
    id: 1,
  },
  {
    label: 'Второй',
    id: 2,
  },
  {
    label: 'Третий',
    id: 3,
  },
];

export function ComboboxExampleChangeIcon() {
  const [value, setValue] = useState<Item | null>();
  const [list, setList] = useState<Item[]>(items);
  return (
    <StoryBookExample className={cnDocsDecorator('Section')}>
      <Combobox
        placeholder="Выберите вариант"
        items={list}
        value={value}
        onChange={({ value }) => setValue(value)}
        onCreate={({ label }) => setList([{ label, id: `${label}_${list.length + 1}` }, ...list])}
        iconRight={<IconSearch size={"xs"}/>}
        iconUp={false}
      />
      <Combobox
        placeholder="Выберите вариант"
        items={list}
        value={value}
        onChange={({ value }) => setValue(value)}
        onCreate={({ label }) => setList([{ label, id: `${label}_${list.length + 1}` }, ...list])}
        iconRight={<IconEur size={"xs"}/>}
      />
      <Combobox
        placeholder="Выберите вариант"
        items={list}
        value={value}
        onChange={({ value }) => setValue(value)}
        onCreate={({ label }) => setList([{ label, id: `${label}_${list.length + 1}` }, ...list])}
        iconRight={<IconGlobe size={"xs"}/>}
        iconUp={false}
      />
    </StoryBookExample>
  );
}
