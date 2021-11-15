import './Pagination.css';

import React from 'react';

import { IconBackward } from '../../icons/IconBackward/IconBackward';
import { IconForward } from '../../icons/IconForward/IconForward';
import { cn } from '../../utils/bem';
import { PropsWithHTMLAttributesAndRef } from '../../utils/types/PropsWithHTMLAttributes';
import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';
import { TextField, TextFieldOnChangeArguments } from '../TextField/TextField';

import { getPaginationInfo } from './helpers';

export const paginationForms = ['default', 'round', 'brick'] as const;
export type PaginationPropForm = typeof paginationForms[number];
export const paginationDefaultForm: PaginationPropForm = 'default';

export const paginationSizes = ['xs', 's', 'm', 'l'] as const;
export type PaginationPropSize = typeof paginationSizes[number];
export const paginationDefaultSize: PaginationPropSize = 'm';

export const paginationTypes = ['default', 'input'] as const;
export type PaginationPropType = typeof paginationTypes[number];
export const paginationDefaultType: PaginationPropType = 'default';

export const paginationPositions = ['left', 'center', 'right'] as const;
export type PaginationPropPosition = typeof paginationPositions[number];
export const paginationDefaultPosition: PaginationPropPosition = 'center';

const getDefaultLabel = (totalPages: number): string => `из ${totalPages}`;

export const cnPagination = cn('Pagination');

type HotKey = {
  label: string;
  values: string[];
};

export type HotKeys = {
  nextPage: HotKey;
  prevPage: HotKey;
};

type Props = {
  currentPage: number;
  totalPages: number;
  onChange: (pageNumber: number) => void;
  getLabel?: (totalPages: number) => string;
  form?: PaginationPropForm;
  size?: PaginationPropSize;
  type?: PaginationPropType;
  hotkeys?: HotKeys;
  containerEventListener?: HTMLElement | Window;
  className?: string;
} & (
  | {
      minified?: true;
      position?: never;
    }
  | {
      minified?: false;
      position?: PaginationPropPosition;
    }
);

type Pagination = (
  props: PropsWithHTMLAttributesAndRef<Props, HTMLDivElement>,
) => React.ReactElement | null;

