import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="footer bg-[#03203C] text-white md:px-10 py-8 px-2">
      <div className="md:grid md:grid-cols-3">
        <div className="footer__section">
          <img src={logo} alt="" className="max-h-24" />
          <div className="flex gap-5 text-xl mb-3">
            <Link to="https://www.facebook.com/digiwebagenci" target="_blank" className="footer__social-link">
              <FaFacebook />
            </Link>
            <Link to="#" className="footer__social-link">
              <FaTwitter />
            </Link>
            <Link to="#" className="footer__social-link">
              <FaInstagram />
            </Link>
          </div>
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} DigiWeb Agency. All rights
            reserved.
          </p>
        </div>
        <div className="footer__section">
          <h3 className="footer__title text-2xl mb-3">Contact Us</h3>
          <p className="footer__contact-info mb-3">Phone: (123) 456-7890</p>
          <p> Email: info@digiwebagency.com</p>
        </div>
        <div className="footer__section">
          <h3 className="footer__title text-2xl mb-3">About</h3>
          <p className="footer__about">
            DigiWeb Agency is a perfect solution center for marketing and business website of your company for business growth with super sustainability.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
