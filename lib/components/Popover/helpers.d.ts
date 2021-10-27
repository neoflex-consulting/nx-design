import { Direction, Position } from './Popover';
declare type Size = Pick<ClientRect, 'width' | 'height'>;
declare type PositionsByDirection = Record<Direction, NonNullable<Position>>;
export declare const getPositionsByDirection: ({ contentSize, anchorSize, position: { x, y }, offset, arrowOffset, }: {
    contentSize: Size;
    anchorSize: Size;
    position: NonNullable<Position>;
    offset: number;
    arrowOffset?: number | undefined;
}) => PositionsByDirection;
declare type ComputedPositionAndDirectionParams = {
    position: Position;
    contentSize: Size;
    viewportSize: Size;
    anchorSize?: Size;
    offset: number;
    arrowOffset?: number;
    direction: Direction;
    spareDirection: Direction;
    possibleDirections: readonly Direction[];
    bannedDirections: readonly Direction[];
};
export declare const getComputedPositionAndDirection: ({ position: initialPosition, contentSize, viewportSize, anchorSize, offset, arrowOffset, direction: initialDirection, possibleDirections, bannedDirections, spareDirection, }: ComputedPositionAndDirectionParams) => {
    direction: Direction;
    position: Position;
};
export {};
