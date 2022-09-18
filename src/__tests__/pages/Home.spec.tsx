import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
import Home from '../../pages/Home'

describe('renders Home', () => {
  it('renders home', () => {
    render(
      <Router>
        <Home />
      </Router>,
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.queryByText('Add Form')).not.toBeInTheDocument()
    act(() => {
      screen.getByText('Create New Form').click()
    })
    expect(screen.getByText('Add Form')).toBeInTheDocument()
  })
})
