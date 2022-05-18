import NavBar from 'components/navv'
import MainView from 'components/mainView'
import Footer from 'components/footer'

import styles from './home.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <NavBar />
      <MainView />
      <Footer />
    </div>
  )
}

export default Home
