import './TableRowsCollapse.css';

import React from 'react';

import { cn } from '../../../utils/bem';
import { Button } from '../../Button/Button';
import {NeoIcon} from "neo-icon/lib";

export type Props = {
  level: number;
  isExpandedByDefault?: boolean;
  toggleCollapse?: (e: React.SyntheticEvent) => void;
  isExpanded?: boolean;
  withCollapseButton?: boolean;
};

export const cnTableRowsCollapse = cn('TableRowsCollapse');

export const TableRowsCollapse: React.FC<Props> = (props) => {
  const {
    level,
    children,
    isExpanded,
    toggleCollapse,
    withCollapseButton,
    isExpandedByDefault,
  } = props;

  const style: React.CSSProperties & {
    '--nesting-level': number;
  } = { '--nesting-level': level };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      style={style}
      className={cnTableRowsCollapse()}
      onClick={toggleCollapse}
      onKeyDown={toggleCollapse}
    >
      {!isExpandedByDefault && withCollapseButton && (
        <div className={cnTableRowsCollapse('buttonContainer')}>
          <Button
            iconLeft={isExpanded ? <NeoIcon icon={"chevron-up"} size={"s"}/> : <NeoIcon icon={"chevron-down"} size={"s"}/>}
            size="xs"
            onlyIcon
            view="clear"
          />
        </div>
      )}
      <div
        className={cnTableRowsCollapse('cellContainer', {
          withExpanderPadding: !isExpandedByDefault,
        })}
      >
        {children}
      </div>
    </div>
  );
};
