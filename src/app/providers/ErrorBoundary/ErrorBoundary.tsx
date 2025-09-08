import { Component, Suspense, type ErrorInfo, type ReactNode } from "react";
import { PageError } from "widgets/PageError";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info);
  }

  render() {
    return this.state.hasError ? (
      <Suspense>
        <PageError />
      </Suspense>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
