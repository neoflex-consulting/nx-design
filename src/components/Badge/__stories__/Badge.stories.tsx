import * as React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';

import { createMetadata } from '../../../utils/storybook';
import {
  Badge,
  badgePropForm,
  badgePropFormDefault,
  badgePropSize,
  badgePropSizeDefault,
  badgePropStatus,
  badgePropStatusDefault,
  badgePropView,
  badgePropViewDefault,
} from '../Badge';

import mdx from './Badge.docs.mdx';
import {Icon} from "nx-icon/lib";

const defaultKnobs = () => ({
  label: text('label', 'Statusing along'),
  size: select('size', badgePropSize, badgePropSizeDefault),
  view: select('view', badgePropView, badgePropViewDefault),
  status: select('status', badgePropStatus, badgePropStatusDefault),
  form: select('form', badgePropForm, badgePropFormDefault),
  minified: boolean('minified', false),
  icon: boolean('icon', false),
});

export function Playground() {
  const { label, size, view, status, form, minified, icon } = defaultKnobs();

  return (
    <div>
      <Badge
        label={label}
        size={size}
        view={view}
        status={status}
        form={form}
        minified={minified}
        icon={icon ? <Icon icon={"user"}/> : undefined}
      />
    </div>
  );
}

export default createMetadata({
  title: 'Компоненты|/Отображение данных/Badge',
  id: 'components/Badge',
  parameters: {
    docs: {
      page: mdx,
    }
  },
});
