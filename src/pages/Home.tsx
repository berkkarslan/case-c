import React from 'react'
import FormTable from '../components/FormTable'
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
      <FormTable data={data} />
    </div>
  )
}

export default Home
