import './TableFilterTooltip.css';

import React, { useRef, useState } from 'react';
import { Transition } from 'react-transition-group';

import { IconFilter } from '../../../icons/IconFilter/IconFilter';
import {
  animateTimeout,
  cnMixPopoverAnimate,
} from '../../../mixs/MixPopoverAnimate/MixPopoverAnimate';
import { cn } from '../../../utils/bem';
import { Button } from '../../Button/Button';
import { Direction, Popover } from '../../Popover/Popover';
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
  const [direction, setDirection] = useState<Direction>('downRight');

  const buttonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Button
        ref={buttonRef}
        size="xs"
        iconSize="xs"
        view="clear"
        onlyIcon
        onClick={onToggle}
        className={cnTableFilterTooltip('Button', { isOpened }, [className])}
        iconLeft={IconFilter}
      />
      <Transition in={isOpened} unmountOnExit nodeRef={popoverRef} timeout={animateTimeout}>
        {(animate) => (
          <Popover
            anchorRef={buttonRef}
            possibleDirections={['downRight', 'downLeft']}
            direction="downRight"
            offset={4}
            arrowOffset={12}
            ref={popoverRef}
            onSetDirection={setDirection}
            onClickOutside={onToggle}
            className={cnTableFilterTooltip('Popover', [
              cnMixPopoverAnimate({ animate, direction }),
            ])}
          >
            {children || (
              <div className={cnTableFilterTooltip('Content')}>
                <Typography as="div" size="xs" view="primary" className={cnTableFilterTooltip('Title')}>
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
      </Transition>
    </>
  );
};
