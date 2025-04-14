"use client";
import React, { useEffect } from "react";
import Link from "next/link";

const Home3BannerSection = () => {
  useEffect(() => {
    document.body.classList.add("home1-bg");
  }, []);
  return (
    <>
      <div
        className="home3-banner-area"
        style={{
          position: "relative",
          overflow: "hidden",
          height: "90vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
          src="assets/video/banner4.mp4"
        />
        <div className="container-lg container-fluid">
          <div className="row g-lg-4 gy-5 justify-content-center text-center">
            <div className="col-lg-9">
              <div className="banner-content text-animation">
                <h1>
                  Solutions{" "}
                  <span
                    style={{
                      fontFamily: "var(--font-PlayFair)",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                  >
                    Numériques
                  </span>{" "}
                  Créatives
                </h1>
                <p
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    color: "#FFFFFFFF",
                    fontSize: "18px",
                    marginTop: "20px",
                    marginBottom: "30px",
                    width: "80%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  Notre équipe d'experts créatifs réalise des designs
                  exceptionnels et de haute qualité adaptés à vos besoins,
                  garantissant que votre marque se démarque sur un marché concurrentiel.
                </p>
                <Link href="/contact" className="primary-btn3 btn-hover">
                  Appel de réservation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="text-slider-section ">
        <div className="marquee">
          <div className="marquee__group">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40">
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg> WEBSITE DEVELOPMENT
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17" fill="none">
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>ECOMMERCE
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17" fill="none">
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>CREATION OF CREATIVES
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40">
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>ADVERTISING CAMPAIGN MANAGEMENT
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17" fill="none">
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>AI CHATBOT CREATION
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17" fill="none">
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>WEB DESIGN
            </span>
          </div>
          <div className="marquee__group">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40">
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg> WEBSITE DEVELOPMENT
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17" fill="none">
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>ECOMMERCE
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17" fill="none">
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>CREATION OF CREATIVES
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 40 40">
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>ADVERTISING CAMPAIGN MANAGEMENT
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17" fill="none">
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>AI CHATBOT CREATION
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17" fill="none">
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>WEB DESIGN
            </span>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home3BannerSection;
