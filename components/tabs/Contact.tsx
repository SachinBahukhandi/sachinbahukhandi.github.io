timport React from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import { IoEyeOutline, IoPaperPlane } from "react-icons/io5";

type Props = {
    active: boolean
};
const Contact: React.FunctionComponent<Props> = ({ active }) => {
    return (
        <>
            <article className={`contact ${active && "active"}`} data-page="contact">
                <header>
                    <h2 className="h2 article-title">Contact</h2>
                </header>
                <section className="mapbox" data-mapbox="">
                    <figure>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
                            width={400}
                            height={300}
                            loading="lazy"
                        />
                    </figure>
                </section>
                <section className="contact-form">
                    <h3 className="h3 form-title">Contact Form</h3>
                    <form action="#" className="form" data-form="">
                        <div className="input-wrapper">
                            <input
                                type="text"
                                name="fullname"
                                className="form-input"
                                placeholder="Full name"
                                data-form-input=""
                            />
                            <input
                                type="email"
                                name="email"
                                className="form-input"
                                placeholder="Email address"
                                data-form-input=""
                            />
                        </div>
                        <textarea
                            name="message"
                            className="form-input"
                            placeholder="Your Message"
                            data-form-input=""
                            defaultValue={""}
                        >
                        </textarea>
                        <button
                            className="form-btn"
                            type="submit"
                            data-form-btn=""
                        >
                            <IoPaperPlane/>
                            {/* <ion-icon name="paper-plane" /> */}
                            <span>Send Message</span>
                        </button>
                    </form>
                </section>
            </article>
        </>
    );
};

export default Contact;