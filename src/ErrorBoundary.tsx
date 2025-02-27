import { Component, ReactNode } from 'react';

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="text-center text-red-500 mt-10">Oops! Something went wrong. 😵</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
