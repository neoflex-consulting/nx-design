import {createMetadata} from "../../../utils/storybook";
import mdx from "./TableAg.docs.mdx";
import React from "react";
import {TableAg} from "../TableAg";

export function Playground(): JSX.Element {

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
