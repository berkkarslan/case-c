import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import FormGenerator from '../components/FormGenerator'

const Home: React.FC = () => {
  const { formName } = useParams()
  const data = {
    name: 'Test form',
    description: 'Uye bilgi formu',
    createdAt: '2017-01-08',
    fields: [
      { required: true, name: 'Ad', dataType: 'STRING' },
      { required: true, name: 'Soyad', dataType: 'STRING' },
      { required: false, name: 'Yaş', dataType: 'NUMBER' },
    ],
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
