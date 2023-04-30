import React from "react";
import "./Contact.css";
import Footer from "../../components/Footer/Footer";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <h1>
          &lt;<span id="title">Say hi!</span>/&gt;
        </h1>
        <div className="form-container">
          <Fade className="fadeprojects">
            <form
              className="form"
              name="contact"
              method="post"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="mail-cont">
                <label htmlFor="email" className="form-label">
                  &lt;<span id="title">E-Mail</span>/&gt;
                </label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  id="email"
                  aria-describedby="emailHelp"
                  required
                />
              </div>

              <div className="msg-cont">
                <label className="">
                  &lt;<span id="title">Message</span>/&gt;
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="input"
                  required
                  placeholder="Dear Maksim..."
                />
              </div>

              <button type="submit" className="form-btn">
                Submit
              </button>
            </form>
          </Fade>
        </div>
      </div>
      <div className="bottom">
        <Footer />

      </div>
    </>
  );
};

export default Contact;
