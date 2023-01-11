import React from 'react';
import renderer from 'react-test-renderer';

import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary test', () => {
  it('ErrorBoundary snapshot', () => {
    const component = renderer.create(
      <ErrorBoundary>
        <div>test</div>
      </ErrorBoundary>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
