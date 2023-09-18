import { render, screen, act } from '@testing-library/react'
import Counter from './Counter'
import userEvent from '@testing-library/user-event'

test('It should have the correct initia value when set to 0', () => {
  render(<Counter initialValue={0} />)

  const value = screen.getByTestId('value')
  expect(value).toHaveTextContent('0')
})

test('It should have the correct initia value when set to 10', () => {
  render(<Counter initialValue={10} />)

  const value = screen.getByTestId('value')
  expect(value).toHaveTextContent('10')
})

test('It should increase the value correctly when add is clicked one', () => {
  render(<Counter initialValue={1} />)

  const addButton = screen.getByTestId('add-button')
  act(() => {
    userEvent.click(addButton)
  })

  const value = screen.queryByText('2')
  expect(value).toBeVisible()
})

test('It should increase the value correctly when add is clicked twice', () => {
  render(<Counter initialValue={1} />)

  const addButton = screen.getByTestId('add-button')
  act(() => {
    userEvent.click(addButton)
    userEvent.click(addButton)
  })

  const value = screen.queryByText('3')
  expect(value).toBeVisible()
})

test('It should decrease the value correctly when subtract is clicked once', () => {
  render(<Counter initialValue={100} />)

  const subtractButton = screen.getByTestId('subtract-button')
  act(() => {
    userEvent.click(subtractButton)
  })

  const value = screen.queryByText('99')
  expect(value).toBeVisible()
})

test('It should decrease the value correctly when subtract is clicked twice', () => {
  render(<Counter initialValue={100} />)

  const subtractButton = screen.getByTestId('subtract-button')
  act(() => {
    userEvent.click(subtractButton)
    userEvent.click(subtractButton)
  })

  const value = screen.queryByText('98')
  expect(value).toBeVisible()
})
