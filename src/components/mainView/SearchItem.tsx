import { cx } from 'styles'

import BoldText from './BoldText'
import { SearchIcon } from 'assets/svgs'
import styles from './searchItem.module.scss'

interface SearchItemProps {
  diseaseName: string
  isFocus: boolean
  inputValue: string
}

const SearchItem = ({ diseaseName, isFocus, inputValue }: SearchItemProps) => {
  return (
    <li className={cx(styles.searchItem, { [styles.focusedItem]: isFocus })}>
      <button type='button'>
        <SearchIcon className={styles.searchIcon} />
        <BoldText text={diseaseName} shouldBeBold={inputValue} />
      </button>
    </li>
  )
}

export default SearchItem
