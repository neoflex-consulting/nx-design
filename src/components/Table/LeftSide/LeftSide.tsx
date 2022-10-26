import './LeftSide.css';

import React, {useRef, useState} from 'react';
import {Button} from '../../Button/Button';

import {HeaderSide} from "../headerMenu";
import {IconPlus} from "../../../icons/IconPlus/IconPlus";
import {IconRefresh} from "../../../icons/IconRefresh/IconRefresh";
import {withTooltip} from "../../../hocs/withTooltip/withTooltip";
import {cn} from "../../../utils/bem";
import {ContextMenu} from "../../ContextMenu/ContextMenu";
import {ContextMenuItemDefault} from "../../ContextMenu/types";
import {ButtonAddPropType, buttonAddPropTypeDefault} from "../Table";

type LeftSideProps = HeaderSide & {
  nameButtonAddColumn?: string;
  nameButtonRefresh?: string;
  onClickButtonRefresh?: (event: any) => void;
  progressLineVisible?: (value: boolean) => void;
  onClickButtonAdd?: (event: any) => void;
  buttonAddItems?: ContextMenuItemDefault[];
  buttonAddType?: ButtonAddPropType;
};

const cnLeftSide = cn('LeftSide');

export const LeftSide: React.FC<LeftSideProps> = ({
                                                           nameButtonAddColumn,
                                                           nameButtonRefresh,
                                                           onClickButtonRefresh,
                                                           progressLineVisible,
                                                           buttonAddItems,
                                                           buttonAddType,
                                                           onClickButtonAdd
                                                          }) => {

  const ButtonAddColumn = withTooltip({ content: `${nameButtonAddColumn || "Добавить строку"}`})(Button);
  const ButtonRefresh = withTooltip({ content: `${nameButtonRefresh || "Обновить таблицу"}`})(Button);

  const [isProgressLineVisible, setIsProgressLineVisible] = React.useState<boolean>(false);

  const refButtonAdd = useRef(null);
  const [isOpenButtonAdd, setIsOpenButtonAdd] = useState(false);

  return (
    <div className={cnLeftSide()}>
        <ButtonAddColumn
          className={cnLeftSide('Buttons')}
          onlyIcon={true}
          iconLeft={IconPlus}
          iconSize={"xs"}
          size={"s"}
          onClick={(event) => {
            buttonAddType === buttonAddPropTypeDefault || buttonAddType === undefined ?
            onClickButtonAdd && onClickButtonAdd(event) :
            setIsOpenButtonAdd(!isOpenButtonAdd)
          }}
          ref={refButtonAdd}
        />
        <ContextMenu
          isOpen={isOpenButtonAdd}
          items={buttonAddItems || []}
          anchorRef={refButtonAdd}
          direction="downStartLeft"
          onClickOutside={() => setIsOpenButtonAdd(false)}
          size={"s"}
          offset={10}
      />
        <ButtonRefresh
          className={cnLeftSide('Buttons')}
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
  );
};
