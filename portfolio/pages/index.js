import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from 'next/image';

export default function Home() {

  const myDetails = {
    name: 'Sachin Bahukhandi',
    designation: 'Web Developer',
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>{myDetails.name}'s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="shortcut icon"
          href="./assets/images/logo.ico"
          type="image/x-icon"
        /> */}

        {/* <link rel="stylesheet" href="./assets/css/style.css" /> */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        {/* Sidebar */}
        <aside className="sidebar" data-sidebar>
          <div className="sidebar-info">
            <figure className="avatar-box">
              <Image src={"/images/avatar-1.png"}
              width={80} height={140}
              />
            </figure>

            <div className="info-content">
              <h1 className="name" title="Sachin Bahukhandi">
                {myDetails.name}
              </h1>

              <p className="title">{myDetails.designation}</p>
            </div>

            <button className="info_more-btn" data-sidebar-btn>
              <span>Show Contacts</span>

              <ion-icon name="chevron-down"></ion-icon>
            </button>
          </div>

          <div className="sidebar-info_more">
            <div className="separator"></div>

            <ul className="contacts-list">
              <li className="contact-item">
                <div className="icon-box">
                  <ion-icon name="mail-outline"></ion-icon>
                </div>

                <div className="contact-info">
                  <p className="contact-title">Email</p>

                  <a href="mailto:richard@example.com" className="contact-link">
                    richard@example.com
                  </a>
                </div>
              </li>

              <li className="contact-item">
                <div className="icon-box">
                  <ion-icon name="phone-portrait-outline"></ion-icon>
                </div>

                <div className="contact-info">
                  <p className="contact-title">Phone</p>

                  <a href="tel:+12133522795" className="contact-link">
                    +1 (213) 352-2795
                  </a>
                </div>
              </li>

              <li className="contact-item">
                <div className="icon-box">
                  <ion-icon name="calendar-outline"></ion-icon>
                </div>

                <div className="contact-info">
                  <p className="contact-title">Birthday</p>

                  <time datetime="1982-06-23">June 23, 1982</time>
                </div>
              </li>

              <li className="contact-item">
                <div className="icon-box">
                  <ion-icon name="location-outline"></ion-icon>
                </div>

                <div className="contact-info">
                  <p className="contact-title">Location</p>

                  <address>Sacramento, California, USA</address>
                </div>
              </li>
            </ul>

            <div className="separator"></div>

            <ul className="social-list">
              <li className="social-item">
                <a href="#" className="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li className="social-item">
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li className="social-item">
                <a href="#" className="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
}
