import { React, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputForm from "../../components/inputform/InputForm";
import "./Contact.css";

function Contact() {
  const [formValue, setFormValue] = useState({
    lastname: "",
    firstname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const showToastMessage = () => {
    toast.success("Votre message a bien été envoyé, merci !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showToastErrorMessage = () => {
    toast.error("Une erreur s'est produite, vous pouvez réessayer !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const {
    VITE_EMAILJS_SERVICE_ID,
    VITE_EMAILJS_TEMPLATE_ID,
    VITE_EMAILJS_PUBLIC_KEY,
  } = import.meta.env;

  const emailjsServiceId = VITE_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = VITE_EMAILJS_TEMPLATE_ID;
  const emailjsPublicKey = VITE_EMAILJS_PUBLIC_KEY;
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(emailjsServiceId, emailjsTemplateId, e.target, emailjsPublicKey)

      .then(
        (result) => {
          showToastMessage(result);
        },
        (error) => {
          showToastErrorMessage(error);
        }
      );
  };

  return (
    <div>
      <div className="contactCard">
        <h1>Laissez moi un message !</h1>
        <div className="containForm">
          <form onSubmit={handleSubmit} className="contactForm">
            <div>
              <InputForm
                name="lastname"
                type="text"
                value={formValue.lastname}
                onChange={handleChange}
                required
                placeholder="Nom"
              />
            </div>
            <div>
              <InputForm
                name="firstname"
                type="text"
                value={formValue.firstname}
                onChange={handleChange}
                required
                placeholder="Prénom"
              />
            </div>
            <div>
              <InputForm
                name="email"
                type="text"
                value={formValue.email}
                onChange={handleChange}
                required
                placeholder="Email"
              />
            </div>
            <div className="messageForm">
              <textarea
                className="textArea"
                name="message"
                value={formValue.message}
                onChange={handleChange}
                maxLength={400}
                required
                placeholder="Message"
              />
            </div>
            <div className="containSubmit">
              <button type="submit" className="buttonSubmit">
                Envoyer
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Contact;
