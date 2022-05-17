import { SearchIcon } from 'assets/svgs'
import useQueryDebounce from 'hooks/useQueryDebounce'
import { ChangeEvent, FormEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'

import { useQuery } from 'react-query'
import { getDiseaseAPi } from 'services/disease'

import styles from './mainView.module.scss'
import SearchItem from './SearchItem'

const diseaseFetch = (value: string) => {
  if (value === '') return undefined

  console.log('api 호출')

  return getDiseaseAPi({ searchText: value }).then((res) => {
    const searchData: {
      sickCd: string
      sickNm: string
    }[] = []
    const itemData = res.data.response.body.items.item

    if (itemData === undefined) return searchData

    return searchData.concat(itemData)
  })
}

const MainView = () => {
  const [inputVal, setInputVal] = useState('')
  const [submitValue, setSubmitValue] = useState<string>('')
  const [index, setIndex] = useState(-1)
  const selectRef = useRef<HTMLUListElement>(null)

  const debounceInput = useQueryDebounce(inputVal, 300)

  const { data: diseaseSearchData, isLoading } = useQuery(
    ['diseaseData', debounceInput],
    () => diseaseFetch(debounceInput),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  )

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setSubmitValue(inputVal)
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value)
  }

  const handleKeyArrow = (e: KeyboardEvent<HTMLFormElement>) => {
    if (diseaseSearchData && e) {
      switch (e.key) {
        case 'ArrowDown':
          if (selectRef.current?.childElementCount === index + 1) {
            setIndex(0)
            break
          }
          setIndex(index + 1)
          break
        case 'ArrowUp':
          if (selectRef.current && index === -1) {
            setIndex(selectRef.current.childElementCount)
            break
          }
          if (index < 0) {
            setIndex(-1)
            break
          }
          setIndex(index - 1)
          break
        case 'Escape':
          setIndex(-1)
          break
      }
    }
  }

  useEffect(() => {
    setIndex(-1)
  }, [diseaseSearchData])

  return (
    <div className={styles.mainWrapper}>
      <h1 className={styles.title}>
        <span>국내 모든 임상시험 검색하고</span>
        <span>온라인으로 참여하기</span>
      </h1>

      <form className={styles.form} onSubmit={handleSubmit} onKeyDown={handleKeyArrow} role='presentation'>
        <input placeholder='질환명을 입력해 주세요.' value={inputVal} onChange={handleInput} />
        <button type='submit'>
          <SearchIcon className={styles.searchIcon} />
        </button>
      </form>

      {inputVal && (
        <ul ref={selectRef} className={styles.searchItemUl}>
          <li className={styles.recommendSearchLi}>추천 검색어</li>
          {isLoading && <li>Loading...</li>}

          {diseaseSearchData === undefined ? (
            <li>검색어 없음</li>
          ) : (
            diseaseSearchData.map((disease, idx) => (
              <SearchItem key={disease.sickCd} diseaseName={disease.sickNm} isFocus={idx === index} />
            ))
          )}
        </ul>
      )}
    </div>
  )
}

export default MainView
