import './HeaderMenu.css';

import React from 'react';

import {cn} from '../../../utils/bem';
import {TableColumn, TableRow} from '../Table';
import {Button} from "../../Button/Button";
import {IconTableSettings} from "../../../icons/DatagramIcon/IconTableSettings/IconTableSettings";
import {IconDelete} from "../../../icons/IconDelete/IconDelete";
import {IconRefresh} from "../../../icons/IconRefresh/IconRefresh";
import {IconPlus} from "../../../icons/IconPlus/IconPlus";
const cnHeaderMenu = cn('HeaderMenu');

type Props<T extends TableRow> = {
  columns: TableColumn<T>[];
  leftSide?: React.ReactNode;
  rightSide?: React.ReactNode;
};

export const HeaderMenu = <T extends TableRow>({
    columns,
    leftSide,
    rightSide,
  }: Props<T>): React.ReactElement => {

  const leftSideDefault =
    <div>
      <Button
        onlyIcon={true}
        iconLeft={IconPlus}
        iconSize={"xs"}
        size={"s"}
      />
      <Button
        view={"clear"}
        onlyIcon={true}
        iconLeft={IconRefresh}
        iconSize={"xs"}
        size={"s"}
      />
      <div className={cnHeaderMenu('LeftSideLine')}/>
      <Button
        view={"clear"}
        onlyIcon={true}
        iconLeft={IconDelete}
        iconSize={"xs"}
        size={"s"}
      />
    </div>;

  const rightSideDefault =
    <div>
      <Button
        view={"clear"}
        onlyIcon={true}
        iconLeft={IconTableSettings}
        iconSize={"xs"}
        size={"s"}
      />
    </div>;

  return (
    <>
      <div className={cnHeaderMenu()}>
        {<div className={cnHeaderMenu('LeftSide')}>{leftSide || leftSideDefault}</div>}
        {<div className={cnHeaderMenu('RightSide')}>{rightSide || rightSideDefault}</div>}
      </div>
    </>
  );
};
