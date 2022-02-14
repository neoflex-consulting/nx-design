import {createMetadata} from "../../../utils/storybook";
import mdx from "../../Table/__stories__/TableAg.docs.mdx";
import React from "react";
import {TableAg} from "../TableAg";

// const defaultKnobs = () => ({
//   hasOverlay: boolean('hasOverlay', true),
//   width: select('width', ['auto'], 'auto'),
//   position: select('position', ['center', 'top'], 'center'),
// });

export function Playground(): JSX.Element {
  const [] = React.useState(false);
  // const { hasOverlay, width, position } = defaultKnobs();

  return (
    <div>
      <TableAg/>
    </div>
  )
}

export default createMetadata({
  title: 'Компоненты|/Отображение данных/TableAg',
  id: 'components/TableAg',
  parameters: {
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v9Jkm2GrymD277dIGpRBSH/Consta-UI-Kit?node-id=1871%3A36244',
    },
  },
});
