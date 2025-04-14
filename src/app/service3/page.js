import Footer from "@/components/Footer/Footer";
import Footer3 from "@/components/Footer/Footer3";
import Breadcrumb from "@/components/common/Breadcrumb";
import Header from "@/components/header/Header";
import Home2ProcessSection from "@/components/process-section/home2-process-section";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Come & Click - Agence Digitale",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const Service3Page = () => {
  return (
    <>
      <Header />
      <Breadcrumb bgImg="3" title2=" Services" title="Nos" />
      <div className="home2-services-section pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-60">
            <div className="col-lg-12">
              <div className="section-title four text-animation">
                <h2>
                  DYNAMISER VOTRE <br />
                  <span>SUCCÈS</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="services-wrapper">
            <div className="service-card">
              <h3>1. Design Graphique</h3>
              <p>
                Services de design graphique professionnels créant des visuels 
                impressionnants, des logos, des supports de marque et des 
                supports marketing qui capturent l'essence de votre marque.
              </p>
              <ul>
                <li>
                  <a href="#">Image de marque</a>
                </li>
                <li>
                  <a href="#">Création de logo</a>
                </li>
                <li>
                  <a href="#">Design d'impression</a>
                </li>
                <li>
                  <a href="#">Supports marketing</a>
                </li>
                <li>
                  <a href="#">Graphiques pour réseaux sociaux</a>
                </li>
                <li>
                  <a href="#">Design graphique</a>
                </li>
              </ul>
              <Link className="primary-btn2 btn-hover" href="/contact">
                En savoir plus
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
              <h3>2. Conception & Développement Web</h3>
              <p>
                Solutions web complètes, de la conception de sites web personnalisés
                au développement full-stack, créant des expériences en ligne
                réactives et engageantes.
              </p>
              <ul>
                <li>
                  <a href="#">Sites Web Personnalisés</a>
                </li>
                <li>
                  <a href="#">E-commerce</a>
                </li>
                <li>
                  <a href="#">Développement CMS</a>
                </li>
                <li>
                  <a href="#">Design Responsive</a>
                </li>
                <li>
                  <a href="#">Maintenance Web</a>
                </li>
              </ul>
              <Link className="primary-btn2 btn-hover" href="/contact">
                En savoir plus
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
              <h3>3. Développement d'Applications Mobiles</h3>
              <p>
                Développement d'applications mobiles natives et multiplateformes
                offrant des applications intuitives et riches en fonctionnalités
                pour iOS et Android.
              </p>
              <ul>
                <li>
                  <a href="#">Développement iOS</a>
                </li>
                <li>
                  <a href="#">Développement Android</a>
                </li>
                <li>
                  <a href="#">Multiplateforme</a>
                </li>
                <li>
                  <a href="#">Test d'Applications</a>
                </li>
                <li>
                  <a href="#">Maintenance d'Applications</a>
                </li>
              </ul>
              <Link className="primary-btn2 btn-hover" href="/contact">
                En savoir plus
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
              <h3>4. Design UX/UI</h3>
              <p>
                Solutions de design centrées sur l'utilisateur qui améliorent
                l'expérience utilisateur grâce à des interfaces intuitives,
                une navigation fluide et des interactions engageantes.
              </p>
              <ul>
                <li>
                  <a href="#">Recherche Utilisateur</a>
                </li>
                <li>
                  <a href="#">Wireframing</a>
                </li>
                <li>
                  <a href="#">Prototypage</a>
                </li>
                <li>
                  <a href="#">Design d'Interface</a>
                </li>
                <li>
                  <a href="#">Tests d'Utilisabilité</a>
                </li>
              </ul>
              <Link className="primary-btn2 btn-hover" href="/contact">
                En savoir plus
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
              <h3>5. Optimisation SEO</h3>
              <p>
                Services SEO complets pour améliorer la visibilité de votre site web,
                générer du trafic organique et atteindre un meilleur classement
                dans les moteurs de recherche.
              </p>
              <ul>
                <li>
                  <a href="#">Recherche de Mots-clés</a>
                </li>
                <li>
                  <a href="#">SEO On-Page</a>
                </li>
                <li>
                  <a href="#">SEO Technique</a>
                </li>
                <li>
                  <a href="#">Netlinking</a>
                </li>
                <li>
                  <a href="#">Analytique</a>
                </li>
              </ul>
              <Link className="primary-btn2 btn-hover" href="/contact">
                En savoir plus
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
