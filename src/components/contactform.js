import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert";

function ContactForm() {
  const [isClicked, setClicked] = useState(false);
  const [isLoading, setLoading] = useState(false);
  // Send via email using emailjs
  // prevent form default action

  const sendEmail = (e) => {
    e.preventDefault();
    setClicked(true);
    emailjs
      .sendForm(
        "service_6sxnj0b",
        "template_9dwmhbi",
        e.target,
        "vdOPVhECkkwZLlDBJ"
      )
      .then(
        (result) => {
          swal(
            "Thank you so much!",
            "I will response as soon as possible!",
            "success"
          );
          setLoading(false);
        },
        (error) => {
          swal("Oops... " + JSON.stringify(error));
          setLoading(false);
        }
      );

    e.target.reset();
  };
  useEffect(() => {
    if (isClicked) {
      setLoading(true);
    }
  }, [isClicked]);

  return (
    <div className="card text-center mt-4 crv-8 p-3 bx-shadow bg-primary-default">
      <h4 className="text-left font-weight-bold text-yellow">Let's talk</h4>
      <form onSubmit={sendEmail} method="post" className="mt-2">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text ion-person"></span>
          </div>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Name (Optional)"
          />
        </div>
        <div className="input-group mt-2">
          <div className="input-group-prepend">
            <span className="input-group-text ion-email"></span>
          </div>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            required
            placeholder="Email"
          />
        </div>
        <div className="input-group mt-2">
          <div className="input-group-prepend">
            <span className="input-group-text ion-email"></span>
          </div>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            required
            placeholder="Subject"
          />
        </div>
        <textarea
          name="message"
          id="message"
          rows="5"
          className="form-control mt-2"
          placeholder="Message"
        ></textarea>
        {!isLoading && (
          <button
            type="submit"
            className="btn btn-warning btn-block mt-3 crv-25"
          >
            Send now
          </button>
        )}
        {isLoading && (
          <button
            type="submit"
            className="btn btn-warning btn-block mt-3 crv-25"
            disabled
          >
            Sending...
          </button>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
