import { useState } from 'react'
import { TitleImage, HamburgerIcon } from 'assets/svgs'
import styles from './navBar.module.scss'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <header className={styles.navBarContainer}>
      <nav className={styles.navBar}>
        <TitleImage className={styles.title} />
        <button className={styles.toggleButton} onClick={handleToggleMenu} type='button'>
          <HamburgerIcon />
        </button>
      </nav>
      {isMenuOpen && (
        <ul className={styles.menus}>
          <li className={styles.menu}>소식받기</li>
          <li className={styles.menu}>제휴/문의</li>
        </ul>
      )}
    </header>
  )
}

export default NavBar
