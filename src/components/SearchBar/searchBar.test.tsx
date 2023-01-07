import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import SearchBar from './SearchBar';

describe('Search bar test', () => {
  const onSearch = jest.fn();
  const removeSearchParams = jest.fn();
  const params = { filter: '', sortOrder: '', sortBy: '', search: '', movie: '' };

  it('Search bar snapshot', () => {
    const component = renderer.create(
      <SearchBar params={params} onSearch={onSearch} removeSearchParams={removeSearchParams} />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Title is present', () => {
    const { getByText } = render(
      <SearchBar params={params} onSearch={onSearch} removeSearchParams={removeSearchParams} />
    );

    expect(getByText('Find your movie')).toBeInTheDocument();
  });

  it('onSearch function works', async () => {
    const textForSearch = 'React';
    render(<SearchBar params={params} onSearch={onSearch} removeSearchParams={removeSearchParams} />);

    await userEvent.type(screen.getByRole('textbox'), textForSearch);
    await userEvent.click(screen.getByRole('button'));

    expect(onSearch).toHaveBeenCalled();
    expect(onSearch).toHaveBeenCalledWith({ search: textForSearch, searchBy: 'title' });
  });

  it('removeSearchParams function works', async () => {
    const textForSearch = ' ';
    render(<SearchBar params={params} onSearch={onSearch} removeSearchParams={removeSearchParams} />);

    await userEvent.type(screen.getByRole('textbox'), textForSearch);
    await userEvent.click(screen.getByRole('button'));

    expect(removeSearchParams).toHaveBeenCalledWith('search');
    expect(removeSearchParams).toHaveBeenCalledWith('searchBy');
  });
});
