import * as React from 'react';
import { select, text } from '@storybook/addon-knobs';

import { createMetadata } from '../../../utils/storybook';
import {
  Typography,
  textPropAlign,
  textPropCursor,
  textPropDisplay,
  textPropSize,
  textPropSizeDefault,
  textPropSpacing,
  textPropTransform,
  textPropView,
  textPropViewDefault,
  textPropWeight,
} from '../Typography';

import mdx from './Typography.docs.mdx';

const defaultKnobs = () => ({
  as: select('as', ['p', 'div', 'a', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'], undefined),
  align: select('align', ['', ...textPropAlign], ''),
  cursor: select('cursor', ['', ...textPropCursor], ''),
  display: select('display', ['', ...textPropDisplay], ''),
  size: select('size', textPropSize, textPropSizeDefault),
  spacing: select('spacing', ['', ...textPropSpacing], ''),
  transform: select('transform', ['', ...textPropTransform], ''),
  view: select('View', textPropView, textPropViewDefault),
  weight: select('weight', ['', ...textPropWeight], ''),
  text: text(
    'Content',
    'Удобство работы с системой на разных устройствах напрямую связано с выбором шрифта. Мы применяем шрифт Roboto из общедоступной библиотеки Google Fonts. Это позволяет адаптировать шрифт и отслеживать его поведение на устройствах. Применение начертаний шрифта зависит от его стилевой направленности. Мы взяли такие начертания как: Light, Regular, Medium, Bold. Послдений применяется очень редко и в тех случаях когда надо подчеркнуть основную мысль или ключевую фразу.',
  ),
});

export function Playground() {
  const {
    as,
    align,
    cursor,
    display,
    // font,
    // heightLine,
    size,
    spacing,
    // fontStyle,
    transform,
    // type,
    view,
    weight,
    text,
  } = defaultKnobs();

  return (
    <Typography
      as={as}
      align={align || undefined}
      cursor={cursor || undefined}
      display={display || undefined}
      // font={font}
      // heightLine={heightLine || undefined}
      size={size}
      spacing={spacing || undefined}
      // fontStyle={fontStyle || undefined}
      transform={transform || undefined}
      // type={type || undefined}
      view={view || undefined}
      weight={weight || undefined}
    >
      {text}
    </Typography>
  );
}

export default createMetadata({
  title: 'Компоненты|/Базовые/Typography',
  id: 'components/Typography',
  parameters: {
    docs: {
      page: mdx,
    },
  },
});
