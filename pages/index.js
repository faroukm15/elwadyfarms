import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import Layout from "../src/layouts/Layout";
import {
  heroSliderOne,
  logoSlider,
} from "../src/sliderProps";
const Index = () => {
  return (
    <Layout header={1}>
      <section className="hero-area-one">
        <Slider {...heroSliderOne} className="hero-slider-one">
          <div className="single-slider">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/hero_one-slider-1.jpg)",
              }}
            />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="hero-content text-center">
                    <span
                      className="tag-line"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                    >
                      Taybat El-Wady Farms
                    </span>
                    <h1 data-animation="fadeInUp" data-delay=".5s">
                      Agriculture &amp; Organic Farms
                    </h1>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link href="/about">
                        <a className="main-btn btn-yellow">Learn About Us</a>
                      </Link>
                      <Link href="/portfolio-details">
                        <a className="main-btn bordered-btn bordered-white">
                          Latest Project
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slider">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/hero_one-slider-2.jpg)",
              }}
            />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="hero-content text-center">
                    <span
                      className="tag-line"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                    >
                      Taybat El-Wady Farms
                    </span>
                    <h1 data-animation="fadeInUp" data-delay=".5s">
                      Welcome to Our Farms
                    </h1>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link href="/about">
                        <a className="main-btn btn-yellow">Learn About Us</a>
                      </Link>
                      <Link href="/portfolio-details">
                        <a className="main-btn bordered-btn bordered-white">
                          Latest Project
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slider">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/hero_one-slider-3.jpg)",
              }}
            />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="hero-content text-center">
                    <span
                      className="tag-line"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                    >
                      Taybat El-Wady Farms
                    </span>
                    <h1 data-animation="fadeInUp" data-delay=".5s">
                      Organic &amp; Fresh Tasty Dates
                    </h1>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link href="/about">
                        <a className="main-btn btn-yellow">Learn About Us</a>
                      </Link>
                      <Link href="/portfolio-details">
                        <a className="main-btn bordered-btn bordered-white">
                          Latest Project
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slider">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/hero_one-slider-4.jpg)",
              }}
            />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="hero-content text-center">
                    <span
                      className="tag-line"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                    >
                      Taybat El-Wady Farms
                    </span>
                    <h1 data-animation="fadeInUp" data-delay=".5s">
                      Welcome to Our Farms
                    </h1>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link href="/about">
                        <a className="main-btn btn-yellow">Learn About Us</a>
                      </Link>
                      <Link href="/portfolio-details">
                        <a className="main-btn bordered-btn bordered-white">
                          Latest Project
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-section">
        <div className="container-1350">
          <div className="features-wrap-one wow fadeInUp">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-md-6 col-sm-12">
                <div className="features-item d-flex mb-30">
                  <div className="fill-number">01</div>
                  <div className="icon">
                    <i className="flaticon-tractor" />
                  </div>
                  <div className="text">
                    <h5>Modern Agriculture Equipment</h5>
                    <p>
                      Sit amet consectetur adipiscing elit sed eiusmod tempor
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                <div className="features-item d-flex mb-30">
                  <div className="fill-number">02</div>
                  <div className="icon">
                    <i className="flaticon-agriculture" />
                  </div>
                  <div className="text">
                    <h5>Organic and Fresh Harvest of Wheat</h5>
                    <p>
                      Sit amet consectetur adipiscing elit sed eiusmod tempor
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                <div className="features-item d-flex mb-30">
                  <div className="fill-number">01</div>
                  <div className="icon">
                    <i className="flaticon-social-care" />
                  </div>
                  <div className="text">
                    <h5>Lot’s Of Professional &amp; Expert Farmers</h5>
                    <p>
                      Sit amet consectetur adipiscing elit sed eiusmod tempor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-section p-r z-1 pt-130 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="about-one_content-box mb-50">
                <div className="section-title section-title-left mb-30 wow fadeInUp">
                  <span className="sub-title">About Us</span>
                  <h2>We’re Best Agriculture &amp; Organic Firms</h2>
                </div>
                <div
                  className="quote-text mb-35 wow fadeInDown"
                  data-wow-delay=".3s"
                >
                  <p>
                    Sed ut perspiciatis omnis natus error volup accusantiue
                    doloremque laudantium totam aperiam eaque quae abllcs
                    veritatis quasi architecto beatae vitae.
                  </p>
                </div>
                <Tab.Container defaultActiveKey={"mission"}>
                  <div className="tab-content-box wow fadeInUp">
                    <Nav as={"ul"} className="nav nav-tabs mb-20">
                      <li className="nav-item">
                        <Nav.Link
                          as={"a"}
                          className="nav-link"
                          data-toggle="tab"
                          eventKey="mission"
                          href="#mission"
                        >
                          Our Mission
                        </Nav.Link>
                      </li>
                      <li className="nav-item">
                        <Nav.Link
                          as={"a"}
                          className="nav-link"
                          data-toggle="tab"
                          eventKey="vision"
                          href="#vision"
                        >
                          Our Vision
                        </Nav.Link>
                      </li>
                    </Nav>
                    <Tab.Content className="tab-content">
                      <Tab.Pane className="tab-pane fade" eventKey="mission">
                        <div className="content-box-gap">
                          <p>
                            Natus error sit voluptatem accusantium doloremque
                            laudatium, totam rem aperiam, eaque ipsa quae ab
                            illo inventore veritatis et quasi architecto beatae
                            vitae dicta sunt
                          </p>
                          <div className="avatar-box d-flex align-items-center">
                            <div className="thumb">
                              <img
                                src="assets/images/user-1.jpg"
                                alt="Admin Thumb"
                              />
                            </div>
                            <div className="content">
                              <img src="assets/images/sign-1.png" alt="Sign" />
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane className="tab-pane fade" eventKey="vision">
                        <div className="content-box-gap">
                          <p>
                            Natus error sit voluptatem accusantium doloremque
                            laudatium, totam rem aperiam, eaque ipsa quae ab
                            illo inventore veritatis et quasi architecto beatae
                            vitae dicta sunt
                          </p>
                          <div className="avatar-box d-flex align-items-center">
                            <div className="thumb">
                              <img
                                src="assets/images/user-1.jpg"
                                alt="Admin Thumb"
                              />
                            </div>
                            <div className="content">
                              <img src="assets/images/sign-1.png" alt="Sign" />
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Tab.Container>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="about-one_image-box p-r mb-50 pl-100">
                <div className="about-img_one wow fadeInLeft">
                  <img src="assets/images/about/img-1.jpg" alt="About Image" />
                </div>
                <div className="about-img_two wow fadeInRight">
                  <img src="assets/images/about/img-2.jpg" alt="About Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Contact Section ======*/}
      <section className="service-one dark-black-bg pt-130 pb-125 p-r z-1">
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-lg-6">
              <div className="contact-one_content-box wow fadeInLeft">
                <div className="contact-wrapper">
                  <div className="section-title section-title-left mb-40">
                    <span className="sub-title">Get In Touch</span>
                    <h2>Need Oragnic Dates! Send Us Message</h2>
                  </div>
                  <div className="contact-form">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Full Name"
                          name="name"
                          required=""
                        />
                      </div>
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email Address"
                          name="email"
                          required=""
                        />
                      </div>
                      <div className="form_group">
                        <textarea
                          className="form_control"
                          placeholder="Write Message"
                          name="message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="form_group">
                        <button className="main-btn yellow-bg">
                          Send Us Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="contact-one_information-box bg_cover wow fadeInRight"
                style={{
                  backgroundImage: "url(assets/images/bg/contact-bg-1.jpg)",
                }}
              >
                <div className="information-box">
                  <h3>Contact Us</h3>
                  <p>
                    Sit volupta accusantium doloreues laudatiuec totam rem
                    aperiam eaque abillo inventore verit atiset
                  </p>
                  <div className="information-item_one d-flex mb-25">
                    <div className="icon">
                      <i className="flaticon-placeholder" />
                    </div>
                    <div className="info">
                      <span className="sub-title mb-1">Location</span>
                      <h5>El Wady El Gdeed</h5>
                    </div>
                  </div>
                  <div className="information-item_one d-flex mb-25">
                    <div className="icon">
                      <i className="flaticon-email" />
                    </div>
                    <div className="info">
                      <span className="sub-title mb-1">Email Address</span>
                      <h5>
                        <a href="mailto:hussein@elwadyfarms.com">hussein@elwadyfarms.com</a>
                      </h5>
                    </div>
                  </div>
                  <div className="information-item_one d-flex mb-25">
                    <div className="icon">
                      <i className="flaticon-phone-call" />
                    </div>
                    <div className="info">
                      <span className="sub-title mb-1">Phone Number</span>
                      <h5>
                        <a href="tel:+201003668388">+201003668388</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Section ======*/}
      {/*====== Start Partner Section ======*/}
      <section className="partners-section yellow-bg pt-50 pb-60 p-r z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-30 wow fadeInUp">
                <h4>We Work With 10+ Global Partners</h4>
              </div>
            </div>
          </div>
          <Slider {...logoSlider} className="partner-slider-one wow fadeInDown">
            <div className="partner-item">
              <div className="partner-img">
                <img
                  src="assets/images/partner/img-1.png"
                  alt="partner image"
                />
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-img">
                <img
                  src="assets/images/partner/img-2.png"
                  alt="partner image"
                />
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-img">
                <img
                  src="assets/images/partner/img-3.png"
                  alt="partner image"
                />
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-img">
                <img
                  src="assets/images/partner/img-4.png"
                  alt="partner image"
                />
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-img">
                <img
                  src="assets/images/partner/img-1.png"
                  alt="partner image"
                />
              </div>
            </div>
            <div className="partner-item">
              <div className="partner-img">
                <img
                  src="assets/images/partner/img-2.png"
                  alt="partner image"
                />
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Partner Section ======*/}
      {/*====== Start Footer ======*/}

      {/*====== End Footer ======*/}
      {/*====== back-to-top ======*/}
    </Layout>
  );
};
export default Index;
