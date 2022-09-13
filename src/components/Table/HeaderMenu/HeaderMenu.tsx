import './HeaderMenu.css';

import React from 'react';

import {cn} from '../../../utils/bem';
import {TableColumn, TableRow} from '../Table';
import {HeaderSide} from "../headerMenu";

const cnHeaderMenu = cn('HeaderMenu');

type Props<T extends TableRow> = {
  columns: TableColumn<T>[];
  leftSide: HeaderSide;
  rightSide: HeaderSide;
  progressLineVisible?: (value: boolean) => void;
};

export const HeaderMenu = <T extends TableRow>({
    columns,
    leftSide,
    rightSide,
    progressLineVisible,
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
