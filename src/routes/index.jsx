import styles from './Routes.module.scss'

import Home from './home'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.layout}>
        <Home />
      </div>
    </div>
  )
}

export default App
