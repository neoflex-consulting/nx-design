import * as React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';

import { IconHeart } from '../../../icons/IconHeart/IconHeart';
import { createMetadata } from '../../../utils/storybook';
import {
  Alert,
  alertPropSiseDefault,
  alertPropSize,
  alertPropStatus,
  alertPropStatusDefault,
  alertPropView,
  alertPropViewDefault,
} from '../Alert';

import mdx from './Alert.docs.mdx';

const defaultKnobs = () => ({
  status: select('status', alertPropStatus, alertPropStatusDefault),
  title: text('title', 'Some title'),
  label: text('label', 'Hey there! I am Alert. Be ready to be informed :)'),
  view: select('view', alertPropView, alertPropViewDefault),
  size: select('size', alertPropSize, alertPropSiseDefault),
  icon: boolean('icon', false)
});

export function Playground() {
  const { status, title, label, view, icon, size } = defaultKnobs();

  return (
    <Alert
      size={size}
      status={status}
      title={title}
      label={label}
      view={view}
      icon={icon ? IconHeart : undefined}
    />
  );
}

export default createMetadata({
  title: 'Компоненты|/Обратная связь/Alert',
  id: 'components/Alert',
  parameters: {
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/sLeSNZqQulfU8RixZUGH4Q/UI-KIT-NeoDesign?node-id=5048%3A3946',
    },
  },
});
