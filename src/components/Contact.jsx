import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm('service_4g719xj', 'template_xvve9dv', form.current, {
        publicKey: '1giK4l7XArlsCkYmy',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Your Message Sent Successfully!", {
            position: "top-center"
          });
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div className="container contact" id="contact">
        <h1 className="text-center mt-5 text-4xl">CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >

          <a href="https://www.facebook.com/ruhulamin15jun1999" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.instagram.com/ruhulamin15jun1999" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://x.com/ruhulamin_2024" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/ruhulamin2024" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://github.com/RUHULAMIN2024" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>

          <a
            href="mailto:ruhulamin15jun1999@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
          <div className="flex flex-col justify-between">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold leading-tight lg:text-4xl">Let`s talk!</h2>
              <div className="dark:text-gray-600">Our friendly team is always here to chat</div>
            </div>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/c44c1690013661.5e0a009911e87.gif" alt="" className="p-6 h-52 md:h-64" />
          </div>
          <form noValidate="" ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="name" className="text-sm">Full name</label>
              <input id="name" type="text" name="name" placeholder="" className="w-full p-3 rounded text-slate-500 dark:bg-gray-100" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm">Email</label>
              <input id="email" type="email" name="email" className="w-full p-3 rounded text-slate-500 dark:bg-gray-100" />
            </div>
            <div>
              <label htmlFor="message" className="text-sm">Message</label>
              <textarea id="message" rows="3" name="message" className="w-full p-3 rounded text-slate-500 dark:bg-gray-100"></textarea>
            </div>
            <input type="submit" value='Send Message' className="w-full btn btn-outline text-yellow-500 hover:bg-yellow-500 hover:text-black my-3 p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
