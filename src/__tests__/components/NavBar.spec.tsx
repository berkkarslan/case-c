import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from '../../components/NavBar'

describe('renders Navbar', () => {
  render(
    <Router>
      <Navbar />
    </Router>,
  )
  it('renders navbar', () => {
    expect(screen.getByText('Evam')).toBeInTheDocument()
  })
})
