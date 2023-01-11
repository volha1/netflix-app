import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ModalWrapper from './ModalWrapper';

describe('ModalWrapper test', () => {
  it('ModalWrapper snapshot', () => {
    const component = renderer.create(
      <ModalWrapper isVisible>
        <p>test</p>
      </ModalWrapper>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('ModalWrapper children should render', () => {
    render(
      <ModalWrapper isVisible>
        <div data-testid="test-data">test</div>
      </ModalWrapper>
    );

    expect(screen.getByTestId('test-data')).toBeInTheDocument();
  });
});
