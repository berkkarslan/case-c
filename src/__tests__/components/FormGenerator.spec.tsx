import React from 'react'
import { render, screen } from '@testing-library/react'
import FormGenerator from '../../components/FormGenerator'
const fields = [
  {
    name: 'name',
    dataType: 'STRING',
    required: true,
  },
  {
    name: 'age',
    dataType: 'NUMBER',
    required: false,
  },
]
describe('renders FormGenerator', () => {
  it('renders form', () => {
    render(<FormGenerator fields={[]} />)
    expect(screen.getByText('Submit')).toBeInTheDocument()
  })
  it('renders form', () => {
    render(<FormGenerator fields={fields} />)
    expect(screen.getByText('name')).toBeInTheDocument()
    expect(screen.getByText('age')).toBeInTheDocument()
  })
  it('renders sub', () => {
    render(<FormGenerator fields={fields} />)
    screen.getByText('Submit').click()
  })
})
