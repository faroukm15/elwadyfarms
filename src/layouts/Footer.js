import Link from "next/link";
const Footer = ({ footer }) => {
    return <DefaultFooter />;
};
export default Footer;

const DefaultFooter = () => (
  <footer className="footer-default footer-white dark-black-bg">
    <div className="container">
      <div className="footer-top wow fadeInUp">
        <div className="row">
          <div className="col-lg-4 col-md-12 footer-contact-item">
            <div className="contact-info d-flex justify-content-center">
              <div className="site-logo text-center">
                <Link href="/">
                  <a className="brand-logo">
                    <img
                      src="assets/images/logo/logo-3.png"
                      alt="Footer Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 footer-contact-item">
            <div className="contact-info d-flex">
              <div className="icon">
                <i className="flaticon-placeholder" />
              </div>
              <div className="text">
                <h5>Locations</h5>
                <h6>El Wady El Gdeed</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 footer-contact-item">
            <div className="contact-info d-flex">
              <div className="icon">
                <i className="flaticon-placeholder" />
              </div>
              <div className="text">
                <h5>Email Us</h5>
                <h6>
                  <a href="mailto:hussein@elwadyfarms.com">
                    hussein@elwadyfarms.com
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-widget pt-70 pb-25">
        <FooterMenu />
      </div>
      <div className="footer-newsletter footer-newsletter-one text-white wow fadeInUp">
        <div className="row">
          <div className="col-xl-3">
            <div className="footer-text">
              <h5>Subscrive Our Newsletter To Get More Updates</h5>
            </div>
          </div>
          <div className="col-xl-9">
            <div className="newsletter-form">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        name="email"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form_group">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Phone"
                        name="phone"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form_group">
                      <button className="main-btn btn-yellow">
                        Subscribe Now
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="col-lg-12">
          <div className="copyright-text text-center">
            <p>© 2022 Taybat El Wady. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const FooterMenu = () => (
  <div className="row">
    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12">
      <div className="footer-widget about-widget mb-40 wow fadeInDown">
        <h4 className="widget-title">About Us</h4>
        <div className="footer-about-content">
          <p>
            Sit amet consectetur adipiscing elit sed do eiusmo tempor incidunt
            ut labore et dolore magna aliquae. Quis ipsum suspendisse ultrices
            gravida commodo viverra
          </p>
          <div className="social-box">
            <h4 className="mb-15">Follow On</h4>
            <ul className="social-link">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
