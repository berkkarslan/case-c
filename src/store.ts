const initData = [
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
  {
    name: 'Doğum Günü',
    description: 'desc',
    createdAt: '2022-09-17',
    fields: [
      {
        name: 'Gün',
        required: true,
        dataType: 'NUMBER',
      },
      {
        name: 'Ay',
        required: true,
        dataType: 'NUMBER',
      },
      {
        name: 'Yıl',
        required: true,
        dataType: 'NUMBER',
      },
    ],
  },
]
const data: MyForm[] = JSON.parse(localStorage.getItem('data') || JSON.stringify(initData))
const getData = (): MyForm[] => data
const pushData = (d: MyForm) => {
  data.push(d)
  setStorage(data)
}
const findData = (name: string) =>
  data.find((d) => d.name.toLocaleUpperCase() === name.toLocaleUpperCase())
const setStorage = (data: MyForm[]) => localStorage.setItem('data', JSON.stringify(data))

export { getData, pushData, findData }
