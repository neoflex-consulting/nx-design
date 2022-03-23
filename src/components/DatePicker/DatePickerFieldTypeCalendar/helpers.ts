import React, { useEffect, useRef } from 'react';
import {
  addHours,
  addMinutes,
  addSeconds,
  format,
  isValid,
  parse,
  startOfDay,
  startOfHour,
  startOfMinute,
} from 'date-fns';
import IMask from 'imask';

import { IconComponent, IconPropSize } from '../../../icons/_Icon/Icon';
import { leapYear } from '../../../utils/date';
import { PropsWithHTMLAttributes } from '../../../utils/types/PropsWithHTMLAttributes';
import { getLabelHours, getLabelMinutes, getLabelSeconds } from '../../Calendar/helpers';
import {
  TextFieldPropForm,
  TextFieldPropSize,
  TextFieldPropStatus,
  TextFieldPropView,
  TextFieldPropWidth,
} from '../../TextField/TextField';
import {
  datePickerErrorTypes,
  DatePickerPropOnError,
  getDatePickerPropFormatTypeDate,
  getDatePickerPropSeparator,
  getTimeEnum,
  ShowPickerPropType,
} from '../helpers';

type DatePickerFieldTypeCalendarPropOnChange = (props: { e: Event; value: Date | null }) => void;

export type DatePickerFieldTypeCalendarProps = PropsWithHTMLAttributes<
  {
    className?: string;
    value?: Date | null;
    onChange?: DatePickerFieldTypeCalendarPropOnChange;
    onError?: DatePickerPropOnError;
    id?: string;
    name?: string;
    disabled?: boolean;
    size?: TextFieldPropSize;
    view?: TextFieldPropView;
    form?: TextFieldPropForm;
    status?: TextFieldPropStatus;
    width?: TextFieldPropWidth;
    onFocus?: React.FocusEventHandler<HTMLElement>;
    onBlur?: React.FocusEventHandler<HTMLElement>;
    autoFocus?: boolean;
    placeholder?: string;
    leftSide?: string | IconComponent;
    rightSide?: string | IconComponent;
    readOnly?: boolean;
    required?: boolean;
    tabIndex?: number;
    inputRef?: React.Ref<HTMLTextAreaElement | HTMLInputElement>;
    ariaLabel?: string;
    iconSize?: IconPropSize;
    children?: never;
    formatMask?: string;
    separator?: string;
    minDate?: Date;
    maxDate?: Date;
    focused?: boolean;
    multiplicitySeconds?: number;
    multiplicityMinutes?: number;
    multiplicityHours?: number;
    label?: string;
    caption?: string;
    labelPosition?: 'top' | 'left';
    showPicker?: ShowPickerPropType;
  },
  HTMLDivElement
>;

export const getDatePickerPropFormatTypeCalendar = (separator: string | undefined, formatMask: string | undefined) => {
    return `yyyy${getDatePickerPropSeparator(separator, formatMask)}MM${getDatePickerPropSeparator(separator, formatMask)}dd HH:mm:ss`;
}

const getPartDate = (formatArray: string[], stringArray: string[], marker: string) => {
  const index = formatArray.indexOf(marker);

  if (index >= 0 && stringArray[index] && stringArray[index].length === marker.length) {
    return stringArray[index];
  }

  return undefined;
};

export const getParts = (format: string, separator: string) => {
  const [date, time] = format.split(' ');

  return [...(date ? date.split(separator) : []), ...(time ? time.split(':') : [])];
};

export const getPartsDate = (
  value: string,
  format: string,
  separator: string,
  markers: string[] = ['yyyy', 'MM', 'dd', 'HH', 'mm', 'ss'],
) => {
  const formatArray = getParts(format, separator);
  const stringArray = getParts(value, separator);

  return markers.map((marker) => getPartDate(formatArray, stringArray, marker));
};

