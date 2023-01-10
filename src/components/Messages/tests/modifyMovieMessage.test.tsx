import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import ModifyMovieMessage from '../ModifyMovieMessage';

describe('ModifyMovieMessage test', () => {
  const onClose = jest.fn();

  it('ModifyMovieMessage snapshot', () => {
    const component = renderer.create(<ModifyMovieMessage onClose={onClose} text="" />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Right text should be dispayed in message window', () => {
    const text = 'edited in';
    const { getByText } = render(<ModifyMovieMessage onClose={onClose} text={text} />);

    expect(getByText(`The movie has been ${text} database successfully`)).toBeInTheDocument();
  });
});
