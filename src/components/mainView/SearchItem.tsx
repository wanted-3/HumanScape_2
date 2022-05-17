import { SearchIcon } from 'assets/svgs'
import { cx } from 'styles'
import styles from './searchItem.module.scss'

interface SearchItemProps {
  diseaseName: string
  isFocus: boolean
}
const SearchItem = ({ diseaseName, isFocus }: SearchItemProps) => {
  return (
    <li className={cx(styles.searchItemLi, { [styles.focusedLi]: isFocus })}>
      <button type='button'>
        <SearchIcon className={styles.searchIcon} />
        <span>{diseaseName}</span>
      </button>
    </li>
  )
}

export default SearchItem
