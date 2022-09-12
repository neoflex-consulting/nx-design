import React from 'react';
import {Button} from '../../Button/Button';

import {HeaderSide} from "../headerMenu";
import {TableRow} from "../Table";
import {Header} from "../helpers";
import {IconPlus} from "../../../icons/IconPlus/IconPlus";
import {IconRefresh} from "../../../icons/IconRefresh/IconRefresh";
import {withTooltip} from "../../../hocs/withTooltip/withTooltip";

type TableHeaderMenuProps = HeaderSide & {
  columns: Array<Header<TableRow>>;
  nameButtonAddColumn?: string;
  nameButtonRefresh?: string;
  onClickButtonAddColumn?: (event: any) => void;
  onClickButtonRefresh?: (event: any) => void;
};

export const LeftSide: React.FC<TableHeaderMenuProps> = ({
                                                            columns,
                                                           nameButtonAddColumn,
                                                           nameButtonRefresh,
                                                           onClickButtonAddColumn,
                                                           onClickButtonRefresh
                                                          }) => {

  const ButtonAddColumn = withTooltip({ content: `${nameButtonAddColumn || "Добавить строку"}`})(Button);
  const ButtonRefresh = withTooltip({ content: `${nameButtonRefresh || "Обновить таблицу"}`})(Button);

  return (
    <div>
      <div>
        <ButtonAddColumn
          onlyIcon={true}
          iconLeft={IconPlus}
          iconSize={"xs"}
          size={"s"}
          onClick={event => onClickButtonAddColumn && onClickButtonAddColumn(event)}
        />
        <ButtonRefresh
          view={"clear"}
          onlyIcon={true}
          iconLeft={IconRefresh}
          iconSize={"xs"}
          size={"s"}
          onClick={event => onClickButtonRefresh && onClickButtonRefresh(event)}
        />
      </div>
    </div>
  );
};
