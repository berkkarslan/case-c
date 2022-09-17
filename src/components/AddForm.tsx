import React, { FormEvent, useState } from 'react'
import Card from './Card'
import Select from 'react-select'
type Props = {
  onEnd: (data: MyForm) => void
}
const AddModal: React.FC<Props> = ({ onEnd }) => {
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

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const data: MyForm = {
      name,
      description,
      createdAt: new Date().toISOString().split('T')[0],
      fields,
    }
    onEnd(data)
  }
  return (
    <div className='row'>
      <Card title='Add Form'>
        <form onSubmit={onSubmit}>
          <div className='row'>
            <div className='col-6'>
              <div className='form-group'>
                <label htmlFor='projectinput1'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Name'
                  required
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
                  required
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
                          required
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
                          value={field.required ? requiredOptions[0] : requiredOptions[1]}
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
                          value={
                            field.dataType === 'string' ? dataTypeOptions[1] : dataTypeOptions[0]
                          }
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
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default AddModal
