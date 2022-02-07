import React, { useState } from 'react';
import { boolean, date, number, select } from '@storybook/addon-knobs';
import { addDays, endOfDecade, startOfDecade, startOfWeek } from 'date-fns';
import enUSLocale from 'date-fns/locale/en-US';
import esLocale from 'date-fns/locale/es';
import ruLocale from 'date-fns/locale/ru';
import zhCNLocale from 'date-fns/locale/zh-CN';

import { getSizeByMap } from '../../../utils/getSizeByMap';
import { createMetadata } from '../../../utils/storybook';
import { Button } from '../../Button/Button';
import { Calendar, CalendarPropLocale } from '../Calendar';
import {
  CalendarPropType,
  CalendarPropTypeDefault,
  CalendarPropView,
  CalendarPropViewDefault,
} from '../helpers';

import mdx from './Calendar.docs.mdx';

const localeProp = ['ru', 'en-US', 'zh-CN', 'es'] as const;
type LocaleProp = typeof localeProp[number];
const localeDefault: LocaleProp = localeProp[0];

const localeMap: Record<LocaleProp, CalendarPropLocale> = {
  'ru': ruLocale,
  'en-US': { ...enUSLocale, words: { hours: 'hrs', minutes: 'min', seconds: 'sec' } },
  'zh-CN': { ...zhCNLocale, words: { hours: '小时', minutes: '分钟', seconds: '秒' } },
  'es': { ...esLocale, words: { hours: 'hrs', minutes: 'min', seconds: 'seg' } },
};

const defaultKnobs = () => ({
  type: select('type', CalendarPropType, CalendarPropTypeDefault),
  view: select('view', CalendarPropView, CalendarPropViewDefault),
  withEvents: boolean('withEvents', false),
  withAdditionalControls: boolean('withAdditionalControls', false),
  minDate: date('minDate', startOfDecade(new Date())),
  maxDate: date('maxDate', endOfDecade(new Date())),
  locale: select('locale', localeProp, localeDefault),
});

const additionalControls = () => {
  return [<Button label="Кнопка" />, <Button label="Кнопка" />];
};

export function Playground() {
  const {
    type,
    view,
    withEvents,
    minDate,
    maxDate,
    locale,
    withAdditionalControls,
  } = defaultKnobs();
  const currentDay = new Date();

  const [value, setValue] = useState<Date | undefined>(undefined);

  const events = withEvents
    ? [startOfWeek(currentDay, { locale: ruLocale }), currentDay, addDays(currentDay, 2)]
    : undefined;

  const timeProps =
    type === 'time' || type === 'date-time'
      ? {
          multiplicityHours: number('multiplicityHours', 1),
          multiplicityMinutes: number('multiplicityMinutes', 1),
          multiplicitySeconds: number('multiplicitySeconds', 1),
        }
      : {};

  return (
    <Calendar
      type={type}
      value={value}
      view={view}
      onChange={({ value }) => setValue(value)}
      minDate={new Date(minDate)}
      maxDate={new Date(maxDate)}
      events={events}
      renderAdditionalControls={withAdditionalControls ? additionalControls : undefined}
      locale={getSizeByMap(localeMap, locale)}
      {...timeProps}
    />
  );
}

export default createMetadata({
  title: 'Компоненты/Базовые/Calendar',
  id: 'components/Calendar',
  parameters: {
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v9Jkm2GrymD277dIGpRBSH/Consta-UI-Kit?node-id=58%3A33602',
    },
  },
});
