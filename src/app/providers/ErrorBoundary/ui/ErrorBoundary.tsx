/* eslint-disable */
import { PageError } from '@/widgets/PageError'
import React, { ErrorInfo, ReactNode, Suspense } from 'react'

interface StateType {
  hasError: boolean
}

interface PropsType {
  children: ReactNode
}

class ErrorBoundary extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): { hasError: boolean } {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Suspense fallback=""><PageError /></Suspense>
    }

    return this.props.children
  }
}

export default ErrorBoundary
