import React from 'react'
import FormTable from '../components/FormTable'
import Card from '../components/Card'
const Home: React.FC = () => {
  const data: MyForm[] = [
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

  return (
    <div>
      <h1>Home</h1>
      <Card>
        <FormTable data={data} />
      </Card>
    </div>
  )
}

export default Home
