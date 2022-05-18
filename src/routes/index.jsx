import Home from 'routes/home/index'
import styles from './Routes.module.scss'

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.layout}>
        <Home />
      </div>
    </div>
  )
}

export default App
