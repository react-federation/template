import setup from 'utils/test/setup'
import ErrorFallback from '.'

describe('ErrorFallback', () => {
  it('should match snapshot', () => {
    const resetErrorBoundary = jest.fn()
    const { findByText } = setup(ErrorFallback, { error: new Error('test error'), resetErrorBoundary })

    const element = findByText("test error")

    expect(element).toBeInTheDocument()
  })
})
