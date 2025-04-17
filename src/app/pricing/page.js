import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import React from "react";

export const metadata = {
  title: "Come & Click - Tarifs",
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};

const page = () => {


  return (
    <>
      <Header  />
      <div className="pricing-page pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="section-title-and-tab-btn mb-70">
          <h1>Nos Services et Tarifs</h1>
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
                      Développement Web
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
                      Sites de Réservation
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
                      Développement Mobile
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
                      Création de Logo
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
                      Services SEO
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
                  <div className="pricing-card">
                    <div className="pricing-top">
                      <span>Standard</span>
                      <h2>€600 - €1,300<sub>/unique</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Site Web 3-5 Pages</li>
                        <li>Design Responsive</li>
                        <li>Formulaires de Contact Basiques</li>
                        <li>Fonctionnalités Essentielles</li>
                        <li>Support de Base</li>
                      </ul>
                      <a href="/contact" className="primary-btn3 btn-hover">Commencer</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" >
                    <div className="pricing-top">
                      <span>Premium</span>
                      <h2>€1,400 - €2,800<sub>/unique</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Optimisation SEO</li>
                        <li>CMS Avancé</li>
                        <li>Animations Personnalisées</li>
                        <li>Support Premium</li>
                        <li>Optimisation des Performances</li>
                      </ul>
                      <a href="/contact" className="primary-btn3 btn-hover">Commencer</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="pricing-card" >
                    <div className="pricing-top">
                      <span>Plan Personnalisé</span>
                      <h2>Sur Demande<sub>/devis</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Développement Sur Mesure</li>
                        <li>Fonctionnalités Avancées</li>
                        <li>Intégrations Personnalisées</li>
                        <li>Support Prioritaire</li>
                        <li>Solutions Évolutives</li>
                      </ul>
                      <a href="/contact" className="primary-btn3 btn-hover">Nous Contacter</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* E-commerce Tab */}
            <div className="tab-pane fade" id="ecommerce" role="tabpanel">
              <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" >
                    <div className="pricing-top">
                      <span>Standard</span>
                      <h2>€1,200 - €2,200<sub>/unique</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Boutique en Ligne Simple</li>
                        <li>10-20 Produits</li>
                        <li>WooCommerce/Shopify</li>
                        <li>Passerelle de Paiement Basique</li>
                        <li>Support Standard</li>
                      </ul>
                      <a href="/contact" className="primary-btn3 btn-hover">Commencer</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" >
                    <div className="pricing-top">
                      <span>Premium</span>
                      <h2>€2,700 - €4,700<sub>/unique</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Configuration Marketplace</li>
                        <li>Gestion Avancée des Stocks</li>
                        <li>Automatisation des Processus</li>
                        <li>Systèmes de Paiement Sécurisés</li>
                        <li>Support Premium</li>
                      </ul>
                      <a href="/contact" className="primary-btn3 btn-hover">Commencer</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" >
                    <div className="pricing-top">
                      <span>Plan Personnalisé</span>
                      <h2>Sur Demande<sub>/devis</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>E-commerce Personnalisé</li>
                        <li>Intégration API</li>
                        <li>Configuration Multilingue</li>
                        <li>Fonctionnalités Avancées</li>
                        <li>Support 24/7</li>
                      </ul>
                      <a href="/contact" className="primary-btn3 btn-hover">Nous Contacter</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Sites Tab */}
            <div className="tab-pane fade" id="booking" role="tabpanel">
              <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" >
                    <div className="pricing-top">
                      <span>Standard</span>
                      <h2>€1,400 - €2,600<sub>/unique</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Module de Réservation</li>
                        <li>Paiements en Ligne</li>
                        <li>Gestion du Calendrier</li>
                        <li>Notifications de Base</li>
                        <li>Support Standard</li>
                      </ul>
                      <a href="/contact" className="primary-btn3 btn-hover">Commencer</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" >
                    <div className="pricing-top">
                      <span>Premium</span>
                      <h2>€3,100 - €5,600<sub>/unique</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Système de Gestion Avancé</li>
                        <li>Synchronisation des Plateformes</li>
                        <li>Disponibilité en Temps Réel</li>
                        <li>Analyses Avancées</li>
                        <li>Support Premium</li>
                      </ul>
                      <a href="/contact" className="primary-btn3 btn-hover">Commencer</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" >
                    <div className="pricing-top">
                      <span>Plan Personnalisé</span>
                      <h2>Sur Demande<sub>/devis</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Développement Personnalisé</li>
                        <li>Tarification Dynamique</li>
                        <li>Intégrations API</li>
                        <li>Fonctionnalités Personnalisées</li>
                        <li>Support 24/7</li>
                      </ul>
                      <a href="/contact" className="primary-btn3 btn-hover">Nous Contacter</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Development Tab */}
            <div className="tab-pane fade" id="mobile" role="tabpanel">
              <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6 mx-auto">
                  <div className="pricing-card" >
                    <div className="pricing-top">
                      <span>Développement Personnalisé</span>
                      <h2>Devis Requis<sub>/projet</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Développement iOS & Android</li>
                        <li>Fonctionnalités Personnalisées</li>
                        <li>Design UI/UX</li>
                        <li>Publication sur l'App Store</li>
                        <li>Support Continu</li>
                      </ul>
                      <a href="/contact" className="primary-btn3 btn-hover">Nous Contacter</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Logo Design Tab */}
            <div className="tab-pane fade" id="logo" role="tabpanel">
              <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" >
                    <div className="pricing-top">
                      <span>Standard</span>
                      <h2>€80 - €230<sub>/projet</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>3 Concepts de Logo</li>
                        <li>2 Révisions</li>
                        <li>Fichiers Sources</li>
                        <li>Directives de Base</li>
                        <li>Support Standard</li>
                      </ul>
                        <a href="/contact" className="primary-btn3 btn-hover">Commencer</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" >
                    <div className="pricing-top">
                      <span>Premium</span>
                      <h2>€280 - €530<sub>/projet</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>5 Concepts de Logo</li>
                        <li>5 Révisions</li>
                        <li>Variations du Logo</li>
                        <li>Kit Réseaux Sociaux</li>
                        <li>Support Premium</li>
                      </ul>
                      <a href="/contact" className="primary-btn3 btn-hover">Commencer</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" >
                    <div className="pricing-top">
                      <span>Plan Personnalisé</span>
                      <h2>Sur Demande<sub>/devis</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Identité de Marque Complète</li>
                        <li>Guide de Marque</li>
                        <li>Révisions Illimitées</li>
                        <li>Pack d'Assets Complet</li>
                        <li>Support Prioritaire</li>
                      </ul>
                      <a href="/contact" className="primary-btn3 btn-hover">Nous Contacter</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SEO Services Tab */}
            <div className="tab-pane fade" id="seo" role="tabpanel">
              <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" >
                    <div className="pricing-top">
                      <span>Pack Basique</span>
                      <h2>€300 - €1,000<sub>/projet</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Audit SEO</li>
                        <li>Optimisation Technique</li>
                        <li>5 Mots-clés Cibles</li>
                        <li>Rapports Mensuels</li>
                        <li>Support de Base</li>
                      </ul>
                      <a href="/contact" className="primary-btn3 btn-hover">Commencer</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" >
                    <div className="pricing-top">
                      <span>Pack Avancé</span>
                      <h2>€1,100 - €2,300<sub>/projet</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Stratégie de Contenu</li>
                        <li>Création de Liens</li>
                        <li>Suivi sur 3 Mois</li>
                        <li>Analyse Concurrentielle</li>
                        <li>Support Premium</li>
                      </ul>
                      <a href="/contact" className="primary-btn3 btn-hover">Commencer</a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="pricing-card" >
                    <div className="pricing-top">
                      <span>Plan Personnalisé</span>
                      <h2>Sur Demande<sub>/devis</sub></h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li>Stratégie SEO Complète</li>
                        <li>SEO International</li>
                        <li>SEO E-commerce</li>
                        <li>Rapports Personnalisés</li>
                        <li>Support 24/7</li>
                      </ul>
                      <a href="/contact" className="primary-btn3 btn-hover">Nous Contacter</a>
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
