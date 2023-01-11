import React from 'react';
import renderer from 'react-test-renderer';

import Filter from './Filter';

describe('Filter test', () => {
  const setParams = jest.fn();
  const removeSearchParams = jest.fn();
  const params = { filter: '', sortOrder: '', sortBy: '', search: '', movie: '' };

  it('Filter snapshot', () => {
    const component = renderer.create(
      <Filter setParams={setParams} removeSearchParams={removeSearchParams} params={params} />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
