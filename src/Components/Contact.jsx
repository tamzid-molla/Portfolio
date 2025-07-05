import React from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const Contact = () => {
    const handleEmail = (e) => {
        e.preventDefault();
        const serviceId = import.meta.env.VITE_serviceId;
        const templateId = import.meta.env.VITE_templateId;
        const publicKey = import.meta.env.VITE_publicKey;
        emailjs.sendForm(serviceId, templateId, e.target, publicKey)
            .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'Thank you for contacting me. I will get back to you soon.',
            });
            e.target.reset();
            }, (error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong. Please try again later.',
            });
            });
    }
  return (
      <section id="contact"
          className="text-primaryText mt-24 md:mt-0 flex justify-center items-center min-h-screen px-4">
      <div className="container mx-auto px-3">
        <h2 className="text-4xl font-bold text-center mb-4">
          Get In <span className="text-accent">Touch</span>
        </h2>
        <p className="text-secondaryText text-center max-w-xl mx-auto mb-12">
          Have a project in mind or want to collaborate? I'd love to hear from you.
          Let's create something amazing together!
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div data-aos='fade-right' className="space-y-6">
            <div className="bg-cardBackground p-5 rounded-xl flex items-start gap-4">
              <MdEmail className="text-2xl text-Accent" />
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p className="text-secondaryText">tamzidmolla.dev@gmail.com</p>
              </div>
            </div>
            <div className="bg-cardBackground p-5 rounded-xl flex items-start gap-4">
              <BsFillTelephoneFill className="text-2xl text-accent" />
              <div>
                <h4 className="text-lg font-semibold">Phone | WhatsApp</h4>
                <p className="text-secondaryText">+880 1864-959549</p>
              </div>
            </div>
            <div className="bg-cardBackground p-5 rounded-xl flex items-start gap-4">
              <MdLocationOn className="text-2xl text-accent" />
              <div>
                <h4 className="text-lg font-semibold">Location</h4>
                <p className="text-secondaryText">Jhenaidah, Bangladesh</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Follow Me</h4>
              <div className="flex space-x-4 text-2xl">
               <a href="https://github.com/tamzid-molla" target="_blank" rel="noopener noreferrer">
                         <FaGithub className="text-Accent" />
                       </a>
                       <a href="https://www.linkedin.com/in/tamzid-dev" target="_blank" rel="noopener noreferrer">
                         <FaLinkedin  className="text-Accent"/>
                       </a>
                       <a href="https://www.facebook.com/monhara.pakhi.549668" target="_blank" rel="noopener noreferrer">
                         <FaFacebook  className="text-Accent"/>
                       </a>
                
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div data-aos='fade-left' className="bg-cardBackground p-8 rounded-xl">
                      <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
                      
            <form onSubmit={handleEmail} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Enter your name" name="name" className="p-3 rounded-lg bg-background border border-[#334155] placeholder-[#94a3b8] text-primaryText" />
                <input type="email" placeholder="Enter your email" name="email" className="p-3 rounded-lg bg-background border border-[#334155] placeholder-[#94a3b8] text-primaryText" />
              </div>
              <input type="text" placeholder="What's this about?" name="subject" className="w-full p-3 rounded-lg bg-background border border-[#334155] placeholder-[#94a3b8] text-primaryText" />
              <textarea rows="5" name="message" placeholder="Tell me about your project or just say hello!" className="w-full p-3 rounded-lg bg-background border border-[#334155] placeholder-[#94a3b8] text-primaryText"></textarea>
              <button type="submit" className="w-full cursor-pointer bg-[#00D3BB] text-primaryText font-semibold py-3 rounded-lg hover:opacity-90">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact
