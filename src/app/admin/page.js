'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Replace the current state with a new one, effectively removing /admin from history
    window.history.replaceState(null, null, '/');
    
    // Add event listener to prevent navigation using the browser back button
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      return (event.returnValue = 'Are you sure you want to leave?');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  const goToAnotherPage = () => {
    router.replace('/');
  };
  return (
    <main className={styles.main}>
        <nav className={styles.nav}>
            <ul style={{display:'flex'}}>
                <Link href="/admin"><li className={styles.li} style={{textDecoration:'underline'}}>Product</li></Link>
                <Link href="/query"><li className={styles.li}>Queries</li></Link>
                <Link href="" onClick={goToAnotherPage}><li className={`${styles.li} ${styles.logout}`}>Log out</li></Link>
            </ul>
            <Image className={styles.logo}
        src="/logo.svg"
        alt=""
        width={236}
        height={336}
        style={{paddingTop:'50px'}}
        />
        </nav>
        <div className={styles.right}>
      <div className={styles.container}>
        <Link href="/upload">
        <div className={`${styles.batch} ${styles.bg_y}`}>
            <Image
            src="/upload.svg"
            alt=""
            width={64}
            height={64}
            />
            <h1 className={styles.heading}>Add Product</h1>
        </div>
        </Link>
        <Link href="/allprod">
        <div className={`${styles.batch} ${styles.bg_y}`}>
            <Image
            src="/eye.svg"
            alt=""
            width={64}
            height={64}
            />
            <h1 className={styles.heading}>See all Product</h1>
        </div>
        </Link>
        </div>
      </div>
    </main>
    );
}