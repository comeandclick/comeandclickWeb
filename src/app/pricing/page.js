import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import React from "react";

export const metadata = {
  title: "Come & Click - Pricing",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const page = () => {
  // Using darker color codes for cards
  const cardColors = {
    blue: "#BBDEFB", // Darker blue
    pink: "#F8BBD0", // Darker pink  
    green: "#C8E6C9" // Darker green
  };

  return (
    <>
      <Header hideThemeSwitch={true} />
      <div className="pricing-page pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="section-title-and-tab-btn mb-70">
            <h1>Our Services & Pricing Plans</h1>
            <div className="arrow-and-tab-btn">
              <svg viewBox="0 0 987 58" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 29H985M985 29C976.333 32.1667 959 41.4 959 57M985 29C976.333 25.8333 959 15.8 959 1"
                  strokeLinecap="round"
                />
              </svg>
              <div className="tab-btn-area justify-content-center">
                <nav className="nav-wrapper">
                  <div className="nav nav-tabs flex-wrap" id="nav-tab" role="tablist">
                    <button
                      className="nav-link active flex-grow-1"
                      id="website-tab"
                      data-bs-toggle="tab" 
                      data-bs-target="#website"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      Website Development
                    </button>
                    <button
                      className="nav-link flex-grow-1"
                      id="ecommerce-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#ecommerce"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      E-commerce
                    </button>
                    <button
                      className="nav-link flex-grow-1" 
                      id="booking-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#booking"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Booking Sites
                    </button>
                    <button
                      className="nav-link flex-grow-1"
                      id="mobile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#mobile"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Mobile Development
                    </button>
                    <button
                      className="nav-link flex-grow-1"
                      id="logo-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#logo"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Logo Design
                    </button>
                    <button
                      className="nav-link flex-grow-1"
                      id="seo-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#seo"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      SEO Services
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div className="tab-content" id="nav-tabContent">
            {/* Website Development Tab */}
            <div className="tab-pane fade show active" id="website" role="tabpanel">
              <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" style={{backgroundColor: cardColors.blue}}>
                    <div className="pricing-top">
                      <span>Standard</span>
                      <h2>€600 - €1,300<sub>/one-time</sub></h2>
                    </div>
                    <div className="pricing-content" style={{color: '#000000'}}>
                      <ul>
                        <li>3-5 Pages Website</li>
                        <li>Responsive Design</li>
                        <li>Basic Contact Forms</li>
                        <li>Essential Features</li>
                        <li>Basic Support</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">Get Started</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" style={{backgroundColor: cardColors.pink}}>
                    <div className="pricing-top">
                      <span>Premium</span>
                      <h2>€1,400 - €2,800<sub>/one-time</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>SEO Optimization</li>
                        <li>Advanced CMS</li>
                        <li>Custom Animations</li>
                        <li>Premium Support</li>
                        <li>Performance Optimization</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">Get Started</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" style={{backgroundColor: cardColors.green}}>
                    <div className="pricing-top">
                      <span>Custom Plan</span>
                      <h2>On Request<sub>/quote</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Tailor-made Development</li>
                        <li>Advanced Features</li>
                        <li>Custom Integrations</li>
                        <li>Priority Support</li>
                        <li>Scalable Solutions</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* E-commerce Tab */}
            <div className="tab-pane fade" id="ecommerce" role="tabpanel">
              <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" style={{backgroundColor: cardColors.blue}}>
                    <div className="pricing-top">
                      <span>Standard</span>
                      <h2>€1,200 - €2,200<sub>/one-time</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Simple Online Store</li>
                        <li>10-20 Products</li>
                        <li>WooCommerce/Shopify</li>
                        <li>Basic Payment Gateway</li>
                        <li>Standard Support</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">Get Started</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" style={{backgroundColor: cardColors.pink}}>
                    <div className="pricing-top">
                      <span>Premium</span>
                      <h2>€2,700 - €4,700<sub>/one-time</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Marketplace Setup</li>
                        <li>Advanced Stock Management</li>
                        <li>Process Automation</li>
                        <li>Secure Payment Systems</li>
                        <li>Premium Support</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">Get Started</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" style={{backgroundColor: cardColors.green}}>
                    <div className="pricing-top">
                      <span>Custom Plan</span>
                      <h2>On Request<sub>/quote</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Custom E-commerce</li>
                        <li>API Integration</li>
                        <li>Multilingual Setup</li>
                        <li>Advanced Features</li>
                        <li>24/7 Support</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Sites Tab */}
            <div className="tab-pane fade" id="booking" role="tabpanel">
              <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" style={{backgroundColor: cardColors.blue}}>
                    <div className="pricing-top">
                      <span>Standard</span>
                      <h2>€1,400 - €2,600<sub>/one-time</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Booking Module</li>
                        <li>Online Payments</li>
                        <li>Calendar Management</li>
                        <li>Basic Notifications</li>
                        <li>Standard Support</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">Get Started</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" style={{backgroundColor: cardColors.pink}}>
                    <div className="pricing-top">
                      <span>Premium</span>
                      <h2>€3,100 - €5,600<sub>/one-time</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Advanced Management System</li>
                        <li>Platform Synchronization</li>
                        <li>Real-time Availability</li>
                        <li>Advanced Analytics</li>
                        <li>Premium Support</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">Get Started</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" style={{backgroundColor: cardColors.green}}>
                    <div className="pricing-top">
                      <span>Custom Plan</span>
                      <h2>On Request<sub>/quote</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Custom Development</li>
                        <li>Dynamic Pricing</li>
                        <li>API Integrations</li>
                        <li>Custom Features</li>
                        <li>24/7 Support</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Development Tab */}
            <div className="tab-pane fade" id="mobile" role="tabpanel">
              <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6 mx-auto">
                  <div className="pricing-card" style={{backgroundColor: cardColors.pink}}>
                    <div className="pricing-top">
                      <span>Custom Development</span>
                      <h2>Quote Required<sub>/project</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>iOS & Android Development</li>
                        <li>Custom Features</li>
                        <li>UI/UX Design</li>
                        <li>App Store Publishing</li>
                        <li>Ongoing Support</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Logo Design Tab */}
            <div className="tab-pane fade" id="logo" role="tabpanel">
              <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" style={{backgroundColor: cardColors.blue}}>
                    <div className="pricing-top">
                      <span>Standard</span>
                      <h2>€80 - €230<sub>/project</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>3 Logo Concepts</li>
                        <li>2 Revisions</li>
                        <li>Source Files</li>
                        <li>Basic Guidelines</li>
                        <li>Standard Support</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">Get Started</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" style={{backgroundColor: cardColors.pink}}>
                    <div className="pricing-top">
                      <span>Premium</span>
                      <h2>€280 - €530<sub>/project</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>5 Logo Concepts</li>
                        <li>5 Revisions</li>
                        <li>Logo Variations</li>
                        <li>Social Media Kit</li>
                        <li>Premium Support</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">Get Started</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" style={{backgroundColor: cardColors.green}}>
                    <div className="pricing-top">
                      <span>Custom Plan</span>
                      <h2>On Request<sub>/quote</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Complete Branding</li>
                        <li>Brand Guidelines</li>
                        <li>Unlimited Revisions</li>
                        <li>Full Asset Package</li>
                        <li>Priority Support</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SEO Services Tab */}
            <div className="tab-pane fade" id="seo" role="tabpanel">
              <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" style={{backgroundColor: cardColors.blue}}>
                    <div className="pricing-top">
                      <span>Basic Package</span>
                      <h2>€300 - €1,000<sub>/project</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>SEO Audit</li>
                        <li>Technical Optimization</li>
                        <li>5 Target Keywords</li>
                        <li>Monthly Reports</li>
                        <li>Basic Support</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">Get Started</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" style={{backgroundColor: cardColors.pink}}>
                    <div className="pricing-top">
                      <span>Advanced Package</span>
                      <h2>€1,100 - €2,300<sub>/project</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Content Strategy</li>
                        <li>Link Building</li>
                        <li>3-Month Tracking</li>
                        <li>Competitor Analysis</li>
                        <li>Premium Support</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">Get Started</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" style={{backgroundColor: cardColors.green}}>
                    <div className="pricing-top">
                      <span>Custom Plan</span>
                      <h2>On Request<sub>/quote</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Full-scale SEO Strategy</li>
                        <li>International SEO</li>
                        <li>E-commerce SEO</li>
                        <li>Custom Reporting</li>
                        <li>24/7 Support</li>
                      </ul>
                      <a href="/contact" className="primary-btn3">Contact Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
