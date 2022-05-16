import { SearchIcon } from 'assets/svgs'
import styles from './searchItem.module.scss'

interface SearchItemProps {
  diseaseName: string
}
const SearchItem = ({ diseaseName }: SearchItemProps) => {
  // console.log(item)

  return (
    <li className={styles.searchItemLi}>
      <button type='button'>
        <SearchIcon className={styles.searchIcon} />
        <span>{diseaseName}</span>
      </button>
    </li>
  )
}

export default SearchItem
