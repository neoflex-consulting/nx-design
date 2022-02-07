import { DateRange } from '../../../utils/types/Date';
import { PropsWithHTMLAttributesAndRef } from '../../../utils/types/PropsWithHTMLAttributes';

export const CalendarPropView = ['classic', 'book', 'slider'] as const;
export type CalendarPropView = typeof CalendarPropView[number];
export const CalendarPropViewDefault = CalendarPropView[0];

export const CalendarPropType = ['date', 'month', 'year', 'time', 'date-time'] as const;
export type CalendarPropType = typeof CalendarPropType[number];
export const CalendarPropTypeDefault = CalendarPropType[0];

export type СapableRangeType = 'date' | 'month' | 'year';

export type CalendarPropValue<TYPE> = TYPE extends СapableRangeType ? Date | DateRange : Date;

export type CalendarPropOnChange = (props: {
  value: Date;
  e: React.MouseEvent<HTMLButtonElement>;
}) => void;

export type CalendarPropOnChangeRange<TYPE> = TYPE extends СapableRangeType
  ? (props: { value: DateRange; e: React.MouseEvent<HTMLButtonElement> }) => void
  : never;

type LocaleWords = {
  words?: {
    hours?: string;
    minutes?: string;
    seconds?: string;
  };
};

export type CalendarPropLocale = Locale & LocaleWords;

export const moveTypes = ['year', 'month', 'day', 'time'] as const;
export type MoveType = typeof moveTypes[number];

export type CalendarProps<TYPE extends CalendarPropType = 'date'> = PropsWithHTMLAttributesAndRef<
  {
    currentVisibleDate?: Date;
    type?: TYPE;
    value?: CalendarPropValue<TYPE>;
    onChange?: CalendarPropOnChange;
    onChangeRange?: CalendarPropOnChangeRange<TYPE>;
    minDate?: Date;
    maxDate?: Date;
    events?: Date[];
    view?: TYPE extends СapableRangeType ? CalendarPropView : 'classic';
    locale?: CalendarPropLocale;
    children?: never;
    onChangeCurrentVisibleDate?: (date: Date) => void;
    multiplicitySeconds?: number;
    multiplicityMinutes?: number;
    multiplicityHours?: number;
    onMove?: (type: MoveType) => void;
    renderAdditionalControls?: CalendarAdditionalControlRenderProp;
  },
  HTMLDivElement
>;

export type CalendarAdditionalControlRenderProp =
  | React.ReactNode
  | React.ReactNode[]
  | AdditionalControlRenderType;

export type AdditionalControlRenderType = (
  props: CalendarAdditionalControlRenderProps,
) => React.ReactNode | React.ReactNode[];

export type CalendarAdditionalControlRenderProps = {
  currentVisibleDate?: Date;
};

export type CalendarComponent = <TYPE extends CalendarPropType = 'date'>(
  props: CalendarProps<TYPE>,
) => React.ReactElement | null;

export type CalendarTypeComponent<TYPE extends CalendarPropType> = (
  props: Omit<CalendarProps<TYPE>, 'type'>,
) => React.ReactElement | null;

export type HandleSelectDate = (props: {
  value: Date;
  e: React.MouseEvent<HTMLButtonElement>;
}) => void;
