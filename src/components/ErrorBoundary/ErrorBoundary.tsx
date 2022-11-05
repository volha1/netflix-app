import React, { ReactElement } from 'react';
import './style.scss';

type PropsType = { children: ReactElement };
type StateType = { hasError: boolean };

class ErrorBoundary extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  render(): ReactElement {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className="error-message-block content">
          <h1>Something went wrong :(</h1>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
