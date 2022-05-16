import styles from './footer.module.scss'
import { BannerIcon } from 'assets/svgs'

const Footer = () => {
  const bannerOnclick = () => {
    console.log('준비 중 입니다.')
  }
  return (
    <div className={styles.footerWrap}>
      <div className={styles.bannerWrap}>
        <div className={styles.bannerSubWrap}>
          <div className={styles.bannerDetailWrap}>
            <span className={styles.titleContent}>새로운 임상시험이 등록되면</span>
            <span className={styles.subContent}>문자로 알려드려요.</span>
            <button type='button' className={styles.bannerBtn} onClick={bannerOnclick}>
              임상시험 소식받기
            </button>
          </div>
          <BannerIcon className={styles.bannerIcon} />
        </div>
      </div>
      <div className={styles.footerDetailWrap}>
        <div className={styles.footerDetail}>
          <span className={styles.footerDetailTitle}> (주)휴먼스케이프</span>
          <span className={styles.footerLocation}>
            서울특별시 강남구 봉은사로86길 6, 레베쌍트빌딩 601호| 대표자:익명
          </span>
          <span className={styles.footerInc}> © 2021 Humanscape, All rights reserved.</span>
          <img src='./kids.jpg' alt='' className={styles.footerIcon} />
          <span className={styles.footerPrivacy}> 개인정보처리방침</span>
          <span> Living healthier by connecting better</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
