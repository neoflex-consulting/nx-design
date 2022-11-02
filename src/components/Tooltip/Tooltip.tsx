import './Tooltip.css';

import React, { useState } from 'react';

import { ClickOutsideHandler } from '../../hooks/useClickOutside/useClickOutside';
import { cnMixPopoverArrow } from '../../mixs/MixPopoverArrow/MixPopoverArrow';
import { cn } from '../../utils/bem';
import { PropsWithJsxAttributes } from '../../utils/types/PropsWithJsxAttributes';
import { Direction, Popover, PositioningProps } from '../Popover/Popover';
import {TextPropSize, Typography} from '../Typography/Typography';
import { generateThemeClassNames, ThemeContext, useTheme } from '../Theme/Theme';

const ARROW_SIZE = 6;
const ARROW_OFFSET = 8;

const cnTooltip = cn('Tooltip');

export const tooltipPropSizes = ['m', 's', 'l', 'window'] as const;
export const tooltipPropSizesDefault = tooltipPropSizes[0];
export type TooltipPropSize = typeof tooltipPropSizes[number];

export const tooltipPropStatus = ['normal', 'error', 'success', 'warning'] as const;
export type TooltipPropStatus = typeof tooltipPropStatus[number];

export type TooltipProps = PropsWithJsxAttributes<
  {
    size?: TooltipPropSize;
    status?: TooltipPropStatus;
    direction?: Direction;
    spareDirection?: Direction;
    possibleDirections?: readonly Direction[];
    isInteractive?: boolean;
    children: React.ReactNode;
    onClickOutside?: ClickOutsideHandler;
    className?: string;
    textSize?: TextPropSize;
    onSetDirection?: (direction: Direction) => void;
  } & PositioningProps
>;

function renderChildren(children: React.ReactNode, textSize: TextPropSize | undefined): React.ReactNode {
  return typeof children === 'string' || typeof children === 'number' ? (
    <Typography size={textSize || "body"}>{children}</Typography>
  ) : (
    children
  );
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>((props, ref) => {
  const {
    children,
    size = tooltipPropSizesDefault,
    className,
    status,
    onSetDirection: onSetDirectionProp,
    textSize,
    style,
    ...rest
  } = props;
  const { theme } = useTheme();
  const [direction, setDirection] = useState<Direction | undefined>(undefined);

  const tooltipTheme = status
    ? {
      ...theme,
      color: {
        primary: theme.color.accent,
        accent: theme.color.accent,
        invert: theme.color.primary,
      },
    }
    : {
      ...theme,
      color: {
        primary: theme.color.invert,
        accent: theme.color.accent,
        invert: theme.color.primary,
      },
    };

  const tooltipThemeClassNames = generateThemeClassNames(tooltipTheme);

  const onSetDirection = (direction: Direction) => {
    onSetDirectionProp && onSetDirectionProp(direction);
    setDirection(direction);
  };

  return (
    <ThemeContext.Provider value={{ theme: tooltipTheme, themeClassNames: tooltipThemeClassNames }}>
      <Popover
        {...rest}
        arrowOffset={ARROW_OFFSET + ARROW_SIZE}
        offset={ARROW_SIZE + 4}
        onSetDirection={onSetDirection}
        ref={ref}
        className={cnTooltip({ status }, [className])}
        style={{
          ['--popover-arrow-size' as string]: `${ARROW_SIZE}px`,
          ['--popover-arrow-offset' as string]: `${ARROW_OFFSET}px`,
          ...style,
        }}
      >
        <div className={cnTooltip('Background')} />
        <div className={cnTooltip('Arrow', [cnMixPopoverArrow({ direction })])} />
        <div className={cnTooltip('Content', { size })}>{renderChildren(children, textSize)}</div>
      </Popover>
    </ThemeContext.Provider>
  );
});
