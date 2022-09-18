import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import FormDetails from '../../pages/FormDetails'

describe('renders FormDetails', () => {
  it('renders not found when no param', () => {
    render(<FormDetails />, { wrapper: BrowserRouter })
    expect(screen.getByText('Form bulunamadı..')).toBeInTheDocument()
  })
})
