import './TableFilterTooltip.css';

import React from 'react';

import { IconFunnel } from '../../../icons/IconFunnel/IconFunnel';
import { cn } from '../../../utils/bem';
import { Button } from '../../Button/Button';
import { Popover } from '../../Popover/Popover';
import { Typography } from '../../Typography/Typography';

const cnTableFilterTooltip = cn('TableFilterTooltip');

type Values = string[];

type Props = {
  options: Array<{
    value: Values[number];
    label: string;
  }>;
  values: Values;
  field: string;
  isOpened: boolean;
  onChange: (field: string, values: Values) => void;
  onToggle: () => void;
  className?: string;
};

export const TableFilterTooltip: React.FC<Props> = ({
  field,
  isOpened,
  options,
  values,
  className,
  children,
  onChange,
  onToggle,
}) => {
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button
        ref={buttonRef}
        size="xs"
        iconSize="s"
        view="clear"
        onlyIcon
        onClick={onToggle}
        className={cnTableFilterTooltip('Button', { isOpened }, [className])}
        iconLeft={IconFunnel}
      />
      {isOpened && buttonRef.current && (
        <Popover
          anchorRef={buttonRef}
          possibleDirections={['downRight', 'downLeft']}
          direction="downRight"
          offset={4}
          arrowOffset={12}
          onClickOutside={onToggle}
        >
          {children || (
            <div className={cnTableFilterTooltip('Content')}>
              <Typography as="div" size="caption" view="primary" className={cnTableFilterTooltip('Title')}>
                Фильтровать по условию
              </Typography>
              <select
                className={cnTableFilterTooltip('Select')}
                value={[...values]}
                multiple
                onChange={(e): void => {
                  onChange(
                    field,
                    Array.from(e.target.selectedOptions).map((option) => option.value),
                  );
                }}
              >
                {options.map((option) => (
                  <option
                    key={option.value}
                    className={cnTableFilterTooltip('Option')}
                    value={option.value}
                    title={option.label}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          )}
        </Popover>
      )}
    </>
  );
};
