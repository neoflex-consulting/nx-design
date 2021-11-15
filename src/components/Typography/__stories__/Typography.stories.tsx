import * as React from 'react';
import { select, text } from '@storybook/addon-knobs';

import { createMetadata } from '../../../utils/storybook';
import {
  Typography,
  textPropAlign,
  textPropCursor,
  // textPropDecoration,
  textPropDisplay,
  // textPropFont,
  // textPropFontStyle,
  // textPropLineHeight,
  textPropSize,
  textPropSizeDefault,
  textPropSpacing,
  textPropTransform,
  // textPropType,
  textPropView,
  textPropViewDefault,
  textPropWeight,
} from '../Typography';

import mdx from './Typography.docs.mdx';

const defaultKnobs = () => ({
  as: select('as', ['p', 'div', 'a', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'], undefined),
  align: select('align', ['', ...textPropAlign], ''),
  cursor: select('cursor', ['', ...textPropCursor], ''),
  // decoration: select('decoration', ['', ...textPropDecoration], ''),
  display: select('display', ['', ...textPropDisplay], ''),
  // font: select('font', textPropFont, 'primary'),
  // lineHeight: select('lineHeight', ['', ...textPropLineHeight], ''),
  size: select('size', textPropSize, textPropSizeDefault),
  spacing: select('spacing', ['', ...textPropSpacing], ''),
  // fontStyle: select('fontStyle', ['', ...textPropFontStyle], ''),
  transform: select('transform', ['', ...textPropTransform], ''),
  // type: select('type', ['', ...textPropType], ''),
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
    // decoration,
    display,
    // font,
    // lineHeight,
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
      // decoration={decoration || undefined}
      display={display || undefined}
      // font={font}
      // lineHeight={lineHeight || undefined}
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
