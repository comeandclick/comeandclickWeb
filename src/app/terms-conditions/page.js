import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import React from "react";
export const metadata = {
  title: "Come&Click - Digital Marketing Agency",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const page = () => {
  return (
    <>
      <Header />
      <div className="terms-and-conditions-page pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-130">
            <div className="col-lg-12">
              <div className="section-title six">
                <h2>Terms &amp; Conditions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 ">
              <div className="update-date mb-30">
                <h6>
                  <i className="bi bi-caret-right-fill" /> Last Updated
                </h6>
                <p>15 January, 2025</p>
              </div>
            </div>
            <div className="col-lg-12 mb-40">
              <div className="terms-and-conditions">
                <h4>1. Terms &amp; Conditions</h4>
                <p>
                  Welcome to Come&Click. These terms and conditions outline the rules and regulations
                  for the use of our development and design services. By engaging our services,
                  you agree to accept these terms and conditions in full. Our services include
                  web development, logo design, mobile app development, and e-commerce solutions.
                </p>
                <ul>
                  <li>
                    <strong>i ) Service Agreement: </strong> All development projects begin with detailed
                    requirements gathering and project scoping. Changes to project scope may affect delivery
                    timeline and costs. We require written approval before implementing any significant
                    changes to ongoing projects.
                  </li>
                  <li>
                    <strong>ii ) Payment Terms:</strong> We operate on a milestone-based payment structure
                    for development projects. Design work requires a 50% upfront payment. All invoices must
                    be settled within 15 days of issue. Work may be suspended for overdue payments.
                  </li>
                  <li>
                    <strong>iii ) Content Rights:</strong> All code and designs created by Come&Click remain
                    our intellectual property until full payment is received. We retain the right to use
                    completed projects as portfolio examples unless explicitly agreed otherwise.
                  </li>
                  <li>
                    <strong>iv ) Project Delivery:</strong> We provide regular project updates and progress
                    reports. Clients receive access to development environments and scheduled review meetings
                    throughout the project lifecycle.
                  </li>
                </ul>
                <p>
                  These terms ensure a professional relationship between Come&Click and our clients. We
                  recommend reviewing them thoroughly before engaging our services. Our team is available
                  to clarify any points.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="terms-and-conditions">
                <h4>2. Privacy Policy</h4>
                <p>
                  At Come&Click, protecting your data is paramount. We handle sensitive project data,
                  source code, and client information with the utmost care. Our data handling practices
                  comply with current privacy regulations, and we implement robust security measures
                  to protect all client information.
                </p>
                <p>
                  Our privacy policy covers data collection, usage, and storage practices. We collect
                  data necessary for project development and testing. This includes application logs,
                  user testing data, and project management information. All data is stored securely and
                  accessed only by authorized team members.
                </p>
                <p>
                  We maintain strict confidentiality regarding our clients' business information and
                  development strategies. Non-disclosure agreements are available upon request. Our team
                  undergoes regular training on data protection and privacy best practices.
                </p>
                <p>
                  Come&Click is committed to transparency in our data practices. We regularly update
                  our privacy policies to reflect changes in regulations and industry standards. Clients
                  receive prompt notification of any changes to our data handling procedures.
                </p>
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
