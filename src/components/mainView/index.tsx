import { SearchIcon } from 'assets/svgs'
import { ChangeEvent, FormEvent, useState } from 'react'

import { useQuery } from 'react-query'
import { getDiseaseAPi } from 'services/disease'

import styles from './mainView.module.scss'
import SearchItem from './SearchItem'

const diseaseFetch = (value: string) => {
  if (value === '') return null

  return getDiseaseAPi({ searchText: value }).then((res) => res.data.response.body.items.item)
}
const MainView = () => {
  const [inputVal, setInputVal] = useState('')
  const [submitValue, setSubmitValue] = useState<string>('')

  const { data: diseaseSearchData, isLoading } = useQuery(
    ['diseaseData', submitValue],
    () => diseaseFetch(submitValue),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  )

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputVal === '') return

    setSubmitValue(inputVal)
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value)
  }

  return (
    <div className={styles.mainWrapper}>
      <h1 className={styles.title}>
        <span>국내 모든 임상시험 검색하고</span>
        <span>온라인으로 참여하기</span>
      </h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input placeholder='질환명을 입력해 주세요.' value={inputVal} onChange={handleInput} />
        <button type='submit'>
          <SearchIcon className={styles.searchIcon} />
        </button>
      </form>

      <ul className={styles.searchItemUl}>
        <li className={styles.recommendSearchLi}>추천 검색어</li>
        {diseaseSearchData?.map((disease) => (
          <SearchItem key={disease.sickCd} diseaseName={disease.sickNm} />
        ))}
      </ul>
    </div>
  )
}

export default MainView
