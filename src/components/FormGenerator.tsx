import React from 'react'
type Props = {
  fields: Field[]
}
const FormGenerator: React.FC<Props> = ({ fields }) => {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        {fields.map((field) => (
          <div key={field.name} className='form-group'>
            <label htmlFor={field.name}>{field.name}</label>
            <input
              type={field.dataType === 'NUMBER' ? 'number' : 'text'}
              className='form-control'
              id={field.name}
            />
          </div>
        ))}
        <button type='submit' className='btn btn-primary mt-2'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default FormGenerator
