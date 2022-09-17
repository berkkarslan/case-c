import React from 'react'
import FormTable from '../components/FormTable'
import Card from '../components/Card'
const Home: React.FC = () => {
  const data: MyForm[] = []
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
