import { Routes, Route } from 'react-router-dom'
import styles from './Routes.module.scss'

import Home from './home'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
