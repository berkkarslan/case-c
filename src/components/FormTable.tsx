import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  data: MyForm[]
}
const FormTable: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const filteredData = data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))

  const row = (item: MyForm) => (
    <tr key={item.name}>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>{item.createdAt}</td>
      <td>
        <button onClick={() => navigate(`forms/${item.name}`)} className='btn btn-primary'>
          Details
        </button>
      </td>
    </tr>
  )

  return (
    <>
      <div className='d-flex justify-content-end'>
        <div>
          <input
            type='text'
            id='search'
            className='form-control'
            placeholder='Search by Name'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <table className='table table-striped w-100 mt-3'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Created At</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item) => row(item))
          ) : (
            <tr>
              <td colSpan={4}>No data</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default FormTable
