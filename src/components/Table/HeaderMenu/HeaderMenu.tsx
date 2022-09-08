import './HeaderMenu.css';

import React from 'react';

import {cn} from '../../../utils/bem';
import {TableColumn, TableRow} from '../Table';
import {cnHeader} from "../../Header/Header";
import {Button} from "../../Button/Button";
const cnHeaderMenu = cn('HeaderMenu');

type Props<T extends TableRow> = {
  columns: TableColumn<T>[];
  // leftSide?: React.ReactNode;
  // rightSide?: React.ReactNode;
};

export const HeaderMenu = <T extends TableRow>({
    columns
  }: Props<T>): React.ReactElement => {

  const leftSide = <div>Test</div>

  const rightSide =
    <div>
      <Button
      // iconLeft={IconTableSetV}
      />
    </div>;

  return (
    <>
      <div className={cnHeaderMenu()}>
        {<div className={cnHeader('LeftSide')}>{leftSide}</div>}
        {<div className={cnHeader('RightSide')}>{rightSide}</div>}
      </div>
    </>
  );
};
