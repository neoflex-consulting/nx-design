import './HeaderMenu.css';

import React from 'react';

import {cn} from '../../../utils/bem';
import {TableRow} from '../Table';
import {Button} from "../../Button/Button";
import {IconDelete} from "../../../icons/IconDelete/IconDelete";
import {IconRefresh} from "../../../icons/IconRefresh/IconRefresh";
import {IconPlus} from "../../../icons/IconPlus/IconPlus";
import {HeaderSide} from "../headerMenu";
import {Header} from "../helpers";

const cnHeaderMenu = cn('HeaderMenu');

type Props<T extends TableRow> = {
  columns: Array<Header<TableRow>>;
  leftSide?: HeaderSide;
  rightSide?: HeaderSide;
};

export const HeaderMenu = <T extends TableRow>({
    columns,
    leftSide,
    rightSide
  }: Props<T>): React.ReactElement => {

  const RightSideComponent = rightSide?.name;
  const rightSideComponentProps = rightSide?.props ?? {};

  const LeftSideComponent = leftSide?.name;
  const leftSideComponentProps = leftSide?.props ?? {};

  return (
    <>
      <div className={cnHeaderMenu()}>
        {<div className={cnHeaderMenu('LeftSide')}>
          {LeftSideComponent && (
            <LeftSideComponent
              columns={columns}
              {...leftSideComponentProps}
            />
          )}
        </div>}
        {<div className={cnHeaderMenu('RightSide')}>
          {RightSideComponent && (
            <RightSideComponent
              columns={columns}
              {...rightSideComponentProps}
            />
          )}
        </div>}
      </div>
    </>
  );
};
