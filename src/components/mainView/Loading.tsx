import styles from './loading.module.scss'

interface ILoading {
  isView: boolean
}

const Loading = ({ isView }: ILoading) => {
  return (
    <div>
      {isView && (
        <div className={styles.spinnerWrapper}>
          <div className={styles.spinner} />
        </div>
      )}
    </div>
  )
}

export default Loading
