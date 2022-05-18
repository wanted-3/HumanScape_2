import { BannerIcon } from 'assets/svgs'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.bannerWrap}>
        <div className={styles.bannerDetailWrap}>
          <div className={styles.textDetail}>
            <span className={styles.titleContent}>새로운 임상시험이 등록되면</span>
            <span className={styles.subContent}>문자로 알려드려요.</span>
          </div>
          <button type='button' className={styles.bannerBtn}>
            임상시험 소식받기
          </button>
        </div>
        <div className={styles.bannerIcon}>
          <BannerIcon className={styles.bannerIcon} />
        </div>
      </div>

      <div className={styles.footerDetail}>
        <div className={styles.infos}>
          <span className={styles.footerDetailTitle}> (주)휴먼스케이프</span>
          <span className={styles.footerLocation}>
            서울특별시 강남구 봉은사로86길 6, 레베쌍트빌딩 601호| 대표자:장민후
          </span>
          <span className={styles.footerInc}> © 2021 Humanscape, All rights reserved.</span>
          <img src='./kids.jpg' alt='' className={styles.footerIcon} />
        </div>
        <div className={styles.privacy}>
          <span className={styles.footerPrivacy}> 개인정보처리방침</span>
          <span> Living healthier by connecting better</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
