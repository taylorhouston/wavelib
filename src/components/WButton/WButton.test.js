import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from './Button'
import '@testing-library/jest-dom/extend-expect'

test('when type = "link", button should be a element link', () => {
  render(
    <Button type='link' link='/banana'>
      Test
    </Button>
  )

  expect(screen.getByRole('link')).toBeInTheDocument()
})

test('on creation, contains proper buttonText', () => {
  const textTest = 'Test'

  render(
    <>
      <Button type='link' link='/banana'>
        {textTest}
      </Button>
      <Button type='submit'>{textTest}</Button>
    </>
  )
  expect(screen.getAllByText(textTest)).toHaveLength(2)
})

test('when type != "link" button should be button element', () => {
  render(<Button type='submit'>Test</Button>)
  expect(screen.getByRole('button')).toBeInTheDocument()
})
