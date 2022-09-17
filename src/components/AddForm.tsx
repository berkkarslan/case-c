import React, { useState } from 'react'
import Card from './Card'
import Select from 'react-select'
const AddModal: React.FC = () => {
  const requiredOptions = [
    { value: 'true', label: 'True' },
    { value: 'false', label: 'False' },
  ]
  const dataTypeOptions = [
    { value: 'string', label: 'STRING' },
    { value: 'number', label: 'NUMBER' },
  ]
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [fields, setFields] = useState<Field[]>([{ name: '', required: false, dataType: '' }])

  const addNewRow = () => {
    setFields([...fields, { name: '', required: false, dataType: '' }])
  }

  const deleteRow = (index: number) => {
    const values = [...fields]
    values.splice(index, 1)
    if (values.length > 0) setFields(values)
  }

  const onSubmit = () => {
    const data: MyForm = {
      name,
      description,
      createdAt: new Date().toISOString().split('T')[0],
      fields,
    }
    // push(data)
  }
  return (
    <div className='row'>
      <Card title='Add Form'>
        <div className='row'>
          <div className='col-6'>
            <div className='form-group'>
              <label htmlFor='projectinput1'>Name</label>
              <input
                type='text'
                className='form-control'
                placeholder='Name'
                name='name'
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className='col-6'>
            <div className='form-group'>
              <label htmlFor='projectinput2'>Description</label>
              <input
                type='text'
                className='form-control'
                placeholder='Description'
                name='description'
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className='col-12 mt-3'>
            <div className='form-group'>
              <div className='d-flex justify-content-between'>
                <label>Fields:</label>
                <button onClick={() => addNewRow()} className='btn btn-primary'>
                  Add Field
                </button>
              </div>
              <div className='border p-3 my-2 ms-3'>
                {fields.map((field, index) => (
                  <div key={index} className='d-flex'>
                    <div className='form-group  flex-fill pe-2'>
                      <label htmlFor='projectinput3'>Name</label>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Name'
                        value={field.name}
                        onChange={(e) => {
                          const values = [...fields]
                          values[index].name = e.target.value
                          setFields(values)
                        }}
                      />
                    </div>

                    <div className='form-group flex-fill pe-2'>
                      <label htmlFor='projectinput3'>Required</label>
                      <Select
                        options={requiredOptions}
                        onChange={(val) => {
                          const values = [...fields]
                          values[index].required = val?.value === 'true' ? true : false
                          setFields(values)
                        }}
                      />
                    </div>

                    <div className='form-group flex-fill pe-2'>
                      <label htmlFor='projectinput3'>Type</label>
                      <Select
                        options={dataTypeOptions}
                        onChange={(val) => {
                          const values = [...fields]
                          values[index].dataType = val?.label ? val.label : ''
                          setFields(values)
                        }}
                      />
                    </div>

                    <button
                      onClick={() => deleteRow(index)}
                      className='btn btn-danger btn-sm h-50 align-self-end'
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <button onClick={() => onSubmit()} className='btn btn-primary'>
              Submit
            </button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default AddModal
