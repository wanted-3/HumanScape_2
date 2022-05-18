import { useState } from 'react'

import { TitleImage, HamburgerIcon } from 'assets/svgs'
import styles from './navBar.module.scss'

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev)
  }

  return (
    <header className={styles.navBarWrapper}>
      <nav className={styles.navBar}>
        <TitleImage className={styles.titleImage} />
        <button className={styles.toggleButton} onClick={handleToggleMenu} type='button'>
          <HamburgerIcon />
        </button>
      </nav>

      {toggleMenu && (
        <ul className={styles.menuList}>
          <li>소식받기</li>
          <li>제휴/문의</li>
        </ul>
      )}
    </header>
  )
}

export default NavBar
