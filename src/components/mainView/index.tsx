import { ChangeEvent, FormEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'

import useQueryDebounce from 'hooks/useQueryDebounce'
import { getDiseaseAPi } from 'services/disease'

import { SearchIcon } from 'assets/svgs'
import styles from './mainView.module.scss'
import SearchItem from './SearchItem'
import Loading from './Loading'
import NoSearch from './NoSearch'

const diseaseFetch = (searchValue: string) => {
  if (searchValue === '') return []

  console.log('api 호출')

  return getDiseaseAPi({ searchText: searchValue }).then((res) => {
    const searchResult: {
      sickCd: string
      sickNm: string
    }[] = []
    const itemResult = res.data.response.body.items.item

    if (itemResult === undefined) return searchResult

    return searchResult.concat(itemResult)
  })
}

const MainView = () => {
  const [inputValue, setInputValue] = useState('')
  const [focusedItemIndex, setFocusItemIndex] = useState(-1)
  const selectedUlRef = useRef<HTMLUListElement>(null)

  const debounceInputValue = useQueryDebounce(inputValue, 1000)

  const { data: diseaseSearchResult, isLoading } = useQuery(
    ['diseaseData', debounceInputValue],
    () => diseaseFetch(debounceInputValue),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  )

  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  const handleListArrowKey = (e: KeyboardEvent<HTMLFormElement>) => {
    if (diseaseSearchResult && e) {
      switch (e.key) {
        case 'ArrowDown':
          if (selectedUlRef.current?.childElementCount === focusedItemIndex + 1) {
            setFocusItemIndex(0)
            break
          }
          setFocusItemIndex(focusedItemIndex + 1)
          break
        case 'ArrowUp':
          if (selectedUlRef.current && focusedItemIndex === -1) {
            setFocusItemIndex(selectedUlRef.current.childElementCount)
            break
          }
          if (focusedItemIndex < 0) {
            setFocusItemIndex(-1)
            break
          }
          setFocusItemIndex(focusedItemIndex - 1)
          break
        case 'Escape':
          setFocusItemIndex(-1)
          break
      }
    }
  }

  useEffect(() => {
    setFocusItemIndex(-1)
  }, [diseaseSearchResult])

  console.log(diseaseSearchResult)

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        <span>국내 모든 임상시험 검색하고</span>
        <span>온라인으로 참여하기</span>
      </h1>

      <form className={styles.form} onKeyDown={handleListArrowKey} role='presentation' onSubmit={handleForm}>
        <input placeholder='질환명을 입력해 주세요.' value={inputValue} onChange={handleInput} />
        <button type='submit'>
          <SearchIcon className={styles.searchIcon} />
        </button>
      </form>

      {inputValue && (
        <ul ref={selectedUlRef} className={styles.searchItemUl}>
          <li className={styles.recommendSearchLi}>추천 검색어</li>
          <Loading isView={isLoading} />
          <NoSearch isView={diseaseSearchResult} />
          {diseaseSearchResult?.map((disease, idx) => (
            <SearchItem
              key={disease.sickCd}
              diseaseName={disease.sickNm}
              isFocus={idx === focusedItemIndex}
              inputValue={debounceInputValue}
            />
          ))}
        </ul>
      )}
    </main>
  )
}

export default MainView
