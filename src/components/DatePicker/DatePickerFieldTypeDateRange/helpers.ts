import { IconComponent } from '../../../icons/_Icon/Icon';
import { DateRange } from '../../../utils/types/Date';
import { TextFieldPropForm } from '../../TextField/TextField';
import { DatePickerFieldTypeDateProps } from '../DatePickerFieldTypeDate/helpers';

type DatePickerFieldTypeDateRangePropOnChange = (props: {
  e: Event;
  value: DateRange | null;
}) => void;

export type DatePickerFieldTypeDateRangeProps = Omit<
  DatePickerFieldTypeDateProps,
  'onChange' | 'value' | 'inputRef' | 'leftSide' | 'rightSide' | 'id' | 'onFocus' | 'onBlur'
> & {
  onChange?: DatePickerFieldTypeDateRangePropOnChange;
  value?: DateRange | null;
  startFieldInputRef?: React.Ref<HTMLInputElement>;
  endFieldInputRef?: React.Ref<HTMLInputElement>;
  startFieldLeftSide?: string | IconComponent;
  startFieldRightSide?: string | IconComponent;
  endFieldLeftSide?: string | IconComponent;
  endFieldRightSide?: string | IconComponent;
  startFieldRef?: React.Ref<HTMLDivElement>;
  endFieldRef?: React.Ref<HTMLDivElement>;
  startFieldOnFocus?: React.FocusEventHandler<HTMLElement>;
  endFieldOnFocus?: React.FocusEventHandler<HTMLElement>;
  startFieldOnBlur?: React.FocusEventHandler<HTMLElement>;
  endFieldOnBlur?: React.FocusEventHandler<HTMLElement>;
  startFocused?: boolean;
  endFocused?: boolean;
  id?: string;
  onChangeCurrentVisibleDate?: (date: Date) => void;
  currentVisibleDate?: Date;
  startDate?: Date | undefined | null;
  handleStartDateChange?: (props: { e: Event; value: Date | null }) => void;
  endDate?: Date | undefined | null;
  handleEndDateChange?: (props: { e: Event; value: Date | null }) => void;
  rightSide?: string | IconComponent;
  inputRef?: React.Ref<HTMLTextAreaElement | HTMLInputElement>;
};

export const mapFormForStart: Record<TextFieldPropForm, TextFieldPropForm> = {
  default: 'defaultClear',
  defaultClear: 'defaultClear',
  defaultBrick: 'defaultClear',
  brick: 'brickClear',
  brickDefault: 'brickClear',
  brickClear: 'brickClear',
  brickRound: 'brickClear',
  round: 'roundClear',
  roundClear: 'roundClear',
  roundBrick: 'roundClear',
  clearRound: 'clearClear',
  clearDefault: 'clearClear',
  clearBrick: 'clearClear',
  clearClear: 'clearClear',
};

export const mapFormForEnd: Record<TextFieldPropForm, TextFieldPropForm> = {
  default: 'brickDefault',
  defaultClear: 'brickClear',
  defaultBrick: 'brick',
  brick: 'brick',
  brickDefault: 'brickDefault',
  brickClear: 'brickClear',
  brickRound: 'brickRound',
  round: 'brickRound',
  roundClear: 'brickClear',
  roundBrick: 'brick',
  clearRound: 'brickRound',
  clearDefault: 'brickDefault',
  clearBrick: 'brick',
  clearClear: 'brickClear',
};
