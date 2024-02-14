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
        <Image className={styles.logo} style={{ transform: 'translateY(-5px)' }}
        src="/logo.png"
        alt=""
        width={236}
        height={236}
        />
      </nav>
      <div className={styles.about} id="about" style={{marginTop:'50px'}}>
        <div className={styles.left}>
        <h1 className={styles.h1} style={{ color: '#000' }}>About Us</h1>
        <p className={styles.para} style={{ color: '#000', width: '85%', textAlign: 'center' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div className={styles.right}></div>
      </div>
      <div className={styles.about2} id="about">
      <div className={styles.left2}></div>
      <div className={styles.right2}>
      <h1 className={styles.h1} style={{ color: '#000' }}>Who Are We</h1>
      <p className={styles.para} style={{ color: '#000', width: '85%', textAlign: 'center' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      </div>
      
      </div>
        </main>
    );
}