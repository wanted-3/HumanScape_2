import { cx } from 'styles'

import BoldText from './BoldText'
import { SearchIcon } from 'assets/svgs'
import styles from './searchItem.module.scss'
import { useAppSelector } from 'hooks'

interface SearchItemProps {
  diseaseName: string
  isFocus: boolean
}

const SearchItem = ({ diseaseName, isFocus }: SearchItemProps) => {
  const searchResult = useAppSelector((state) => state.search.value)

  return (
    <li className={cx(styles.searchItem, { [styles.focusedItem]: isFocus })}>
      <button type='button'>
        <SearchIcon className={styles.searchIcon} />
        <BoldText text={diseaseName} shouldBeBold={searchResult} />
      </button>
    </li>
  )
}

export default SearchItem
