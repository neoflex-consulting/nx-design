import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { cnDocsExample } from '../../../../../uiKit/components/DocsExample/DocsExample';
import { Badge } from '../../../Badge';
import {BrowserRouter as Router, Link} from "react-router-dom";

export const BadgeExampleLink = () => (
  <div className={cnDocsDecorator('Section', [cnDocsExample()])}>
    <Router>
      <Badge label={<Link style={{color: "var(--color-typo-primary)", textDecoration: "none"}} to={"/?path=/docs/components-badge--playground"}>Я ссылка на документацию по Badge</Link>}/>
    </Router>
  </div>
);
