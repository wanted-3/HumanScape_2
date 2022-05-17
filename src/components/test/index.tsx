import { createFuzzyMatcher } from 'utils/fuzzy'
import { ChangeEvent, useState } from 'react'
import styles from './test.module.scss'

interface Iprops {
  id: number
  name: string
}

const Test = () => {
  const dummy: Array<Iprops> = [
    { id: 1, name: '안녕하세요' },
    { id: 2, name: '간암입니다' },
    { id: 3, name: '누구세요' },
  ]
  const [test, setTest] = useState('')
  const typing = (e: ChangeEvent<HTMLInputElement>) => {
    setTest(e.currentTarget.value)
  }
  const temp = dummy.filter((i) => {
    return createFuzzyMatcher(test).test(i.name)
  })

  return (
    <div>
      <input onChange={typing} className={styles.test} />
      <ul>
        {temp.map((item) => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  )
}

export default Test
