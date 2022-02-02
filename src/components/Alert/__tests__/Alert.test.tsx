import React from 'react';
import { render, screen } from '@testing-library/react';

import { IconLeaf } from '../../../icons/IconLeaf/IconLeaf';
import { cnAlert, Alert, alertPropView } from '../Alert';

type AlertProps = React.ComponentProps<typeof Alert>;

const testId = cnAlert();

const renderComponent = (props: AlertProps = {}) => {
  return render(<Alert data-testid={testId} {...props} />);
};

function getRender() {
  return screen.getByTestId(testId);
}

function getIcon() {
  return getRender().querySelector(`.${cnAlert('Icon')}`);
}

describe('Компонент Alert', () => {
  it('должен рендериться без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
  describe('проверка props', () => {
    describe('проверка label', () => {
      it(`label отображается`, () => {
        const label = 'Label';

        renderComponent({ label });

        expect(getRender().textContent).toEqual(label);
      });
    });
    describe('проверка Title', () => {
      it(`Title отображается`, () => {
        const title = 'Title';

        renderComponent({ title });

        expect(getRender().textContent).toEqual(title);
      });
    });
    describe('проверка icon', () => {
      it(`иконка отображается`, () => {
        renderComponent({ icon: IconLeaf });

        expect(getIcon()).toHaveClass('IconLeaf');
      });
      it(`присвоился модификатор withIcon `, () => {
        renderComponent({ icon: IconLeaf });

        expect(getRender()).toHaveClass(cnAlert({ withIcon: true }));
      });
    });
    describe('проверка view', () => {
      alertPropView.forEach((view) => {
        it(`присваивает класс для view=${view}`, () => {
          renderComponent({ view });

          expect(getRender()).toHaveClass(cnAlert({ view }));
        });
      });
    });
  });
});
