import './RightSide.css';

import React, {useRef, useState} from 'react';
import {Button} from '../../Button/Button';

import {HeaderSide} from "../headerMenu";
import {IconTableSettings} from "../../../icons/DatagramIcon/IconTableSettings/IconTableSettings";
import {CheckboxGroup} from "../../CheckboxGroup/CheckboxGroup";
import {Popover} from "../../Popover/Popover";
import {cn} from "../../../utils/bem";
import {withTooltip} from "../../../hocs/withTooltip/withTooltip";

const cnRightSide = cn('RightSide');

type TableHeaderMenuProps = HeaderSide & {
  columns: any;
  nameApplyHiddenColumn?: string;
  nameButtonColumnSettings?: string;
  overrideHiddenColumns?: (newCheckboxGroupValue: ItemRightSide[] | null) => void;
};

export type ItemRightSide = {
  title: string;
  accessor: boolean;
  hidden: boolean
};

export const RightSide: React.FC<TableHeaderMenuProps> = ({
  columns,
  nameApplyHiddenColumn,
  nameButtonColumnSettings,
  overrideHiddenColumns
}) => {

  const refColumns = useRef(null);
  const [isOpenColumns, setIsOpenColumns] = useState(false);

  const itemsMenuColumns: ItemRightSide[] =
    columns.map((column: any) => {
      const item: ItemRightSide = {
        title: column.title,
        accessor: column.accessor,
        hidden: column.hidden
      }
      return item;
    });

  const [checkboxGroupValue, setCheckboxGroupValue] = React.useState<ItemRightSide[] | null>(itemsMenuColumns);

  const applyHiddenColumn = (newCheckboxGroupValue: ItemRightSide[] | null) => {
    setCheckboxGroupValue(newCheckboxGroupValue);
    overrideHiddenColumns && overrideHiddenColumns(newCheckboxGroupValue);
  };

  const ButtonColumnSettings = withTooltip({ content: `${nameButtonColumnSettings || "Отображение столбцов"}`})(Button);

  return (
    <div>
      <ButtonColumnSettings
        form={"default"}
        view={"clear"}
        onlyIcon={true}
        iconLeft={IconTableSettings}
        iconSize={"xs"}
        size={"s"}
        onClick={() => setIsOpenColumns(!isOpenColumns)}
        ref={refColumns}
      />
      {isOpenColumns && <Popover
        direction="downLeft"
        spareDirection="downLeft"
        onClickOutside={(event) => setIsOpenColumns(!isOpenColumns)}
        isInteractive={true}
        anchorRef={refColumns}
        equalAnchorWidth={false}
        offset={"s"}
        arrowOffset={19}
        className={cnRightSide()}
      >
        <div className={cnRightSide('Checkboxes')}>
          <CheckboxGroup
            value={checkboxGroupValue}
            items={itemsMenuColumns}
            size={"s"}
            getLabel={(item: ItemRightSide) => item.title}
            onChange={({ value }) => applyHiddenColumn(value)}
          />
        </div>
        <Button
          form={"default"}
          label={nameApplyHiddenColumn}
          size={"s"}
          onClick={() => setIsOpenColumns(!isOpenColumns)}
        />
      </Popover>}
    </div>
  );
};
