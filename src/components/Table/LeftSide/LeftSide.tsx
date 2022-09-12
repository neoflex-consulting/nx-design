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
  progressLineVisible?: (value: boolean) => void;
};

export const LeftSide: React.FC<TableHeaderMenuProps> = ({
                                                            columns,
                                                           nameButtonAddColumn,
                                                           nameButtonRefresh,
                                                           onClickButtonAddColumn,
                                                           onClickButtonRefresh,
                                                           progressLineVisible
                                                          }) => {

  const ButtonAddColumn = withTooltip({ content: `${nameButtonAddColumn || "Добавить строку"}`})(Button);
  const ButtonRefresh = withTooltip({ content: `${nameButtonRefresh || "Обновить таблицу"}`})(Button);

  const [isProgressLineVisible, setIsProgressLineVisible] = React.useState<boolean>(false);

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
          onClick={event => {
            onClickButtonRefresh && onClickButtonRefresh(event);
            setIsProgressLineVisible(!isProgressLineVisible);
            progressLineVisible !== undefined && progressLineVisible(!isProgressLineVisible);
          }
        }
        />
      </div>
    </div>
  );
};
