import '../DatePickerFieldTypeDateRange/DatePickerFieldTypeDateRange.css';

import React, {forwardRef, useCallback, useEffect, useRef, useState} from 'react';
import {TextField} from "../../TextField/TextField";
import {useForkRef} from "../../../hooks/useForkRef/useForkRef";
import {IconCalendar} from "../../../icons/IconCalendar/IconCalendar";
import IMask from "imask";
import {format, isValid, isWithinInterval, parse} from "date-fns";
import {leapYear, maxDateDefault, minDateDefault} from "../../../utils/date";
import {
  datePickerErrorTypes,
  getDatePickerPropFormat,
  getDatePickerPropFormatTypeDate,
  getDatePickerPropSeparator,
  showPickerPropType
} from "../helpers";
import {useMutableRef} from "../../../hooks/useMutableRef/useMutableRef";
import {DatePickerFieldTypeDateRangeSingleProps, getPartsDate} from "./helpers";

export const DatePickerFieldTypeDateRangeSingle = forwardRef<
  HTMLDivElement,
  DatePickerFieldTypeDateRangeSingleProps
  >((props, ref) => {
  const {
    separator,
    showPicker,
    formatMask,
    onChange,
    onError,
    minDate = minDateDefault,
    maxDate = maxDateDefault,
    value,
    inputRef: inputRefProp,
    rightSide,
    onClose,
    countTextField,
    ...otherProps
  } = props;

  const formatProp = getDatePickerPropFormatTypeDate(showPicker, formatMask)
  const separatorProp = getDatePickerPropSeparator(formatProp);
  const inputRef = useRef<HTMLInputElement>(null);
  const imaskRef = useRef<IMask.InputMask<IMask.MaskedDateOptions> | null>(null);
  const onChangeRef = useMutableRef(onChange);

  const [stringValue, setStringValue] = useState<string | null>(
    value && isValid(value) ? format(value, formatProp) : null,
  );

  const handleChange = useCallback(
    (e: Event, stringValue: string | null) => {
      setStringValue(stringValue);
      const onChange = onChangeRef.current;

      if (onChange) {
        if (!stringValue) {
          onChange({ e, value: null });
          return;
        }

        const [yyyy, MM, dd] = getPartsDate(stringValue, formatProp, separatorProp);

        if (dd && MM && yyyy && showPicker === showPickerPropType[0]) {
          const date = parse(
            `${yyyy}${separatorProp}${MM}${separatorProp}${dd}`,
            `yyyy${separatorProp}MM${separatorProp}dd`,
            new Date(),
          );
          if (!isWithinInterval(date, { start: minDate, end: maxDate })) {
            onError &&
            onError({type: datePickerErrorTypes[0], stringValue, dd, MM, yyyy, date,});

            onChange({ e, value: null });
            return;
          }
          if (onClose) onClose();
          onChange({ e, value: date });
        }
        else if (MM && yyyy && showPicker === showPickerPropType[1]) {
          const date = parse(
            `${yyyy}${separatorProp}${MM}`,
            `yyyy${separatorProp}MM`,
            new Date(),
          );
          if (!isWithinInterval(date, { start: minDate, end: maxDate })) {
            onError &&
            onError({type: datePickerErrorTypes[0], stringValue, dd, MM, yyyy, date,});

            onChange({ e, value: null });
            return;
          }
          if (onClose) onClose();
          onChange({ e, value: date });
        }
        else if (yyyy && showPicker === showPickerPropType[2]) {
          const date = parse(
            `${yyyy}`,
            `yyyy`,
            new Date(),
          );
          if (!isWithinInterval(date, { start: minDate, end: maxDate })) {
            onError && onError({type: datePickerErrorTypes[0], stringValue, dd, MM, yyyy, date,});

            onChange({ e, value: null });
            return;
          }
          if (onClose) onClose();
          onChange({ e, value: date });
        }
        else {
          onChange({ e, value: null });
        }
      }
    },
    [minDate?.getTime(), maxDate?.getTime(), formatProp, separatorProp],
  );

  // при изменении value, нужно обновить stringValue
  useEffect(() => {
    if (value && isValid(value)) {
      setStringValue(format(value, formatProp));
    } else if (stringValue?.length === formatProp.length) {
      // если количество введенных символов меньше чем в формате маски
      // то не нужно мешать вводу с клавиатуры
      // если дата была введена полностью и value пришел null,
      // то можно считать что поле нуждается в очистке
      setStringValue('');
    }
  }, [value]);

  // задаем маску и сохраняем обьект маски в ref
  // обнавляем при смене формата
  useEffect(() => {
    if (inputRef.current) {
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
        },
        lazy: true,
        autofix: true,
        format: (date) => format(date, formatProp),
        parse: (string) => parse(string, formatProp, new Date()),
        validate: (string: string) => {
          const [yyyy, MM, dd] = getPartsDate(string, formatProp, separatorProp);

          if (
            dd &&
            MM &&
            !isValid(
              parse(
                `${leapYear}${separatorProp}${MM}${separatorProp}${dd}`,
                getDatePickerPropFormat(separatorProp),
                new Date(),
              ),
            )
          ) {
            onError &&
            onError({
              type: datePickerErrorTypes[1],
              stringValue: string,
              dd,
              MM,
              yyyy,
            });
            return false;
          }

          if (
            dd &&
            MM &&
            yyyy &&
            !isValid(
              parse(
                `${yyyy}${separatorProp}${MM}${separatorProp}${dd}`,
                getDatePickerPropFormat(separatorProp),
                new Date(),
              ),
            )
          ) {
            onError &&
            onError({
              type: datePickerErrorTypes[1],
              stringValue: string,
              dd,
              MM,
              yyyy,
            });
            return false;
          }

          return true;
        },
        // проблема в типах IMask
      }) as unknown) as IMask.InputMask<IMask.MaskedDateOptions>;
    }
  }, [formatMask]);

  // задаем нативный oninput, так как с маской по другому не будет работать
  // обнавляем oninput при смене handleChange
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.oninput = (e) => {
        handleChange(e, inputRef.current?.value || '');
      };
    }
  }, [handleChange]);

  // Нужно для синхранизации value c Imask,
  // так как value мы можем задать через пропс без самого ввода,
  // и Imask требует ручной синхронихации в этом случае
  useEffect(() => {
    imaskRef.current?.updateValue();
  }, [stringValue]);

  const icon = rightSide === undefined ? IconCalendar : undefined;

  return (
    <TextField
      {...otherProps}
      rightSide={icon}
      type="text"
      inputContainerRef={ref}
      inputRef={useForkRef([inputRef, inputRefProp])}
      value={stringValue + "-" + stringValue}
    />
  );
});
