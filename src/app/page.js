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
    type:'public query',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const queryParams = new URLSearchParams(formData);
      const response = await fetch(`http://192.168.29.134:1015/querry?${queryParams}`, {
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
      <div className={styles.dropdown} style={{ display: `${display}` }}>
        <ul>
          <li className={styles.liEle}><a href="#home">Home</a></li>
          <li className={styles.liEle}><Link href="/about">About</Link></li>
          <li className={styles.liEle}><Link href="/career">Career</Link></li>
          <li className={styles.liEle}><a href="/patients">Explore</a></li>
          <li className={styles.liEle}><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <nav className={styles.nav}>
        <Image className={styles.logo}
        src="/logo.png"
        alt=""
        width={236}
        height={236}
        />
        <ul className={styles.nav_link}>
          <li className={styles.li_ele}><a href="#home">Home</a></li>
          <li className={styles.li_ele}><a href="/about">About</a></li>
          <li className={styles.li_ele}><Link href="/career">Career</Link></li>
          <li className={styles.li_ele}><Link href="/patients">Explore</Link></li>
          <li className={styles.li_ele}><a href="#contact">Contact</a></li>
        </ul>
        <Image className={styles.menu}
        src="/burger-menu.svg"
        alt=""
        width={40}
        height={40}
        onClick={click}
        />
      </nav>

      <div className={styles.home} id="home">
        <div className={styles.overlay}>
        <h1 className={`${styles.h1} ${styles.home_h}`}>Welcome to Aestivus Healthcare,</h1>
        <p className={styles.para}>where innovation meets Healthcare, nutrition and well-being. <br /> Our dedicated focus on pioneering medicines through proprietary drug discovery technology reflects our commitment to setting new standards. Explore our realm of original and innovative drugs as we strive to elevate healthcare for a healthier tomorrow.</p>
        <Link href="/patients"><button className={styles.btn}>Explore <Image src="/forward.svg" alt="" width={24} height={24} /></button></Link>
        </div>
      </div>

      <div className={styles.services} id="services">
        <h1 className={styles.h1} style={{ color: '#000', width: '80%' }}>Our Services</h1>
        <div className={styles.container}>
          <Link href="/medicines">
          <div className={styles.div}>
            <div className={styles.img_container}>
            <Image className={styles.tab}
            src="/pic1.png"
            alt=""
            width={360}
            height={300}
            />
            </div>
            <p className={styles.p}>DOCTORS</p>
          </div>
          </Link>
          <Link href='/patients'>
          <div className={styles.div}>
          <div className={styles.img_container}>
            <Image className={styles.tab}
            src="/pateint.png"
            alt=""
            width={360}
            height={300}
            />
            </div>
            <p className={styles.p}>PATIENTS</p>
          </div>
          </Link>
        </div>
      </div>

      <div className={styles.contact} id="contact">
        <h1 className={styles.h1} style={{ color: '#000' }}>Connect with us</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
  <div className={styles.form_group}>
    <input className={`${styles.input} ${styles.w_50}`} type="text" id="fullName" name="username" value={formData.username} onChange={handleChange} placeholder="Your Full Name" />
    <input className={`${styles.input} ${styles.w_50}`} type="tel" id="phoneNumber" name="phone_no" value={formData.phone_no} onChange={handleChange} placeholder="Your Phone Number" />
  </div>
  <div className={styles.form_group}>
    <input className={styles.input} type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email Address" />
  </div>
  <div className={styles.form_group}>
    <textarea className={`${styles.input} ${styles.textarea}`} id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your Message"></textarea>
  </div>
  <button type="submit" className={styles.button}>Submit</button>
    </form>

      </div>

      <div className={styles.footer}>
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.44036860699!2d77.55202507454707!3d13.007605214088924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d83b4dd2565%3A0x5ea6549cc717682!2sRegus%20-%20Bangalore%2C%20Tejas%20Arcade!5e0!3m2!1sen!2sin!4v1708002889911!5m2!1sen!2sin" style={{ width:"350px", height:"350px", border:"0", allowfullscreen:"" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        <ul>
          <li className={styles.liEle} style={{ color: '#ffff' }}><a href="#home">Home</a></li>
          <li className={styles.liEle} style={{ color: '#ffff' }}><a href="/about">About</a></li>
          <li className={styles.liEle} style={{ color: '#ffff' }}><a href="#services">Services</a></li>
          <li className={styles.liEle} style={{ color: '#ffff' }}><a href="#contact">Contact</a></li>
          <Link href="/login"><li style={{ color: '#ffff', marginLeft:'85px' }}><button className={styles.admin_login}>Admin Login</button></li></Link>
          <li className={styles.li} style={{ color: '#ffff'  }}>CIN - U21001AS2023PTC025203<br />GST - 18AAZCA3873F1Z3</li>
        </ul>

        <ul className={styles.ul}>
          <li className={styles.li} style={{ color: '#ffff' }}><b>Corporate office address -</b></li>
          <li className={styles.li} style={{ color: '#ffff' }}>Aestivus Healthcare Pvt. Ltd . 
Tejas Arcade, #527/B, 3rd Floor,
1st Main Road, Dr. Rajkumar Road,
Rajajinagar, Bangalore - 560010, India</li>
          <li className={styles.li} style={{ color: '#ffff' }}><b>Email -</b><Link href='mailto:info@aestivushealthcare.com'>info@aestivushealthcare.com</Link> <br />
<b>Website -</b><Link href='www.aestivushealthcare.com'>www.aestivushealthcare.com</Link> <br />
<b className={styles.b}>Customer Care No. </b><br /> :  +91 70 9905 9994</li>
          
        </ul>

      </div>

    </main>
  );
}
