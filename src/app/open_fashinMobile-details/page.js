"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const OpenFashionMobileDetails = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 25,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-5",
        prevEl: ".prev-5",
      },
    };
  }, []);
  return (
    <>
      <Header />
      <div className="details-page-wrapper portfolio-details pt-130 pb-130">
        <div className="container-lg container-fluid">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <div className="post-tag-and-title">
                <h1 className="post-title">Open Fashion - Mobile App</h1>
                <ul className="post-category">
                  <li>
                    <Link href="#">Mobile App</Link>
                  </li>
                  <li>
                    <Link href="#">E-commerce</Link>
                  </li>
                  <li>
                    <Link href="#">Fashion</Link>
                  </li>
                  <li>
                    <Link href="#">UI/UX</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <span className="line-break" />
          <span className="line-break" />
          <span className="line-break" />
          <div className="portfolio-details-post-thumb-slider">
            <div className="row">
              <div className="col-lg-12">
                <Swiper
                  {...settings}
                  className="swiper service-post-thumb-slider"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="/assets/img/open_fashinMobile/1.png"
                        alt=""
                        style={{
                          maxWidth: "85%",
                          margin: "0 auto",
                          display: "block",
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="/assets/img/open_fashinMobile/2.png"
                        alt=""
                        style={{
                          maxWidth: "85%",
                          margin: "0 auto",
                          display: "block",
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="/assets/img/open_fashinMobile/3.png"
                        alt=""
                        style={{
                          maxWidth: "85%",
                          margin: "0 auto",
                          display: "block",
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="/assets/img/open_fashinMobile/4.png"
                        alt=""
                        style={{
                          maxWidth: "85%",
                          margin: "0 auto",
                          display: "block",
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="/assets/img/open_fashinMobile/5.png"
                        alt=""
                        style={{
                          maxWidth: "85%",
                          margin: "0 auto",
                          display: "block",
                        }}
                      />
                    </SwiperSlide>
                  </div>
                  <div className="slider-btn-group">
                    <div className="slider-btn prev-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={15}
                        height={11}
                        viewBox="0 0 15 11"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.416666 5.9668H15V4.7168H0.416666V5.9668Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.04115 4.7168C3.98115 4.7168 6.38281 7.3018 6.38281 10.0585V10.6835H5.13281V10.0585C5.13281 7.96596 3.26448 5.9668 1.04115 5.9668H0.416979V4.7168H1.04115Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.04115 5.96667C3.98115 5.96667 6.38281 3.38167 6.38281 0.625V0H5.13281V0.625C5.13281 2.71833 3.26448 4.71667 1.04115 4.71667H0.416979V5.96667H1.04115Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="slider-btn next-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={15}
                        height={11}
                        viewBox="0 0 15 11"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.5833 5.9668H0V4.7168H14.5833V5.9668Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.9589 4.7168C11.0189 4.7168 8.61719 7.3018 8.61719 10.0585V10.6835H9.86719V10.0585C9.86719 7.96596 11.7355 5.9668 13.9589 5.9668H14.583V4.7168H13.9589Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.9589 5.96667C11.0189 5.96667 8.61719 3.38167 8.61719 0.625V0H9.86719V0.625C9.86719 2.71833 11.7355 4.71667 13.9589 4.71667H14.583V5.96667H13.9589Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
          <span className="line-break" />
          <span className="line-break" />
          <span className="line-break" />
          <div className="details-page-content mb-130">
            <h3>Project Overview</h3>
            <div className="row g-lg-4 gy-3">
              <div className="col-lg-6">
                <p className="first-para">
                  Open Fashion is a sophisticated mobile e-commerce application designed 
                  for fashion enthusiasts. The app offers a seamless shopping experience 
                  with a focus on high-end fashion, featuring a curated collection of 
                  clothing, accessories, and lifestyle products from premium brands.
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  The application combines elegant design with powerful functionality, 
                  offering users an intuitive interface to browse collections, make purchases, 
                  and stay updated with the latest fashion trends. The minimalist aesthetic 
                  ensures that the products remain the focal point while providing a luxurious 
                  shopping experience.
                </p>
              </div>
            </div>
            <span className="line-break" />
            <span className="line-break" />
            <span className="line-break" />
            <div className="row g-lg-4 gy-5">
              <div className="col-lg-6">
                <h3>Key Features & Functionality</h3>
                <p>
                  The app was developed with a focus on user experience and performance, 
                  incorporating modern mobile app development practices and innovative 
                  features to enhance the shopping journey.
                </p>
                <br />
                <ul>
                  <li>
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z" />
                        <path d="M10.9684 4.96979C10.9613 4.9767 10.9546 4.98404 10.9484 4.99179L7.47539 9.41679L5.38239 7.32279C5.24021 7.19031 5.05216 7.11819 4.85786 7.12162C4.66356 7.12505 4.47818 7.20376 4.34076 7.34117C4.20335 7.47858 4.12464 7.66397 4.12121 7.85827C4.11778 8.05257 4.18991 8.24062 4.32239 8.38279L6.96839 11.0298C7.03967 11.1009 7.12455 11.157 7.21797 11.1946C7.31139 11.2323 7.41143 11.2507 7.51213 11.2488C7.61283 11.247 7.71212 11.2249 7.80408 11.1838C7.89604 11.1427 7.97879 11.0835 8.04739 11.0098L12.0394 6.01979C12.1753 5.87712 12.2496 5.68669 12.2463 5.48966C12.2429 5.29263 12.1622 5.10484 12.0214 4.96689C11.8807 4.82893 11.6914 4.7519 11.4943 4.75244C11.2973 4.75299 11.1083 4.83106 10.9684 4.96979Z" />
                      </g>
                    </svg>
                    Personalized product recommendations and style suggestions
                  </li>
                  <li>
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z" />
                        <path d="M10.9684 4.96979C10.9613 4.9767 10.9546 4.98404 10.9484 4.99179L7.47539 9.41679L5.38239 7.32279C5.24021 7.19031 5.05216 7.11819 4.85786 7.12162C4.66356 7.12505 4.47818 7.20376 4.34076 7.34117C4.20335 7.47858 4.12464 7.66397 4.12121 7.85827C4.11778 8.05257 4.18991 8.24062 4.32239 8.38279L6.96839 11.0298C7.03967 11.1009 7.12455 11.157 7.21797 11.1946C7.31139 11.2323 7.41143 11.2507 7.51213 11.2488C7.61283 11.247 7.71212 11.2249 7.80408 11.1838C7.89604 11.1427 7.97879 11.0835 8.04739 11.0098L12.0394 6.01979C12.1753 5.87712 12.2496 5.68669 12.2463 5.48966C12.2429 5.29263 12.1622 5.10484 12.0214 4.96689C11.8807 4.82893 11.6914 4.7519 11.4943 4.75244C11.2973 4.75299 11.1083 4.83106 10.9684 4.96979Z" />
                      </g>
                    </svg>
                    Advanced search and filtering with size and color options
                  </li>
                  <li>
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z" />
                        <path d="M10.9684 4.96979C10.9613 4.9767 10.9546 4.98404 10.9484 4.99179L7.47539 9.41679L5.38239 7.32279C5.24021 7.19031 5.05216 7.11819 4.85786 7.12162C4.66356 7.12505 4.47818 7.20376 4.34076 7.34117C4.20335 7.47858 4.12464 7.66397 4.12121 7.85827C4.11778 8.05257 4.18991 8.24062 4.32239 8.38279L6.96839 11.0298C7.03967 11.1009 7.12455 11.157 7.21797 11.1946C7.31139 11.2323 7.41143 11.2507 7.51213 11.2488C7.61283 11.247 7.71212 11.2249 7.80408 11.1838C7.89604 11.1427 7.97879 11.0835 8.04739 11.0098L12.0394 6.01979C12.1753 5.87712 12.2496 5.68669 12.2463 5.48966C12.2429 5.29263 12.1622 5.10484 12.0214 4.96689C11.8807 4.82893 11.6914 4.7519 11.4943 4.75244C11.2973 4.75299 11.1083 4.83106 10.9684 4.96979Z" />
                      </g>
                    </svg>
                    Secure payment integration and order tracking
                  </li>
                  <li>
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z" />
                        <path d="M10.9684 4.96979C10.9613 4.9767 10.9546 4.98404 10.9484 4.99179L7.47539 9.41679L5.38239 7.32279C5.24021 7.19031 5.05216 7.11819 4.85786 7.12162C4.66356 7.12505 4.47818 7.20376 4.34076 7.34117C4.20335 7.47858 4.12464 7.66397 4.12121 7.85827C4.11778 8.05257 4.18991 8.24062 4.32239 8.38279L6.96839 11.0298C7.03967 11.1009 7.12455 11.157 7.21797 11.1946C7.31139 11.2323 7.41143 11.2507 7.51213 11.2488C7.61283 11.247 7.71212 11.2249 7.80408 11.1838C7.89604 11.1427 7.97879 11.0835 8.04739 11.0098L12.0394 6.01979C12.1753 5.87712 12.2496 5.68669 12.2463 5.48966C12.2429 5.29263 12.1622 5.10484 12.0214 4.96689C11.8807 4.82893 11.6914 4.7519 11.4943 4.75244C11.2973 4.75299 11.1083 4.83106 10.9684 4.96979Z" />
                      </g>
                    </svg>
                    Wishlist and favorites management system
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <img src="/assets/img/open_fashinMobile/5.png" alt="" />
              </div>
            </div>
            <span className="line-break" />
            <span className="line-break" />
            <span className="line-break" />
            <div className="row g-4 align-items-center">
              <div className="col-md-12">
                <h3>Technical Implementation</h3>
                <p>
                  The app was developed using React Native for cross-platform compatibility, 
                  ensuring a native-like experience on both iOS and Android devices. We 
                  implemented state-of-the-art security measures for payment processing 
                  and user data protection.
                </p>
                <br />
                <p>
                  Performance optimization was a key focus, with implementation of efficient 
                  image loading, caching mechanisms, and smooth animations. The app also 
                  features offline capabilities and real-time inventory updates.
                </p>
              </div>
            </div>
            <span className="line-break" />
            <span className="line-break" />
            <img
              src="/assets/img/open_fashinMobile/2.png"
              alt=""
              style={{
                maxWidth: "85%",
                margin: "0 auto",
                display: "block",
              }}
            />
            <span className="line-break" />
            <span className="line-break" />
            <span className="line-break" />
            <img
              src="/assets/img/open_fashinMobile/3.png"
              alt=""
              style={{
                maxWidth: "85%",
                margin: "0 auto",
                display: "block",
              }}
            />
            <span className="line-break" />
            <span className="line-break" />
            <span className="line-break" />
            <img
              src="/assets/img/open_fashinMobile/4.png"
              alt=""
              style={{
                maxWidth: "85%",
                margin: "0 auto",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OpenFashionMobileDetails;
