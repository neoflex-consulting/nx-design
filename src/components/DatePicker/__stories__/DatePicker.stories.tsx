import React from 'react';

import { createMetadata } from '../../../utils/storybook';


import mdx from './DatePicker.docs.mdx';

import {getDate} from '../utils';
import {DatePicker} from "../DatePicker";
// const defaultKnobs = () => ({
//   disabled: boolean('disabled', false),
//   size: select('size', datePickerPropSize, datePickerPropSizeDefault),
//   view: select('view', datePickerPropView, datePickerPropViewDefault),
//   align: select('align', datePickerPropAlign, datePickerPropAlignDefault),
//   label: text('label', 'Это радиокнопка'),
// });

export function Playground() {
  // const { disabled, size, view, label, align } = defaultKnobs();


  const [moment, setMoment] = React.useState<any>(getDate);

  const handleChange = ( moment : any) => {
    setMoment(moment);
  };

  return (
    <form>
      <DatePicker
        value={moment}
        onChange={handleChange}>
      </DatePicker>
    </form>
  );
}

export default createMetadata({
  title: 'Компоненты|/Базовые/DatePicker',
  id: 'components/DatePicker',
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
