import React from 'react';
import renderer from 'react-test-renderer';

import NotFound from '../NotFound';

describe('NotFound test', () => {
  it('NotFound snapshot', () => {
    const component = renderer.create(<NotFound />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
