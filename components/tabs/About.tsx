

import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { IAbout } from "../../types/IPortfolio";
import IconComponent from "../IconComponent";
type Props = {
    active: Boolean,
    data: IAbout
};
const About: React.FunctionComponent<Props> = ({ active, data }) => {
    return (
        <article className={`about ${active && "active"}`} data-page="about">
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>
            <section className="about-text">
                {data.headline}
            </section>
            {/*
    - service
  */}
            <section className="service">
                <h3 className="h3 service-title">What i'm doing</h3>
                <ul className="service-list">
                    {
                        data.stacks.map((stack, index) => (
                            <li className="service-item" key={index}>
                                <div className="service-icon-box">
                                    <IconComponent icon={stack.icon} />
                                </div>
                                <div className="service-content-box">
                                    <h4 className="h4 service-item-title">{stack.key}</h4>
                                    <p className="service-item-text">
                                        {stack.description}
                                    </p>
                                </div>
                            </li>
                        ))
                    }

                    {/* <li className="service-item">
                        <div className="service-icon-box">
                            <img
                                src="images/icon-dev.svg"
                                alt="Web development icon"
                                width={40}
                            />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Web development</h4>
                            <p className="service-item-text">
                                High-quality development of sites at the professional level.
                            </p>
                        </div>
                    </li>
                    <li className="service-item">
                        <div className="service-icon-box">
                            <img
                                src="images/icon-app.svg"
                                alt="mobile app icon"
                                width={40}
                            />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Mobile apps</h4>
                            <p className="service-item-text">
                                Professional development of applications for iOS and Android.
                            </p>
                        </div>
                    </li>
                    <li className="service-item">
                        <div className="service-icon-box">
                            <img
                                src="images/icon-photo.svg"
                                alt="camera icon"
                                width={40}
                            />
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Photography</h4>
                            <p className="service-item-text">
                                I make high-quality photos of any category at a professional
                                level.
                            </p>
                        </div>
                    </li> */}
                </ul>
            </section>
            {/*
    - testimonials
  */}
            {/* <section className="testimonials">
                <h3 className="h3 testimonials-title">Testimonials</h3>
                <ul className="testimonials-list has-scrollbar">
                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item="">
                            <figure className="testimonials-avatar-box">
                                <img
                                    src="images/avatar-1.png"
                                    alt="Daniel lewis"
                                    width={60}
                                    data-testimonials-avatar=""
                                />
                            </figure>
                            <h4
                                className="h4 testimonials-item-title"
                                data-testimonials-title=""
                            >
                                Daniel lewis
                            </h4>
                            <div className="testimonials-text" data-testimonials-text="">
                                <p>
                                    Richard was hired to create a corporate identity. We were very
                                    pleased with the work done. She has a lot of experience and is
                                    very concerned about the needs of client. Lorem ipsum dolor
                                    sit amet, ullamcous cididt consectetur adipiscing elit, seds
                                    do et eiusmod tempor incididunt ut laborels dolore magnarels
                                    alia.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item="">
                            <figure className="testimonials-avatar-box">
                                <img
                                    src="images/avatar-2.png"
                                    alt="Jessica miller"
                                    width={60}
                                    data-testimonials-avatar=""
                                />
                            </figure>
                            <h4
                                className="h4 testimonials-item-title"
                                data-testimonials-title=""
                            >
                                Jessica miller
                            </h4>
                            <div className="testimonials-text" data-testimonials-text="">
                                <p>
                                    Richard was hired to create a corporate identity. We were very
                                    pleased with the work done. She has a lot of experience and is
                                    very concerned about the needs of client. Lorem ipsum dolor
                                    sit amet, ullamcous cididt consectetur adipiscing elit, seds
                                    do et eiusmod tempor incididunt ut laborels dolore magnarels
                                    alia.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item="">
                            <figure className="testimonials-avatar-box">
                                <img
                                    src="images/avatar-3.png"
                                    alt="Emily evans"
                                    width={60}
                                    data-testimonials-avatar=""
                                />
                            </figure>
                            <h4
                                className="h4 testimonials-item-title"
                                data-testimonials-title=""
                            >
                                Emily evans
                            </h4>
                            <div className="testimonials-text" data-testimonials-text="">
                                <p>
                                    Richard was hired to create a corporate identity. We were very
                                    pleased with the work done. She has a lot of experience and is
                                    very concerned about the needs of client. Lorem ipsum dolor
                                    sit amet, ullamcous cididt consectetur adipiscing elit, seds
                                    do et eiusmod tempor incididunt ut laborels dolore magnarels
                                    alia.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item="">
                            <figure className="testimonials-avatar-box">
                                <img
                                    src="images/avatar-4.png"
                                    alt="Henry william"
                                    width={60}
                                    data-testimonials-avatar=""
                                />
                            </figure>
                            <h4
                                className="h4 testimonials-item-title"
                                data-testimonials-title=""
                            >
                                Henry william
                            </h4>
                            <div className="testimonials-text" data-testimonials-text="">
                                <p>
                                    Richard was hired to create a corporate identity. We were very
                                    pleased with the work done. She has a lot of experience and is
                                    very concerned about the needs of client. Lorem ipsum dolor
                                    sit amet, ullamcous cididt consectetur adipiscing elit, seds
                                    do et eiusmod tempor incididunt ut laborels dolore magnarels
                                    alia.
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section> */}
            {/*
    - testimonials modal
  */}
            <div className="modal-container" data-modal-container="">
                <div className="overlay" data-overlay="" />
                <section className="testimonials-modal">
                    <button className="modal-close-btn" data-modal-close-btn="">
                        <IoCloseOutline />
                    </button>
                    <div className="modal-img-wrapper">
                        <figure className="modal-avatar-box">
                            <img
                                src="images/avatar-1.png"
                                alt="Daniel lewis"
                                width={80}
                                data-modal-img=""
                            />
                        </figure>
                        <img src="images/icon-quote.svg" alt="quote icon" />
                    </div>
                    <div className="modal-content">
                        <h4 className="h3 modal-title" data-modal-title="">
                            Daniel lewis
                        </h4>
                        <time dateTime="2021-06-14">14 June, 2021</time>
                        <div data-modal-text="">
                            <p>
                                Richard was hired to create a corporate identity. We were very
                                pleased with the work done. She has a lot of experience and is
                                very concerned about the needs of client. Lorem ipsum dolor sit
                                amet, ullamcous cididt consectetur adipiscing elit, seds do et
                                eiusmod tempor incididunt ut laborels dolore magnarels alia.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            {/*
    - clients
  */}
            {/* <section className="clients">
                <h3 className="h3 clients-title">Projects</h3>
                <ul className="clients-list has-scrollbar">
                    <li className="clients-item">
                        <a href="#">
                            <img src="images/logo-1-color.png" alt="client logo" />
                        </a>
                    </li>
                    <li className="clients-item">
                        <a href="#">
                            <img src="images/logo-2-color.png" alt="client logo" />
                        </a>
                    </li>
                    <li className="clients-item">
                        <a href="#">
                            <img src="images/logo-3-color.png" alt="client logo" />
                        </a>
                    </li>
                    <li className="clients-item">
                        <a href="#">
                            <img src="images/logo-4-color.png" alt="client logo" />
                        </a>
                    </li>
                    <li className="clients-item">
                        <a href="#">
                            <img src="images/logo-5-color.png" alt="client logo" />
                        </a>
                    </li>
                    <li className="clients-item">
                        <a href="#">
                            <img src="images/logo-6-color.png" alt="client logo" />
                        </a>
                    </li>
                </ul>
            </section> */}
        </article>
    );
};

export default About;