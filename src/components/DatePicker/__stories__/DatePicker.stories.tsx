import React, {useEffect, useState} from 'react';
import {boolean, date, select, text} from '@storybook/addon-knobs';
import {addDays, Locale, startOfWeek} from 'date-fns';
import enUSLocale from 'date-fns/locale/en-US';
import esLocale from 'date-fns/locale/es';
import ruLocale from 'date-fns/locale/ru';
import zhCNLocale from 'date-fns/locale/zh-CN';

import {IconCalendar} from '../../../icons/IconCalendar/IconCalendar';
import {maxDateDefault, minDateDefault} from '../../../utils/date';
import {getSizeByMap} from '../../../utils/getSizeByMap';
import {createMetadata} from '../../../utils/storybook';
import {Button} from '../../Button/Button';
import {CalendarPropView, CalendarPropViewDefault} from '../../Calendar/helpers';
import {
  textFieldPropForm,
  textFieldPropFormDefault,
  textFieldPropSize,
  textFieldPropSizeDefault,
  textFieldPropStatus,
  textFieldPropView,
  textFieldPropViewDefault,
} from '../../TextField/TextField';
import {DatePicker, showPickerPropType} from '../DatePicker';
import {
  datePickerPropDropdownForm,
  datePickerPropDropdownFormDefault,
  datePickerPropType,
  datePickerPropTypeDefault,
  DatePickerPropValue,
  showPickerPropTypeDefault,
} from '../helpers';

import mdx from './DatePicker.docs.mdx';
import {directionsStartEdge} from "../../Popover/Popover";

const localeProp = ['ru', 'en-US', 'zh-CN', 'es'] as const;
type LocaleProp = typeof localeProp[number];
const localeDefault: LocaleProp = localeProp[0];

const localeMap: Record<LocaleProp, Locale> = {
  'ru': ruLocale,
  'en-US': enUSLocale,
  'zh-CN': zhCNLocale,
  'es': esLocale,
};

const defaultKnobs = () => ({
  type: select('type', datePickerPropType, datePickerPropTypeDefault),
  showPicker: select('showPicker', showPickerPropType, showPickerPropTypeDefault),
  direction: select('direction', directionsStartEdge, directionsStartEdge[0]),
  form: select('form', textFieldPropForm, textFieldPropFormDefault),
  status: select('status', ['', ...textFieldPropStatus], ''),
  withAdditionalControls: boolean('withAdditionalControls', false),
  label: text('label', 'Заголовок'),
  caption: text('caption', 'Подпись'),
  placeholder: text('placeholder', ''),
  formatMask: text('formatMask', ''),
  required: boolean('required', false),
  labelPosition: select('labelPosition', ['top', 'left'], 'top'),
  size: select('size', textFieldPropSize, textFieldPropSizeDefault),
  view: select('view', textFieldPropView, textFieldPropViewDefault),
  disabled: boolean('disabled', false),
  rightSide: boolean('rightSide (withIcon)', true),
  minDate: date('minDate', minDateDefault),
  maxDate: date('maxDate', maxDateDefault),
  withEvents: boolean('withEvents', false),
  locale: select('locale', localeProp, localeDefault),
  calendarView: select('calendarView', CalendarPropView, CalendarPropViewDefault),
  dropdownForm: select(
    'dropdownForm',
    datePickerPropDropdownForm,
    datePickerPropDropdownFormDefault,
  ),
  alwaysVisible: boolean('alwaysVisible', false),
  relative: boolean('relative', false),
});

const additionalControls = () => {
  return [<Button label="Кнопка" />, <Button label="Кнопка" />];
};

export function Playground() {
  const {
    form,
    status,
    label,
    caption,
    required,
    labelPosition,
    size,
    view,
    rightSide,
    disabled,
    withEvents,
    locale,
    calendarView,
    dropdownForm,
    type,
    minDate,
    maxDate,
    withAdditionalControls,
    placeholder,
    formatMask,
    showPicker,
    direction,
    alwaysVisible,
    relative,
  } = defaultKnobs();

  const [value, setValue] = useState<DatePickerPropValue<typeof type>>(null);

  const currentDay = new Date();

  const events = withEvents
    ? [startOfWeek(currentDay, { locale: ruLocale }), currentDay, addDays(currentDay, 2)]
    : undefined;

  const icon = rightSide ? undefined : IconCalendar;

  useEffect(() => {
    setValue(null);
  }, [type]);

  return (
    <div style={{ left: '600px', maxWidth: 150 }}>
        <DatePicker
          type={type}
          width="full"
          form={form}
          label={label}
          labelPosition={labelPosition}
          caption={caption}
          required={required}
          value={value}
          status={status || undefined}
          view={view}
          disabled={disabled}
          size={size}
          onChange={({ value }) => setValue(value)}
          rightSide={icon}
          events={events}
          locale={getSizeByMap(localeMap, locale)}
          calendarView={calendarView}
          dropdownForm={dropdownForm}
          minDate={new Date(minDate)}
          maxDate={new Date(maxDate)}
          {...(type === 'date-range' && {
            endFieldRightSide: icon,
            startFieldRightSide: icon,
          })}
          renderAdditionalControls={withAdditionalControls ? additionalControls : undefined}
          placeholder={placeholder}
          formatMask={formatMask}
          showPicker={showPicker}
          direction={direction}
          alwaysVisible={alwaysVisible}
          relative={relative}
        />
      </div>
  );
}

export default createMetadata({
  title: 'Компоненты|/Базовые/DatePicker',
  id: 'components/DatePicker',
  parameters: {
    docs: {
      page: mdx,
    }
  },
});
