import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
const PortfolioDetails = () => {
  return (
    <Layout>
      <PageBanner pageTitle={"Portfolio"} pageName=" Portfolio Details" />
      <section className="project-details-page pt-170 wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-details-wrapper">
                <div className="img-holder mb-50">
                  <img
                    src="assets/images/portfolio/single-portfolio-1.jpg"
                    alt=""
                  />
                </div>
                <div className="project-content pb-75">
                  <div className="content-box">
                    <div className="row">
                      <div className="col-lg-5">
                        <h3 className="title mb-15">Wheat</h3>
                      </div>
                      <div className="col-lg-7">
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="project-info-box mb-45">
                              <h4 className="mb-10">Category</h4>
                              <p>Organic Foods Crops</p>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="project-info-box mb-45">
                              <h4 className="mb-10">Clients</h4>
                              <p>Egyptian Market</p>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="project-info-box mb-45">
                              <h4 className="mb-10">Date</h4>
                              <p>01 February 2023</p>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem. Ut enim ad minima veniam, quis
                            nostrum exercitationem ullam corporis suscipit
                            laboriosam, nisi ut aliquid ex ea commodi
                            consequatur? Quis autem vel eum iure reprehenderit
                            qui in ea voluptate velit esse quam nihil molestiae
                            consequatur, vel illum qui dolorem eum fugiat quo
                            voluptas nulla pariatur
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-box">
                    <div className="row">
                      <div className="col-lg-5">
                        <h3 className="title mb-15">Project Benefit</h3>
                      </div>
                      <div className="col-lg-7">
                        <div className="content">
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi
                          nesciunt. Neque porro quisquam est, qui dolorem ipsum
                          quia dolor sit amet, consectetur, adipisci velit, sed
                          quia non numquam eius modi tempora incidunt ut labore
                          et dolore magnam aliquam quaerat voluptatem.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Portfolio Details ======*/}
    </Layout>
  );
};
export default PortfolioDetails;
