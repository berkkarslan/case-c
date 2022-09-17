import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import FormGenerator from '../components/FormGenerator'
import { findData } from '../store'

const Home: React.FC = () => {
  const { formName } = useParams()
  const [data, setData] = useState<MyForm>()

  useEffect(() => {
    if (formName) {
      const data = findData(formName)
      setData(data)
    }
  }, [formName])
  if (!data) {
    return (
      <div>
        <h2>Form bulunamadı..</h2>
      </div>
    )
  }

  return (
    <div>
      <div className='row'>
        <div className='col-12 mb-2'>
          <Card title={data.name}>
            <>
              <p className='card-text'>{data.description}</p>
              <p className='card-text'>
                <small className='text-muted'>{data.createdAt}</small>
              </p>
            </>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Form Fields'>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Required</th>
                  <th>Data Type</th>
                </tr>
              </thead>
              <tbody>
                {data.fields.map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.required ? 'Yes' : 'No'}</td>
                    <td>{item.dataType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
        <div className='col-6'>
          <Card title='Form'>
            <FormGenerator fields={data.fields} />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Home
