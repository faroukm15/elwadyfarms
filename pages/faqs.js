import { useState } from "react";
import { Accordion } from "react-bootstrap";
import FaqCard from "../src/components/faqCard";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
const Faqs = () => {
  const faqsData = [
    {
      title: "  What is the answer to life ?",
    },
    { title: " Does it matter ?" },
    ,
  ];
  const [active, setActive] = useState("collapse0");
  return (
    <Layout>
      <PageBanner pageName={"Faqs"} />
      <section className="faq-section pt-170 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-10">
              <div className="section-title text-center mb-70 wow fadeInUp">
                <span className="sub-title">Asked Questions</span>
                <h2>Have Any Question On Minds! Asked Question</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="faq-one_content-box wow fadeInDown">
                <Accordion
                  defaultActiveKey="collapse0"
                  className="accordion"
                  id="accordionOne"
                >
                  {faqsData.map((faq, i) => (
                    <FaqCard
                      title={faq.title}
                      key={i}
                      event={`collapse${i}`}
                      onClick={() => setActive(`collapse${i}`)}
                      active={active}
                    />
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Faq Section ======*/}
      {/*====== Start Contact Section ======*/}
      <section className="contact-two p-r z-1 pt-130">
        <div
          className="contact-bg bg_cover"
          style={{ backgroundImage: "url(assets/images/contact/img-2.jpg)" }}
        />
        <div className="container">
          <div className="row">
            <div className="offset-lg-6 col-l-g-6">
              <div className="contact-two_content-box p-r z-1 wow fadeInRight">
                <div className="section-title mb-40">
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
                      <button className="main-btn btn-yellow">
                        Send Us Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Section ======*/}
    </Layout>
  );
};
export default Faqs;