export const Pagination: Pagination = React.forwardRef((props, ref) => {
  const {
    currentPage = 0,
    totalPages = 0,
    onChange,
    getLabel = getDefaultLabel(totalPages),
    form = paginationDefaultForm,
    size = paginationDefaultSize,
    type = paginationDefaultType,
    position = paginationDefaultPosition,
    minified = false,
    hotkeys = {
      nextPage: {
        label: 'Alt →',
        values: ['Alt', 'ArrowRight'],
      },
      prevPage: {
        label: '← Alt',
        values: ['Alt', 'ArrowLeft'],
      },
    },
    containerEventListener = window,
    className,
    ...otherProps
  } = props;
  if (!totalPages) return null;
  const currPage = currentPage + 1;
  const { prevPage, nextPage, isStartDots, isEndDots, pages, isEmpty } = getPaginationInfo(
    currPage,
    totalPages,
  );
  const [keys, setKeys] = React.useState<string[]>([]);

  const changePage = (page: number | null) => {
    if (page && page !== currPage && onChange) {
      onChange(page - 1);
    }
  };

  const handleClick = (page: number | null) => (e: React.MouseEvent) => {
    e.preventDefault();
    changePage(page);
  };

  const handleChange = (args: TextFieldOnChangeArguments) => {
    const { value } = args;
    const pageNumber = Number(value);

    if (pageNumber > totalPages || Number.isNaN(pageNumber)) return;

    if (onChange) {
      onChange(pageNumber - 1);
    }
  };

  const keyUpListener: EventListener = (event) => {
    const { key } = event as KeyboardEvent;

    setKeys((prevState) => prevState.filter((hotKey) => hotKey !== key));
  };

  const keyDownListener: EventListener = (event) => {
    const { key } = event as KeyboardEvent;

    if (hotkeys.nextPage.values.includes(key) || hotkeys.prevPage.values.includes(key)) {
      const newKeys = [...keys, key];
      if (hotkeys.nextPage.values.every((hotKey) => newKeys.includes(hotKey))) {
        changePage(nextPage);
      } else if (hotkeys.prevPage.values.every((hotKey) => newKeys.includes(hotKey))) {
        changePage(prevPage);
      }
      setKeys(newKeys);
    }
  };

  React.useEffect(() => {
    containerEventListener.addEventListener('keydown', keyDownListener);
    containerEventListener.addEventListener('keyup', keyUpListener);
    return () => {
      containerEventListener.removeEventListener('keydown', keyDownListener);
      containerEventListener.removeEventListener('keyup', keyUpListener);
    };
  });

  const itemWidth = `var(--control-height-${size})`;

  return (
    (!isEmpty && (
      <nav
        className={cnPagination(
          { form, size, position: minified ? paginationDefaultPosition : position },
          [className],
        )}
        ref={ref}
        {...otherProps}
      >
        {(currPage > 1 || minified) && (
          <div className={cnPagination('PrevPage')}>
            <Button
              className={cnPagination('ItemLeft', {
                minified,
                show: currPage > 1,
              })}
              label="Назад"
              iconLeft={IconBackward}
              view="ghost"
              form={form}
              size={size}
              onClick={handleClick(prevPage)}
            />
            {!minified && (
              <Typography className={cnPagination('TipLeft')} size="xs" view="ghost">
                {hotkeys.prevPage.label}
              </Typography>
            )}
          </div>
        )}
        {type === paginationDefaultType ? (
          <div className={cnPagination('Pages')}>
            {isStartDots && (
              <Button
                className={cnPagination('Item', { isActive: currPage === 1 })}
                style={{ width: itemWidth }}
                label="1"
                title="1"
                view="ghost"
                form={form}
                size={size}
                onClick={handleClick(1)}
              />
            )}
            {isStartDots && (
              <Typography
                size={size}
                view="linkMinor"
                className={cnPagination('More')}
                style={{ width: itemWidth }}
              >
                ...
              </Typography>
            )}
            {pages.map((page) => (
              <Button
                key={page}
                className={cnPagination('Item', { isActive: currPage === page })}
                style={{ width: itemWidth }}
                label={page}
                title={`${page}`}
                view="ghost"
                form={form}
                size={size}
                onClick={handleClick(page)}
              />
            ))}
            {isEndDots && (
              <Typography
                size={size}
                view="linkMinor"
                className={cnPagination('More')}
                style={{ width: itemWidth }}
              >
                ...
              </Typography>
            )}
            {isEndDots && (
              <Button
                className={cnPagination('Item', { isActive: currPage === totalPages })}
                style={{ width: itemWidth }}
                label={totalPages}
                title={`${totalPages}`}
                view="ghost"
                form={form}
                size={size}
                onClick={handleClick(totalPages)}
              />
            )}
          </div>
        ) : (
          <div className={cnPagination('Pages')}>
            <TextField
              className={cnPagination('Input')}
              form={form}
              size={size}
              value={currPage.toString()}
              onChange={handleChange}
            />
            <Typography size={size} view="linkMinor" className={cnPagination('Total')}>
              {getLabel}
            </Typography>
          </div>
        )}
        {(currPage < totalPages || minified) && (
          <div className={cnPagination('NextPage')}>
            <Button
              className={cnPagination('ItemRight', {
                minified,
                show: currPage < totalPages,
              })}
              label="Вперёд"
              iconRight={IconForward}
              view="ghost"
              form={form}
              size={size}
              onClick={handleClick(nextPage)}
            />
            {!minified && (
              <Typography className={cnPagination('TipRight')} size="xs" view="ghost">
                {hotkeys.nextPage.label}
              </Typography>
            )}
          </div>
        )}
      </nav>
    )) ||
    null
  );
});
