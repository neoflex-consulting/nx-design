import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import { Typography } from '../../../Typography';

export const TextExampleHeadingAndParagraph = () => {
  return (
    <div className={cnDocsDecorator('Section')}>
      <Typography
        as="div"
        align="left"
        size="2xl"
        spacing="m"
        transform="uppercase"
        view="primary"
        weight="bold"
        type="h3"
      >
        Заголовок несет суть
      </Typography>
      <Typography as="p" align="left" size="s" view="primary">
        Абзац — это часть текста между отступами с новой строки. Абзац можно назвать микротекстом. В
        общей теме могут выделяться и микротемы. При этом каждый абзац раскрывает свою микротему.
        Что же ещё можно сказать про абзацы? Мы видим, что обычно в абзацах несколько предложений. И
        в таком случае каждый абзац служит для выделения своей микротемы.
      </Typography>
    </div>
  );
};
