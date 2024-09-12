import Image from 'next/image';
import React, { HTMLAttributes, useState } from 'react';
import { IDetails } from '../types/IDetails';
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import { IoLogoGithub, IoLogoLinkedin, IoLogoStackoverflow, IoMailOutline } from "react-icons/io5";
import { IoMdPhonePortrait } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

type Props = {
  userDetails: IDetails
};
const Sidebar: React.FunctionComponent<Props> = ({ userDetails }) => {

  const [active, setActive] = useState<boolean>(false);
  return (
    <aside className={`sidebar ${active? "active":""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image
            src={userDetails.profilePicture}
            width={100}
            height={140}
            alt={userDetails.name}
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title={userDetails.name}>
            {userDetails.name}
          </h1>

          <p className="title">{userDetails.designation}</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn onClick={()=>{setActive(!active); console.log(active)}}>
          <span>Show Contacts</span>
          {
            active ? <FaChevronCircleUp />: <FaChevronCircleDown />
          }

          {/* <ion-icon name="chevron-down"></ion-icon> */}
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IoMailOutline />
              {/* <ion-icon name="mail-outline"></ion-icon> */}
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href={`mailto:${userDetails.email}`} className="contact-link">
                {userDetails.email}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoMdPhonePortrait />
              {/* <ion-icon name="phone-portrait-outline"></ion-icon> */}
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href={`tel:${userDetails.phone}`} className="contact-link">
                {userDetails.phone}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <CiCalendar />
              {/* <ion-icon name="calendar-outline"></ion-icon> */}
            </div>

            <div className="contact-info">
              <p className="contact-title">DOB</p>

              <time dateTime={userDetails.dob}>{userDetails.dob}</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FaLocationDot />
              {/* <ion-icon name="location-outline"></ion-icon> */}
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>{userDetails.location}</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href={userDetails.socialLinks?.stackoverflow} className="social-link">
              <IoLogoStackoverflow />
              {/* <ion-icon name="logo-facebook"></ion-icon> */}
            </a>
          </li>

          <li className="social-item">
            <a href={userDetails.socialLinks?.linkedin} className="social-link">
              <IoLogoLinkedin />
              {/* <ion-icon name="logo-twitter"></ion-icon> */}
            </a>
          </li>

          <li className="social-item">
            <a href={userDetails.socialLinks?.github} className="social-link">
              <IoLogoGithub />
              {/* <ion-icon name="logo-instagram"></ion-icon> */}
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;



