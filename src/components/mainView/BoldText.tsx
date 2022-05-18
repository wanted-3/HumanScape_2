import styles from './boldText.module.scss'

interface IBold {
  text: string
  shouldBeBold: string
}

const BoldText = ({ text, shouldBeBold }: IBold) => {
  const textArray = text.split(shouldBeBold)

  return (
    <>
      {textArray.map((item, index) => (
        <span key={`boldtext__${index + item}`}>
          {item}
          {index !== textArray.length - 1 && <b className={styles.bold}>{shouldBeBold}</b>}
        </span>
      ))}
    </>
  )
}

export default BoldText
