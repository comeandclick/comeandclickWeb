import Footer from "@/components/Footer/Footer";
import Footer3 from "@/components/Footer/Footer3";
import Breadcrumb from "@/components/common/Breadcrumb";
import Header from "@/components/header/Header";
import Home2ProcessSection from "@/components/process-section/home2-process-section";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Come & Click - Digital Agency",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const Service3Page = () => {
  return (
    <>
      <Header />
      <Breadcrumb bgImg="3" title2="SMART DIGITAL SOLUTIONS" title="WE PROVIDE" />
      <div className="home2-services-section pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-60">
            <div className="col-lg-12">
              <div className="section-title four text-animation">
                <h2>
                  EMPOWERING YOUR <br />
                  <span>SUCCESS</span>
                </h2>
                <div className="dash-and-paragraph three">
                  <div className="btn-and-paragraph">
                    <p>
                      Offer a wide range of services to help businesses
                      establish and enhance their online presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="services-wrapper">
            <div className="service-card">
              <h3>1. Graphics Design</h3>
              <p>
                Professional graphic design services creating stunning visuals, logos, 
                branding materials and marketing collateral that capture your brand essence.
              </p>
              <ul>
                <li>
                  <a href="#">Branding</a>
                </li>
                <li>
                  <a href="#">Logo Design</a>
                </li>
                <li>
                  <a href="#">Print Design</a>
                </li>
                <li>
                  <a href="#">Marketing Materials</a>
                </li>
                <li>
                  <a href="#">Social Media Graphics</a>
                </li>
                <li>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
              <Link className="primary-btn2 btn-hover" href="/contact">
                Explore More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
                <span style={{ top: "50.5px", left: "83.75px" }} />
              </Link>
            </div>
            <div className="service-card">
              <h3>2. Web Design & Development</h3>
              <p>
                End-to-end web solutions from custom website design to full-stack development,
                creating responsive and engaging online experiences.
              </p>
              <ul>
                <li>
                  <a href="#">Custom Websites</a>
                </li>
                <li>
                  <a href="#">E-commerce</a>
                </li>
                <li>
                  <a href="#">CMS Development</a>
                </li>
                <li>
                  <a href="#">Responsive Design</a>
                </li>
                <li>
                  <a href="#">Web Maintenance</a>
                </li>
              </ul>
              <Link className="primary-btn2 btn-hover" href="/contact">
                Explore More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
                <span style={{ top: "50.5px", left: "83.75px" }} />
              </Link>
            </div>
            <div className="service-card">
              <h3>3. Mobile App Development</h3>
              <p>
                Native and cross-platform mobile application development delivering 
                intuitive, feature-rich apps for iOS and Android platforms.
              </p>
              <ul>
                <li>
                  <a href="#">iOS Development</a>
                </li>
                <li>
                  <a href="#">Android Development</a>
                </li>
                <li>
                  <a href="#">Cross-Platform</a>
                </li>
                <li>
                  <a href="#">App Testing</a>
                </li>
                <li>
                  <a href="#">App Maintenance</a>
                </li>
              </ul>
              <Link className="primary-btn2 btn-hover" href="/contact">
                Explore More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
                <span style={{ top: "50.5px", left: "83.75px" }} />
              </Link>
            </div>
            <div className="service-card">
              <h3>4. UX/UI Design</h3>
              <p>
                User-centered design solutions that enhance user experience through
                intuitive interfaces, seamless navigation and engaging interactions.
              </p>
              <ul>
                <li>
                  <a href="#">User Research</a>
                </li>
                <li>
                  <a href="#">Wireframing</a>
                </li>
                <li>
                  <a href="#">Prototyping</a>
                </li>
                <li>
                  <a href="#">Interface Design</a>
                </li>
                <li>
                  <a href="#">Usability Testing</a>
                </li>
              </ul>
              <Link className="primary-btn2 btn-hover" href="/contact">
                Explore More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
                <span style={{ top: "50.5px", left: "83.75px" }} />
              </Link>
            </div>
            <div className="service-card">
              <h3>5. SEO Optimization</h3>
              <p>
                Comprehensive SEO services to improve your website's visibility,
                drive organic traffic and achieve higher search engine rankings.
              </p>
              <ul>
                <li>
                  <a href="#">Keyword Research</a>
                </li>
                <li>
                  <a href="#">On-Page SEO</a>
                </li>
                <li>
                  <a href="#">Technical SEO</a>
                </li>
                <li>
                  <a href="#">Link Building</a>
                </li>
                <li>
                  <a href="#">Analytics</a>
                </li>
              </ul>
              <Link className="primary-btn2 btn-hover" href="/contact">
                Explore More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                </svg>
                <span style={{ top: "50.5px", left: "83.75px" }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Home2ProcessSection />
      <Footer />
    </>
  );
};

export default Service3Page;
