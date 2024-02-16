import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function about() {
    return (
        <main className={styles.main}>
      <nav className={styles.nav}>
      <Link href="/">
                <Image className={styles.back}
                src="/arrow-left.svg"
                alt=""
                width={34}
                height={34}
                />
        </Link>
        <Image className={styles.logo}
        src="/logo.svg"
        alt=""
        width={236}
        height={336}
        style={{paddingTop:'50px'}}
        />
      </nav>
      <div className={styles.about} id="about" style={{marginTop:'50px'}}>
        <div className={styles.left}>
        <h1 className={styles.h1} style={{ color: '#000' }}>About Us</h1>
        <p className={styles.para} style={{ color: '#000', width: '85%', textAlign: 'center' }}>Aestivus Healthcare  embarked on a journey towards wellness . At the core of Aestivus Healthcare's mission is a commitment to innovation with a strategic focus on maternal healthcare, gastroenterology, nutrition and other specialties, we aspire to contribute significantly to the dynamic landscape of the Indian pharmaceutical market. <br /> </p>
        <p className={styles.para} style={{ color: '#000', width: '85%', textAlign: 'center' }}>Our engagement in offering innovative drug aligns with addressing critical medical needs. Aestivus Healthcare is dedicated to the continuous development and launch of drugs that not only benefit patients but also curve a distinctive niche in the ever-evolving Indian pharma market. <br /> </p>
        <p className={styles.para} style={{ color: '#000', width: '85%', textAlign: 'center' }}>Aestivus Healthcare is a brand where we shape the future of healthcare through pioneering solutions.<br /> </p>
        </div>
        <div className={styles.right}></div>
      </div>
      <div className={styles.about2} id="about">
      <div className={styles.left2}></div>
      <div className={styles.right2}>
      <h1 className={styles.h11} style={{ color: '#000' }}>Our specialisations </h1>
      <p className={styles.para} style={{ color: '#000', width: '85%', textAlign: 'center' }}>We specialize in Hormones, Neutraceuticals, Hematinics, and Gastroenterology, offering advanced options for your well-being. Our commitment extends to Obstetrics and Gynecology, with emphasis on infertility treatments. Collaborating across specialties, we ensure holistic care that meets your unique needs.</p>
      <p className={styles.para} style={{ color: '#000', width: '85%', textAlign: 'center' }}>Pain Management is a focal point in our services, addressing discomfort with effective solutions. Aestivus HealthCare is dedicated to advancing in the field of Nutrition, constantly strengthening our approach to promote overall health. Explore the synergy of science and care on our pharmaceutical website.</p>
      <p className={styles.para} style={{ color: '#000', width: '85%', textAlign: 'center' }}>Aestivus HealthCare where innovation and well-being converge as your partner in a healthier, balanced life.</p>
      </div>
      
      </div>
        </main>
    );
}