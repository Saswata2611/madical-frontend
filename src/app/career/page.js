'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [display, setDisplay] = useState('none');

  const click = () => {
    if(display === 'none') {
      setDisplay('flex');
    } else {
      setDisplay('none');
    }
  }

  const initialFormData = {
    username: '',
    phone_no: '',
    email: '',
    type:'career query',
    needed_skills: '',
    vision: '',
    goals: '',
    future:''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const queryParams = new URLSearchParams(formData);
      const response = await fetch(`https://medical-website-backend.onrender.com/querry?${queryParams}`, {
        method: 'POST',
      });

      if (response.ok) {
        console.log('Entry submitted successfully!');
        setFormData(initialFormData);
      } else {
        console.error('Failed to submit entry:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error submitting entry:', error);
    }
  };

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
      <div className={styles.contact} id="contact">
        <h1 className={styles.h1} style={{ color: '#000' }}>Career Guidence Form</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
  <div className={styles.form_group}>
    <input className={`${styles.input} ${styles.w_50}`} type="text" id="fullName" name="username" value={formData.username} onChange={handleChange} placeholder="Your Full Name" />
    <input className={`${styles.input} ${styles.w_50}`} type="tel" id="phoneNumber" name="phone_no" value={formData.phone_no} onChange={handleChange} placeholder="Your Phone Number" />
  </div>
  <div className={styles.form_group}>
    <input className={styles.input} type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email Address" />
  </div>
  <div className={styles.form_group}>
    <input className={`${styles.input} ${styles.w_50}`} type="text" id="fullName" name="needed_skills" value={formData.needed_skills} onChange={handleChange} placeholder="Skills and Competencies to be developed" />
    <input className={`${styles.input} ${styles.w_50}`} type="text" id="phoneNumber" name="vision" value={formData.vision} onChange={handleChange} placeholder="Your Vision to your future" />
  </div>
  <div className={styles.form_group}>
    <input className={`${styles.input} ${styles.w_50}`} type="text" id="fullName" name="goals" value={formData.goals} onChange={handleChange} placeholder="Your Future Goals" />
    <input className={`${styles.input} ${styles.w_50}`} type="text" id="phoneNumber" name="future" value={formData.future} onChange={handleChange} placeholder="Where Do you see Yourself in next 5 Years" />
  </div>
  <button type="submit" className={styles.button}>Submit</button>
    </form>

      </div>
    </main>
  );
}
