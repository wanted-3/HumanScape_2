import { SearchIcon } from 'assets/svgs'
import styles from './searchItem.module.scss'

interface SearchItemProps {
  item: number
}
const SearchItem = ({ item }: SearchItemProps) => {
  console.log(item)

  return (
    <li className={styles.searchItemLi}>
      <button type='button'>
        <SearchIcon className={styles.searchIcon} />
        <span>search</span>
      </button>
    </li>
  )
}

export default SearchItem
