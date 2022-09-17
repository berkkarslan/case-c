import React, { useEffect, useState } from 'react'
import FormTable from '../components/FormTable'
import Card from '../components/Card'
import { Modal } from 'react-bootstrap'
import AddModal from '../components/AddForm'
import { pushData, getData } from '../store'

const Home: React.FC = () => {
  const [show, setShow] = useState(false)
  const [data, setData] = useState<MyForm[]>([])

  const onEnd = (data: MyForm) => {
    pushData(data)
    setShow(false)
  }

  useEffect(() => {
    const data: MyForm[] = getData()
    setData(data)
  }, [])

  return (
    <div>
      <div className='d-flex justify-content-between mb-3'>
        <h1>Home</h1>
        <button onClick={() => setShow(true)} className='btn btn-primary'>
          Create New Form
        </button>
      </div>
      <Card>
        <FormTable data={data} />
      </Card>
      <Modal show={show} size='xl' onHide={() => setShow(false)}>
        <AddModal onEnd={onEnd} />
      </Modal>
    </div>
  )
}

export default Home
