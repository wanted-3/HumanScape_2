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
        <div key={`boldtext__${index + item}`}>
          <span>{item}</span>
          {index !== textArray.length - 1 && <b className={styles.bold}>{shouldBeBold}</b>}
        </div>
      ))}
    </>
  )
}

export default BoldText
