import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from '../../components/Card'

describe('renders Navbar', () => {
  it('renders card', () => {
    render(
      <Card>
        <b>Test</b>
      </Card>,
    )
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
  it('renders card title', () => {
    render(
      <Card title='title'>
        <b>Test</b>
      </Card>,
    )
    expect(screen.getByText('title')).toBeInTheDocument()
  })
})
