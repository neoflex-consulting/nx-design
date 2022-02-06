import React from 'react';

import { createMetadata } from '../../../utils/storybook';


import mdx from './DatePickerOld.docs.mdx';

import {getDate} from '../utils';
import {DPicker} from "../DPicker";
// const defaultKnobs = () => ({
//   disabled: boolean('disabled', false),
//   size: select('size', datePickerPropSize, datePickerPropSizeDefault),
//   view: select('view', datePickerPropView, datePickerPropViewDefault),
//   align: select('align', datePickerPropAlign, datePickerPropAlignDefault),
//   label: text('label', 'Это радиокнопка'),
// });

export function Playground() {
  // const { disabled, size, view, label, align } = defaultKnobs();


  const [value, setValue] = React.useState<any>(getDate);

  const handleChange = ( value : any) => {
    setValue(value);
  };

  return (
    <form>
      <DPicker
        value={value}
        onChange={handleChange}>
        <input type="text"
               value={value.format('YYYY-MM-DD HH:mm')}
               readOnly />
      </Trigger>
    </form>
  );
}

export default createMetadata({
  title: 'Компоненты|/Базовые/DatePickerOld',
  id: 'components/DatePickerOld',
  parameters: {
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v9Jkm2GrymD277dIGpRBSH/Consta-UI-Kit?node-id=57%3A1655',
    },
  },
});
