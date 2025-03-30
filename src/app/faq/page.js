import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import React from "react";

export const metadata = {
  title: "Come & Click - Digital Agency",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const faqData = [
  {
    id: 1,
    question: "What services does your digital agency specialize in?",
    answer:
      "Our agency specializes in comprehensive digital solutions including web development, UI/UX design, ecommerce development, logo design, SEO optimization, and digital marketing. We provide end-to-end services to help businesses establish and grow their digital presence.",
  },
  {
    id: 2,
    question: "How do you approach website development projects?",
    answer:
      "We follow a structured approach starting with requirement analysis, followed by UI/UX design, development, testing, and deployment. We use modern technologies and best practices to create responsive, fast-loading, and user-friendly websites that align with your business goals.",
  },
  {
    id: 3,
    question: "What is your typical project timeline and process?",
    answer:
      "Project timelines vary based on complexity, but typically range from 4-12 weeks. Our process includes initial consultation, proposal submission, design phase, development phase, testing, and launch. We maintain transparent communication throughout and provide regular progress updates.",
  },
  {
    id: 4,
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we offer comprehensive maintenance packages that include regular updates, security patches, performance optimization, and technical support. We also provide training to your team to help manage day-to-day website operations.",
  },
  {
    id: 5,
    question: "How do you handle project pricing?",
    answer:
      "Our pricing is project-based and depends on factors like scope, complexity, and timeline. We provide detailed proposals with clear cost breakdowns and milestone-based payment schedules. We ensure transparency in pricing with no hidden costs.",
  },
  {
    id: 6,
    question: "What makes your agency different from others?",
    answer:
      "We combine technical expertise with creative innovation, focusing on delivering measurable results. Our team stays updated with latest technologies, provides personalized attention, and ensures quality deliverables. We believe in building long-term partnerships rather than just completing projects.",
  },
  {
    id: 7,
    question: "How do you ensure project quality and timely delivery?",
    answer:
      "We implement robust quality assurance processes, use project management tools, and follow agile methodologies. Our team conducts regular internal reviews, maintains coding standards, and performs thorough testing to ensure high-quality deliverables within agreed timelines.",
  },
  {
    id: 8,
    question: "Can you help with improving our existing website?",
    answer:
      "Absolutely! We offer website audit services to analyze your current website's performance, user experience, and technical aspects. Based on the audit, we provide recommendations and can implement improvements in design, functionality, speed, and SEO.",
  },
];

const Page = () => {
  return (
    <>
      <Header />
      <div className="faq-section pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="section-title six mb-70">
            <h2>FAQ&apos;s</h2>
            <div className="dash-and-paragraph">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 877 64">
                <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM875 3L875.271 3.42013L876.697 2.5H875V3ZM842.084 64L845.265 59.1819L839.502 58.836L842.084 64ZM3 3.5H875V2.5H3V3.5ZM874.729 2.57987C861.302 11.2438 844.485 27.4669 841.856 59.4675L842.852 59.5494C845.45 27.938 862.03 11.9643 875.271 3.42013L874.729 2.57987Z" />
              </svg>
              <p>
                Find answers to commonly asked questions about our digital
                agency services and processes.
              </p>
            </div>
          </div>
          <div className="faq-wrap">
            <div className="row g-4">
              {faqData.map((faq) => (
                <div className="col-lg-6" key={faq.id}>
                  <div className="single-faq">
                    <h6>
                      {faq.id}. {faq.question}
                    </h6>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-slider-section">
        <div className="marquee">
          <div className="marquee__group">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>{" "}
              GRAPHIC DESIGN
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              WEB DESIGN & DEVELOPMENT
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              SEO Optimization
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>
              MOBILE APP DEVELOPMENT
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              UX/UI DESIGN
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              DIGITAL MARKETING
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>
              LOGO DESIGN
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              WEB DESIGN & DEVELOPMENT
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              SEO Optimization
            </span>
          </div>
          <div className="marquee__group">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>{" "}
              GRAPHIC DESIGN
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              WEB DESIGN
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              LANDING PAGE DESIGN
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>
              UX/UI DESIGN
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              DIGITAL MARKETING
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              BRANDING DESIGN
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>
              WEB DESIGN & DEVELOPMENT
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              SEO Optimization
            </span>
            <span>
              <svg
                className="circle"
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
              >
                <circle cx="8.5" cy="8.5" r={8} />
              </svg>
              UX/UI DESIGN
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
