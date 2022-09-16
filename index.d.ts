interface Field {
  required: boolean
  name: string
  dataType: string
}

interface MyForm {
  name: string
  description: string
  createdAt: string
  fields: Field[]
}
