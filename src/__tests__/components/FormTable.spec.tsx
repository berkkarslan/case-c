import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import FormTable from '../../components/FormTable'
import { act } from 'react-dom/test-utils'
const initData = [
  {
    name: 'Test form',
    description: 'Uye bilgi formu',
    createdAt: '2017-01-08',
    fields: [
      { required: true, name: 'Ad', dataType: 'STRING' },
      { required: true, name: 'Soyad', dataType: 'STRING' },
      { required: false, name: 'Yaş', dataType: 'NUMBER' },
    ],
  },
]

describe('renders FormTable', () => {
  it('renders table', () => {
    render(
      <Router>
        <FormTable data={initData} />
      </Router>,
    )
    expect(screen.getByText('Test form')).toBeInTheDocument()
    expect(screen.getByText('Uye bilgi formu')).toBeInTheDocument()
    expect(screen.getByText('2017-01-08')).toBeInTheDocument()
  })
  it('renders table', () => {
    render(
      <Router>
        <FormTable data={initData} />
      </Router>,
    )
    act(() => {
      screen.getByText('Details').click()
    })
    expect(window.location.pathname).toBe(`/forms/Test%20form`)
  })
  it('searches table', () => {
    render(
      <Router>
        <FormTable data={initData} />
      </Router>,
    )
    act(() => {
      fireEvent.change(screen.getByPlaceholderText('Search by Name'), {
        target: { value: 'arslan' },
      })
    })
    expect(screen.getByText('No data')).toBeInTheDocument()
  })
})
