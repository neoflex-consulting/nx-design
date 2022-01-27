import * as React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';

import { IconLeaf } from '../../../icons/IconLeaf/IconLeaf';
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
      icon={icon ? IconLeaf : undefined}
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
      url: 'https://www.figma.com/file/v9Jkm2GrymD277dIGpRBSH/Consta-UI-Kit?node-id=58%3A29120',
    },
  },
});
