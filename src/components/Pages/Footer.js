import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-tem first">
          <h3>Get In Touch</h3>
          <p>You have an awesome idea you want me to jump on? Feel free to contact me. However, if you have other request or question, I'm still up for it.</p>

          <div class="btn-con">
          <div class="button">
            <div class="text">Send an email</div>
          </div>
        </div>
      </div>
      <div className="footer-tem second">
          <div className="social-icon">
            <span>Github</span>
            <span>Email</span>
            <span>Twitter</span>
          </div>

          <div className="copyright">
            <span>Copyright © {new Date().getFullYear()} Peter Ime</span>
          </div>
      </div>
    </div>
  );
};

export default Footer;
