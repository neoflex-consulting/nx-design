import './Steps.stories.css';

import React from 'react';
import { select } from '@storybook/addon-knobs';

import { SimpleItem, simpleItems } from '../__mocks__/mock.data';
import { IconArrowBackward } from '../../../icons/IconArrowBackward/IconArrowBackward';
import { IconArrowRight } from '../../../icons/IconArrowRight/IconArrowRight';
import { cn } from '../../../utils/bem';
import { createMetadata } from '../../../utils/storybook';
import { Button } from '../../Button/Button';
import { Typography } from '../../Typography/Typography';
import { Steps, stepsDefaultSize, stepsSizes } from '../Steps';

import mdx from './Steps.docs.mdx';

const cnStepsStories = cn('StepsStories');

const defaultKnobs = () => ({
  size: select('size', stepsSizes, stepsDefaultSize),
});

const getStepContent = (stepNumber: number) => {
  switch (stepNumber) {
    case 0:
      return <Typography view="primary">Содержимое первого шага</Typography>;
    case 1:
      return <Typography view="primary">Содержимое второго шага</Typography>;
    case 2:
      return <Typography view="brand">Содержимое шага № 3</Typography>;
    default:
      return `unknown ${stepNumber} step`;
  }
};

export function Playground() {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [skippedSteps, setSkippedSteps] = React.useState<number[]>([]);
  const [completedSteps, setCompletedSteps] = React.useState<number[]>([]);

  const { size } = defaultKnobs();

  const getStepIndex = (step: SimpleItem | null): number =>
    simpleItems.findIndex((item) => step && item === step);
  const handleNext = () => {
    setCompletedSteps([...completedSteps, activeStep]);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handlePrev = () => {
    setSkippedSteps([...skippedSteps, activeStep]);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleChange = ({ value }: { value: SimpleItem | null }) => {
    setSkippedSteps([...skippedSteps, activeStep]);
    setActiveStep(getStepIndex(value));
  };

  return (
    <div className={cnStepsStories()}>
      <Steps
        items={simpleItems}
        getLabel={(item) => item}
        value={simpleItems[activeStep]}
        onChange={handleChange}
        getCompleted={(item) => completedSteps.includes(getStepIndex(item))}
        getSkipped={(item) => skippedSteps.includes(getStepIndex(item))}
        size={size}
      />
      <div className={cnStepsStories('Content')}>{getStepContent(activeStep)}</div>
      <div className={cnStepsStories('Actions')}>
        <Button
          onClick={handlePrev}
          label="Назад"
          iconLeft={IconArrowBackward}
          view="ghost"
          disabled={activeStep === 0}
        />
        <Button
          onClick={handleNext}
          label="Дальше"
          iconRight={IconArrowRight}
          disabled={activeStep === simpleItems.length - 1}
        />
      </div>
    </div>
  );
}

export default createMetadata({
  title: 'Компоненты|/Навигация/Steps',
  id: 'components/Steps',
  parameters: {
    docs: {
      page: mdx,
    }
  },
});
