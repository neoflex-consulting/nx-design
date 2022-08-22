import {createMetadata} from "../../../utils/storybook";
import mdx from "./TableAg.docs.mdx";
import React, {useState} from "react";
import {TableAg} from "../TableAg";

export function Playground(): JSX.Element {

  const [rowData] = useState([
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxster", price: 72000}
  ]);

  const [columnDefs] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ])

  return (
    <div>
      <TableAg
        rowData={rowData}
        columnDefs={columnDefs}
        height={400}
        width={600}
        fullScreenOn={false}
      />
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
