import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header';

describe('Header test', () => {
  const onAddMovieForm = jest.fn();
  const setParams = jest.fn();
  const removeSearchParams = jest.fn();
  const params = { filter: '', sortOrder: '', sortBy: '', search: '', movie: '' };

  it('CloseBtn snapshot', () => {
    const component = renderer.create(
      <Header
        isVisible
        onAddMovieForm={onAddMovieForm}
        params={params}
        setParams={setParams}
        removeSearchParams={removeSearchParams}
      />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
