import React, {useEffect, useMemo} from 'react';

import { ClickOutsideHandler, useClickOutside } from '../../hooks/useClickOutside/useClickOutside';
import { useComponentSize } from '../../hooks/useComponentSize/useComponentSize';
import { useForkRef } from '../../hooks/useForkRef/useForkRef';
import { PropsWithJsxAttributes } from '../../utils/types/PropsWithJsxAttributes';
import { PortalWithTheme, usePortalContext } from '../PortalWithTheme/PortalWithTheme';
import { useTheme } from '../Theme/Theme';

import { getComputedPositionAndDirection } from './helpers';
import { usePopoverReposition } from './usePopoverReposition';
import {isNumber, isString} from "../../utils/type-guards";

export { usePopoverReposition };

/**
 * Стороны упорядочены по приоритету:
 * Используется первая сторона, в которую смог вписаться поповер.
 */
export const directionsStartCenter = [
  'downCenter',
  'upCenter',

  'downRight',
  'downLeft',
  'upRight',
  'upLeft',

  'leftUp',
  'leftCenter',
  'leftDown',

  'rightUp',
  'rightCenter',
  'rightDown',
] as const;

export const directionsStartEdge = [
  'downStartLeft',
  'upStartLeft',

  'downStartRight',
  'upStartRight',

  'leftStartUp',
  'leftStartDown',

  'rightStartUp',
  'rightStartDown',
] as const;

export const popoverPropOffset = [
  '3xs',
  '2xs',
  'xs',
  's',
  'm',
  'l',
  'xl',
  '2xl',
  '3xl',
  '4xl',
  '5xl',
  '6xl',
] as const;
export type PopoverPropOffset = typeof popoverPropOffset[number] | number;

export const directions = [...directionsStartCenter, ...directionsStartEdge];

export type Direction = typeof directions[number];

export type DirectionsStartEdge = typeof directionsStartEdge[number];

export type Position = { x: number; y: number } | undefined;

export type PositioningProps =
  | {
      anchorRef: React.RefObject<HTMLElement>;
      equalAnchorWidth?: boolean;
      position?: never;
    }
  | {
      anchorRef?: never;
      equalAnchorWidth?: never;
      position: Position;
    };

type ChildrenRenderProp = (direction: Direction) => React.ReactNode;

export type Props = PropsWithJsxAttributes<
  {
    direction?: Direction;
    spareDirection?: Direction;
    offset?: PopoverPropOffset;
    arrowOffset?: number;
    possibleDirections?: readonly Direction[];
    isInteractive?: boolean;
    children: React.ReactNode | ChildrenRenderProp;
    onClickOutside?: ClickOutsideHandler;
    onSetDirection?: (direction: Direction) => void;
  } & PositioningProps
>;

const getOffset = (ref: React.RefObject<HTMLDivElement>, propOffset: PopoverPropOffset) => {
  if (isNumber(propOffset)) {
    return propOffset;
  }

  if (isString(propOffset) && ref.current) {
    const cssVar = getComputedStyle(ref.current).getPropertyValue(`--space-${propOffset}`);

    if (cssVar && /px$/.test(cssVar)) {
      return Number(cssVar.slice(0, cssVar.length - 2));
    }

    if (cssVar && /rem$/.test(cssVar)) {
      const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
      const rem = Number(cssVar.slice(0, cssVar.length - 3));

      return fontSize * rem;
    }

    if (cssVar && /em$/.test(cssVar)) {
      const fontSize = parseFloat(getComputedStyle(ref.current).fontSize);
      const em = Number(cssVar.slice(0, cssVar.length - 2));

      return fontSize * em;
    }

    return 0;
  }

  return 0;
};

const isRenderProp = (
  children: React.ReactNode | ChildrenRenderProp,
): children is ChildrenRenderProp => typeof children === 'function';

/**
 * Подписчик на PortalWithThemeProvider
 * получает рефы всех вложенных порталов в модалку
 * для дальнейшего исключения их из useClickOutside
 */
const ContextConsumer: React.FC<{
  onClickOutside?: (event: MouseEvent) => void;
  ignoreClicksInsideRefs?: ReadonlyArray<React.RefObject<HTMLElement>>;
}> = ({ onClickOutside, children, ignoreClicksInsideRefs }) => {
  const { refs } = usePortalContext();

  useClickOutside({
    isActive: !!onClickOutside,
    ignoreClicksInsideRefs: [...(ignoreClicksInsideRefs || []), ...(refs || [])],
    handler: (event: MouseEvent) => onClickOutside?.(event),
  });

  return <>{children}</>;
};

