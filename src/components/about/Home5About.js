import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const Home5About = () => {
  return (
    <>
      <div className="home5-about-section pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-8">
              <div className="section-title text-animation">
                <h2>
                  Valoriser l'identité d'entreprise grâce à l'excellence
                  digitale
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-5">
              <ul className="counter-wrap">
                <li className="single-counter">
                  <div className="number">
                    <h2 className="counter">60</h2>
                    <span>+</span>
                  </div>
                  <p>Projets Réussis</p>
                </li>
                <li className="single-counter">
                  <div className="number">
                    <h2 className="counter">32</h2>
                    <span>+</span>
                  </div>
                  <p>Clients Satisfaits</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-7">
              <div className="about-content-wrap">
                <div className="about-content">
                  <p>
                    Depuis 2 ans, Come & Click est à la pointe de la
                    transformation digitale, aidant les entreprises à établir et
                    renforcer leur présence en ligne. Notre portefeuille de
                    services complet comprend le développement web, la création
                    d'identité de marque, le marketing digital et les solutions
                    e-commerce. Nous sommes fiers de notre capacité à comprendre
                    les besoins uniques de chaque client et à proposer des
                    solutions sur mesure qui favorisent une réelle croissance.
                    Notre équipe jeune et dynamique apporte un regard neuf tout
                    en maintenant un niveau d'excellence professionnelle dans
                    chaque projet. Des startups aux entreprises bien établies,
                    nous avons aidé de nombreux clients à atteindre leurs
                    objectifs digitaux grâce à des stratégies innovantes et des
                    technologies de pointe. Notre engagement envers la qualité
                    et la satisfaction client fait de nous un partenaire de
                    confiance dans l'univers digital.
                  </p>

                  <div className="star">
                    <svg
                      width={125}
                      height={238}
                      viewBox="0 0 125 238"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M38.6309 0L0 56.3948V181.605L38.6309 238L36.7294 169.585L101.181 192.524L59.4476 138.332L125 119L59.4476 99.6675L101.181 45.4764L36.7294 68.415L38.6309 0Z" />
                    </svg>
                  </div>
                </div>
                <Link className="primary-btn4 btn-hover" href="/contact">
                  Rejoignez l'aventure
                  <svg
                    width={11}
                    height={11}
                    viewBox="0 0 11 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.9532 0.0585938L10.7354 1.14748C10.5496 2.07672 10.2769 3.53489 10.1863 5.1213C10.095 6.71893 10.1931 8.37925 10.7023 9.73705C10.8477 10.1249 10.6512 10.5572 10.2634 10.7026C9.87551 10.8481 9.4432 10.6516 9.29776 10.2637C8.68194 8.62153 8.59252 6.71935 8.68873 5.03573C8.72553 4.39179 8.79018 3.76993 8.86659 3.19447L1.53034 10.5307C1.23745 10.8236 0.762572 10.8236 0.469679 10.5307C0.176786 10.2378 0.176786 9.76295 0.469679 9.47006L7.82528 2.11446C7.18273 2.19925 6.48717 2.27186 5.77637 2.31171C4.07615 2.40705 2.18197 2.32292 0.70457 1.68975C0.323847 1.52658 0.147484 1.08567 0.31065 0.704951C0.473817 0.324229 0.914726 0.147865 1.29545 0.311032C2.44305 0.802862 4.04886 0.906228 5.69239 0.814067C7.31348 0.723165 8.86779 0.449612 9.86179 0.263237L10.9532 0.0585938Z"
                    />
                  </svg>
                  <span style={{ top: "50.5px", left: "83.75px" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partner-area three mb-130"></div>
    </>
  );
};

export default Home5About;
