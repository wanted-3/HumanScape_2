import { cx } from 'styles'

import { SearchIcon } from 'assets/svgs'
import styles from './searchItem.module.scss'

interface SearchItemProps {
  diseaseName: string
  isFocus: boolean
}

const SearchItem = ({ diseaseName, isFocus }: SearchItemProps) => {
  return (
    <li className={cx(styles.searchItem, { [styles.focusedItem]: isFocus })}>
      <button type='button'>
        <SearchIcon className={styles.searchIcon} />
        <span>{diseaseName}</span>
      </button>
    </li>
  )
}

export default SearchItem