export const Popover = React.forwardRef<HTMLDivElement, Props>((props, componentRef) => {
  const {
    children,
    direction: passedDirection = 'upCenter',
    offset: propOffset = 0,
    arrowOffset,
    possibleDirections = directions,
    isInteractive = true,
    onClickOutside,
    spareDirection = 'downStartLeft',
    style,
    position: passedPosition,
    anchorRef,
    equalAnchorWidth,
    onSetDirection,
    ...otherProps
  } = props;

  const ref = React.useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [anchorClientRect, setAnchorClientRect] = React.useState<DOMRect | undefined>();
  const { width, height } = useComponentSize(ref);
  const anchorSize = useComponentSize(anchorRef || { current: null });
  const previousDirectionRef = React.useRef<Direction | null>(null);
  const { current: previousDirection } = previousDirectionRef;
  const [bannedDirections, setBannedDirections] = React.useState<readonly Direction[]>([]);

  useMemo(()=> setAnchorClientRect(anchorRef?.current?.getBoundingClientRect()), [
    anchorRef !== null && anchorRef !== undefined && anchorRef.current !== null  && anchorRef.current !== undefined && anchorRef.current.getBoundingClientRect().y,
    anchorRef !== null && anchorRef !== undefined && anchorRef.current !== null  && anchorRef.current !== undefined && anchorRef.current.getBoundingClientRect().x
  ]);

  useEffect(() => {
    updateAnchorClientRect()
  }, [
    anchorRef !== null && anchorRef !== undefined && anchorRef.current !== null  && anchorRef.current !== undefined && anchorRef.current.getBoundingClientRect().y,
    anchorRef !== null && anchorRef !== undefined && anchorRef.current !== null  && anchorRef.current !== undefined && anchorRef.current.getBoundingClientRect().x
  ]);


  const resetBannedDirections = () => {
    setBannedDirections((state) => (state.length ? [] : state));
    previousDirectionRef.current = null;
  };

  const updateAnchorClientRect = () =>
    setAnchorClientRect(anchorRef?.current?.getBoundingClientRect());

  const offset = useMemo(() => getOffset(ref, propOffset), [propOffset, Boolean(ref.current)]);

  React.useLayoutEffect(updateAnchorClientRect, [anchorSize]);

  usePopoverReposition({
    isActive: true,
    scrollAnchorRef: anchorRef || { current: null },
    onRequestReposition: () => {
      resetBannedDirections();
      updateAnchorClientRect();
    },
  });

  const { position, direction } = getComputedPositionAndDirection({
    contentSize: { width, height },
    viewportSize: {
      // Размер вьюпорта без скроллбаров
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    },
    offset,
    arrowOffset,
    direction: passedDirection,
    possibleDirections,
    bannedDirections,
    position: anchorClientRect
      ? { x: anchorClientRect.left, y: anchorClientRect.top }
      : passedPosition,
    anchorSize,
    spareDirection,
  });

  useEffect(() => onSetDirection && onSetDirection(direction), [direction]);

  /**
   * Может возникнуть ситуация, когда перерасчет поповера всегда будет выдавать 2 направления
   * и бесконечно зацикливать себя. Для избежания таких кейсов мы запоминаем стороны,
   * которые не подошли, чтобы не возвращаться к ним и предотвратить бесконечный ререндер.
   * См. PopoverBannedPositionsStory
   */
  if (previousDirection !== direction) {
    if (previousDirection && !bannedDirections.includes(previousDirection)) {
      setBannedDirections([...bannedDirections, previousDirection]);
    }
    previousDirectionRef.current = direction;
  }

  // Сбрасываем при любом изменении пропсов, чтобы заново начать перебор направлений
  // Главное не сбрасывать при изменении размеров поповера, т.к. именно оно может вызвать бесконечный перебор
  React.useLayoutEffect(resetBannedDirections, [props]);

  const content = isRenderProp(children) ? children(direction) : children;

  return (
    <PortalWithTheme
      {...otherProps}
      preset={theme}
      container={window.document.body}
      ref={useForkRef<HTMLDivElement>([ref, componentRef])}
      style={{
        ...style,
        ...(equalAnchorWidth && { width: anchorSize.width }),
        pointerEvents: isInteractive ? undefined : 'none',
        position: 'absolute',
        top: (position?.y || 0) + window.scrollY,
        left: (position?.x || 0) + window.scrollX,
        visibility: position ? undefined : 'hidden',
      }}
    >
      <ContextConsumer
        onClickOutside={onClickOutside}
        ignoreClicksInsideRefs={[ref, anchorRef || { current: null }]}
      >
        {content}
      </ContextConsumer>
    </PortalWithTheme>
  );
});
