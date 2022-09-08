import './TableTextFilter.css';

import React, { useMemo, useState } from 'react';

import { IconSearch } from '../../../icons/IconSearch/IconSearch';
import { cn } from '../../../utils/bem';
import { Button } from '../../Button/Button';
import { CheckboxGroup } from '../../CheckboxGroup/CheckboxGroup';
import { Typography } from '../../Typography/Typography';
import { TextField } from '../../TextField/TextField';
import { TableFilterContainer } from '../FilterContainer/TableFilterContainer';
import { FilterComponentProps } from '../filtering';
import {IconInbox} from "../../../icons/IconInbox/IconInbox";

const cnTextFilter = cn('TableTextFilter');

type Item = {
  name: string;
  value: string;
};

type TableTextFilterProps = FilterComponentProps & {
  items?: Item[];
  withSearch?: boolean;
  nameSearch?: string;
  nameSelectAll?: string;
  nameReset?: string;
  nameApply?: string;
  nameCancel?: string;
  nameNotFound?: string;
  title?: string;
};

export const TableTextFilter: React.FC<TableTextFilterProps> = ({
  items = [],
  nameSearch,
  nameSelectAll,
  nameReset,
  nameApply,
  nameCancel,
  nameNotFound,
  withSearch = false,
  onConfirm,
  onCancel,
  filterValue,
  title
}) => {
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [checkboxGroupValue, setCheckboxGroupValue] = useState<Item[] | null>(
    (filterValue as Item[]) || items,
  );

  const confirmHandler = () => {
    setSearchValue(null);
    onConfirm(checkboxGroupValue === null ? [] : checkboxGroupValue);
  };

  const resetHandler = () => {
    setCheckboxGroupValue(null);
  };

  const filteredItems = useMemo(() => {
    if (!searchValue) {
      return items;
    }

    return items.filter(({ name }) => {
      return name.match(new RegExp(`${searchValue}`, 'i'));
    });
  }, [searchValue, items]);

  const setAll = () => {
    setCheckboxGroupValue(filteredItems);
  };

  const isAllSelected = useMemo(() => filteredItems.length === checkboxGroupValue?.length, [
    filteredItems,
    checkboxGroupValue,
  ]);

  const isSelected = useMemo(() => checkboxGroupValue?.length, [checkboxGroupValue]);

  return (
    <TableFilterContainer
      title={title}
      onCancel={onCancel}
      onConfirm={confirmHandler}
      confirmButtonLabel={nameApply}
      cancelButtonLabel={nameCancel}
    >
      {withSearch && (
        <TextField
          value={searchValue}
          onChange={({ value }) => setSearchValue(value)}
          leftSide={IconSearch}
          iconSize={"xs"}
          size="m"
          placeholder={nameSearch || "Найти в списке"}
          width="full"
          withClearButton={true}
          className={cnTextFilter('Searchbar')}
        />
      )}
      <div className={cnTextFilter('Controls')}>
        <Button
          size="m"
          form="brick"
          label={nameSelectAll || "Выбрать все"}
          view="clear"
          onClick={setAll}
          disabled={!filteredItems.length || isAllSelected}
        />
        <Button
          size="m"
          form="brick"
          label={nameReset || "Сбросить"}
          view="clear"
          onClick={resetHandler}
          disabled={!filteredItems.length || !isSelected}
        />
      </div>
      <div className={cnTextFilter('Checkboxes')}>
        {filteredItems.length ? (
          <CheckboxGroup
            items={filteredItems}
            size={"s"}
            value={checkboxGroupValue}
            getLabel={(item) => item.name}
            onChange={({ value }) => {
              setCheckboxGroupValue(value);
            }}
            name="checkboxGroup"
          />
        ) : (
          <div className={cnTextFilter('TypoNotFound')}>
            <IconInbox size={"l"} view={"secondary"}/>
            <Typography >{nameNotFound || "Ничего не найдено"}</Typography>
          </div>
        )}
      </div>
    </TableFilterContainer>
  );
};
