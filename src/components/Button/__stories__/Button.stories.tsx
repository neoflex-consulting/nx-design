import * as React from 'react';
import {action} from '@storybook/addon-actions';
import {boolean, select, text} from '@storybook/addon-knobs';

import {cn} from '../../../utils/bem';
import {createMetadata} from '../../../utils/storybook';
import {eventInterceptorMap, EventInterceptorProvider,} from '../../EventInterceptor/EventInterceptor';
import {
  Button,
  buttonPropForm,
  buttonPropFormDefault,
  buttonPropSize,
  buttonPropSizeDefault,
  buttonPropView,
  buttonPropViewDefault,
  buttonPropWidth,
  buttonPropWidthDefault,
} from '../Button';

import mdx from './Button.docs.mdx';
import {IconUser} from "../../../icons/IconUser/IconUser";
import {IconCaretDown} from "../../../icons/IconCaretDown/IconCaretDown";

const defaultKnobs = () => ({
  width: select('Width', buttonPropWidth, buttonPropWidthDefault),
  size: select('Size', buttonPropSize, buttonPropSizeDefault),
  view: select('View', buttonPropView, buttonPropViewDefault),
  form: select('Form', buttonPropForm, buttonPropFormDefault),
  disabled: boolean('Disabled', false),
  loading: boolean('Loading', false),
  label: text('Content', 'Это кнопка'),
  iconLeft: boolean('Icon Left', false),
  iconRight: boolean('Icon Right', false),
  onlyIcon: boolean('Only Icon', false),
});

const cnButtonStories = cn('ButtonStories');

export function Playground() {
  const {
    width,
    size,
    view,
    form,
    disabled,
    loading,
    label,
    iconLeft,
    iconRight,
    onlyIcon,
  } = defaultKnobs();

  return (
    <EventInterceptorProvider eventHandler={console.log} map={eventInterceptorMap}>
      <div className={cnButtonStories()}>
          <Button
            width={width}
            size={size}
            view={view}
            form={form}
            disabled={disabled}
            loading={loading}
            label={label}
            onlyIcon={onlyIcon}
            onClick={action('click')}
            iconRight={iconRight ? IconUser : undefined}
            iconLeft={iconLeft ? IconCaretDown : undefined}
          />
      </div>
    </EventInterceptorProvider>
  );
}

export default createMetadata({
  title: 'Компоненты|/Базовые/Button',
  id: 'components/Button',
  parameters: {
    docs: {
      page: mdx,
    }
  },
});
