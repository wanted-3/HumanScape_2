import { SearchIcon } from 'assets/svgs'
import { ChangeEvent, FormEvent, useState } from 'react'

// import { useQuery } from 'react-query'
// import { getDeseaseAPi } from 'services/desease'

import styles from './mainView.module.scss'
import SearchItem from './SearchItem'

const MainView = () => {
  const [inputVal, setInputVal] = useState('')
  // const [searchValue, setSearchValue] = useState('')

  // const { data, isLoading } = useQuery(['deseaseData'], () =>
  //   getDeseaseAPi({ searchText: searchValue }).then((res) => res.data.response.body.items.item)
  // )

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // setSearchValue(inputVal)
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value)
  }

  // if (isLoading) {
  //   return <div>Loading....</div>
  // }

  // console.log(data)

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
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <SearchItem key={item} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default MainView
