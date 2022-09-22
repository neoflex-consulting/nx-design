import './HeaderMenu.css';

import React from 'react';

import {cn} from '../../../utils/bem';
import {RightSide, TableColumn, TableRow} from '../Table';
import {HeaderSide} from "../headerMenu";
import {LeftSide} from "../LeftSide/LeftSide";

const cnHeaderMenu = cn('HeaderMenu');

type Props<T extends TableRow> = {
  columns: TableColumn<T>[];
  leftSide?: HeaderSide;
  rightSide?: HeaderSide;
  progressLineVisible?: (value: boolean) => void;
};

export const HeaderMenu = <T extends TableRow>({
    columns,
    leftSide,
    rightSide,
    progressLineVisible,
  }: Props<T>): React.ReactElement => {

  const RightSideComponent = rightSide ? rightSide?.name : RightSide;
  const rightSideComponentProps = rightSide?.props ?? {};

  const LeftSideComponent = leftSide ? leftSide?.name : LeftSide;
  const leftSideComponentProps = leftSide?.props ?? {};

  return (
    <>
      <div className={cnHeaderMenu()}>
        {<div className={cnHeaderMenu('LeftSide')}>
          {LeftSideComponent && (
            <LeftSideComponent
              progressLineVisible={progressLineVisible}
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