export const useImask = (
  formatProp: string,
  separator: string,
  multiplicityHours: number | undefined,
  multiplicitySeconds: number | undefined,
  multiplicityMinutes: number | undefined,
  inputRef: React.RefObject<HTMLInputElement>,
  stringValue: string | null,
  onError: DatePickerPropOnError | undefined,
) => {
  const imaskRef = useRef<IMask.InputMask<IMask.MaskedDateOptions> | null>(null);

  // задаем маску и сохраняем обьект маски в ref
  // обнавляем при смене формата
  useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    imaskRef.current = (IMask(inputRef.current, {
      mask: Date,
      pattern: formatProp,
      blocks: {
        yyyy: {
          mask: IMask.MaskedRange,
          from: 1,
          to: 9999,
        },
        MM: {
          mask: IMask.MaskedRange,
          from: 1,
          to: 12,
        },
        dd: {
          mask: IMask.MaskedRange,
          from: 1,
          to: 31,
        },
        HH:
          multiplicityHours && multiplicityHours > 0
            ? {
                mask: IMask.MaskedEnum,
                enum: getTimeEnum(24, multiplicityHours, startOfDay, addHours, getLabelHours),
              }
            : {
                mask: IMask.MaskedRange,
                from: 0,
                to: 23,
              },
        mm:
          multiplicityMinutes && multiplicityMinutes > 0
            ? {
                mask: IMask.MaskedEnum,
                enum: getTimeEnum(
                  60,
                  multiplicityMinutes,
                  startOfHour,
                  addMinutes,
                  getLabelMinutes,
                ),
              }
            : {
                mask: IMask.MaskedRange,
                from: 0,
                to: 59,
              },
        ss:
          multiplicitySeconds && multiplicitySeconds > 0
            ? {
                mask: IMask.MaskedEnum,
                enum: getTimeEnum(
                  60,
                  multiplicitySeconds,
                  startOfMinute,
                  addSeconds,
                  getLabelSeconds,
                ),
              }
            : {
                mask: IMask.MaskedRange,
                from: 0,
                to: 59,
              },
      },
      lazy: true,
      autofix: true,
      format: (date) => format(date, formatProp),
      parse: (string) => parse(string, formatProp, new Date()),
      validate: (string: string) => {
        const [yyyy, MM, dd, HH, mm, ss] = getPartsDate(string, formatProp, getDatePickerPropSeparator(separator, formatProp));

        if (
          dd &&
          MM &&
          !isValid(
            parse(
              `${leapYear}${getDatePickerPropSeparator(separator, formatProp)}${MM}${getDatePickerPropSeparator(separator, formatProp)}${dd}`,
              getDatePickerPropFormatTypeDate(separator, undefined, formatProp),
              new Date(),
            ),
          )
        ) {
          onError?.({
            type: datePickerErrorTypes[1],
            stringValue: string,
            dd,
            MM,
            yyyy,
            HH,
            mm,
            ss,
          });

          return false;
        }

        if (
          dd &&
          MM &&
          yyyy &&
          !isValid(
            parse(
              `${yyyy}${getDatePickerPropSeparator(separator, formatProp)}${MM}${getDatePickerPropSeparator(separator, formatProp)}${dd}`,
              getDatePickerPropFormatTypeDate(separator, undefined, formatProp),
              new Date(),
            ),
          )
        ) {
          onError?.({
            type: datePickerErrorTypes[1],
            stringValue: string,
            dd,
            MM,
            yyyy,
            HH,
            mm,
            ss,
          });

          return false;
        }

        return true;
      },
      // проблема в типах IMask
    }) as unknown) as IMask.InputMask<IMask.MaskedDateOptions>;
  }, [formatProp, getDatePickerPropSeparator(separator, formatProp), multiplicityHours, multiplicitySeconds, multiplicityMinutes]);

  // Нужно для синхранизации value c Imask,
  // так как value мы можем задать через пропс без самого ввода,
  // и Imask требует ручной синхронихации в этом случае
  useEffect(() => {
    imaskRef.current?.updateValue();
  }, [stringValue]);
};
