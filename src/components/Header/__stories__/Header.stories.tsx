import React from 'react';

import { createMetadata } from '../../../utils/storybook';
import { Typography } from '../../Typography/Typography';

import { HeaderFullExample } from './examples/HeaderFullExample/HeaderFullExample';
import { HeaderMinifyLoginExample } from './examples/HeaderMinifyLoginExample/HeaderMinifyLoginExample';
import { HeaderWithLogoExample } from './examples/HeaderWithLogoExample/HeaderWithLogoExample';
import { HeaderWithoutMenuExample } from './examples/HeaderWithoutMenuExample/HeaderWithoutMenuExample';
import { HeaderWithoutSearchExample } from './examples/HeaderWithoutSearchExample/HeaderWithoutSearchExample';
import mdx from './Header.docs.mdx';

export function Playground() {
  return (
    <div>
      <Typography size="3xl">
        Полный
      </Typography>
      <HeaderFullExample />
      <Typography size="3xl">
        Без поиска
      </Typography>
      <HeaderWithoutSearchExample />
      <Typography size="3xl">
        С минилогином
      </Typography>
      <HeaderMinifyLoginExample />
      <Typography size="3xl">
        Без меню
      </Typography>
      <HeaderWithoutMenuExample />
      <Typography size="3xl">
        С уникальным лого
      </Typography>
      <HeaderWithLogoExample />
    </div>
  );
}

export default createMetadata({
  title: 'Компоненты|/Служебные/Header',
  id: 'components/Header',
  parameters: {
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v9Jkm2GrymD277dIGpRBSH/Consta-UI-Kit?node-id=2411%3A37833',
    },
  },
});
