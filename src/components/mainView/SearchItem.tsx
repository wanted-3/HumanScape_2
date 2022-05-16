import { SearchIcon } from 'assets/svgs'
import styles from './searchItem.module.scss'

interface SearchItemProps {
  deseaseName: string
}
const SearchItem = ({ deseaseName }: SearchItemProps) => {
  // console.log(item)

  return (
    <li className={styles.searchItemLi}>
      <button type='button'>
        <SearchIcon className={styles.searchIcon} />
        <span>{deseaseName}</span>
      </button>
    </li>
  )
}

export default SearchItem
