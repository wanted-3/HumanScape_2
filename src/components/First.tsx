import { useAppDispatch, useAppSelector } from 'hooks'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useQuery } from 'react-query'
import { getDeseaseAPi } from 'services/desease'
import { decrement, increment, incrementByAmount } from 'states/counter'

const First = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  const [value, setValue] = useState(0)

  const handlePlusClick = () => {
    dispatch(increment())
  }

  const handleMinusClick = () => {
    dispatch(decrement())
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(incrementByAmount(value))
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.currentTarget.value))
  }

  const { data, isLoading } = useQuery(['deseaseData'], () =>
    getDeseaseAPi({ pageNo: 1, searchText: '병적 골절을' }).then((res) => res.data.response.body.items.item)
  )

  if (isLoading) {
    return <div>Loading</div>
  }

  console.log(data)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <button type='button' onClick={handlePlusClick}>
        +
      </button>
      <button type='button' onClick={handleMinusClick}>
        -
      </button>

      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
      <span>{count}</span>
    </div>
  )
}

export default First
