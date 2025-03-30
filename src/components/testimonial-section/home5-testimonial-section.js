"use client";
import Marquee from "react-fast-marquee";
import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home5TestimonialSection = () => {
  const testimonialData = [
    {
      id: 1,
      tag: "Website Development",
      description:
        "Exceptional web development service! They built us a modern, responsive website that perfectly captures our brand and drives conversions. The attention to technical details was impressive.",
      authorName: "John Smith",
      designation: "Tech Solutions, CEO",
    },
    {
      id: 2,
      tag: "Website Development", 
      description:
        "Outstanding development team that delivered a fast, secure and scalable website. Their coding expertise and problem-solving abilities exceeded our expectations.",
      authorName: "Michael Williams",
      designation: "Digital Innovations, CTO",
    },
    {
      id: 3,
      tag: "Ecommerce Development",
      description:
        "They built us a powerful ecommerce platform with seamless payment integration, inventory management and an intuitive shopping experience. Sales have increased significantly.",
      authorName: "David Brown",
      designation: "Fashion Retail, Owner",
    },
    {
      id: 4,
      tag: "Ecommerce Development",
      description:
        "The ecommerce solution they developed revolutionized our online business. Great features like product filtering, wishlists and a smooth checkout process.",
      authorName: "James Anderson",
      designation: "Electronics Store, CEO",
    },
    {
      id: 5,
      tag: "Logo Design",
      description:
        "Created a stunning, memorable logo that perfectly represents our brand identity. Their creative process and attention to detail was remarkable.",
      authorName: "William Taylor",
      designation: "Startup Founder",
    },
    {
      id: 6,
      tag: "Logo Design",
      description:
        "Professional logo design service that captured the essence of our business. The final design is versatile and makes a strong impact.",
      authorName: "Thomas Wilson",
      designation: "Marketing Agency, Director",
    },
    {
      id: 7,
      tag: "Website Design",
      description:
        "Incredible UI/UX design that transformed our website. The modern, clean interface and thoughtful user experience has greatly improved engagement.",
      authorName: "Richard Davis",
      designation: "SaaS Company, CEO",
    },
    {
      id: 8,
      tag: "SEO Services",
      description:
        "Their SEO expertise dramatically improved our search rankings and organic traffic. Great technical optimization and content strategy.",
      authorName: "Charles Miller",
      designation: "Online Business, Founder",
    },
  ];

  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      // loop: true,
      effect: "fade", // Use the fade effect
      fadeEffect: {
        crossFade: true, // Enable cross-fade transition
      },
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      pagination: {
        el: ".franctional-pagi2",
        type: "fraction",
      },
      navigation: {
        nextEl: ".next-2",
        prevEl: ".prev-2",
      },
    };
  }, []);

  return (
    <div className="home5-testimonial-section mb-130 mt-70">
      <div className="container-lg container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-7">
            <div className="section-title text-animation mb-15">
              <h2>What Client&apos;s Say About us</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-xl-9 col-lg-10">
            <div className="paragraph-and-btn-area">
              <div className="text-animation">
                <p>
                  We're a creative agency specializing in crafting exceptional
                  design and user experiences that drive results.
                </p>
              </div>
              <Link className="primary-btn4 btn-hover" href="/contact">
                Become A Client
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
              <div className="vector">
                <svg
                  width={167}
                  height={68}
                  viewBox="0 0 167 68"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0.333333 10.2334C0.333333 11.7062 1.52724 12.9001 3 12.9001C4.47276 12.9001 5.66667 11.7062 5.66667 10.2334C5.66667 8.76065 4.47276 7.56674 3 7.56674C1.52724 7.56674 0.333333 8.76065 0.333333 10.2334ZM86.8125 33.7887L87.274 33.5964L86.8125 33.7887ZM85.6875 45.2859L85.2639 45.0204L85.6875 45.2859ZM71.9062 51.4552L71.7486 51.9297L71.7667 51.9357L71.7853 51.9403L71.9062 51.4552ZM66 35.7516L66.4725 35.9151L66 35.7516ZM86.8125 17.5243L86.7154 17.0338L86.8125 17.5243ZM165 68L166.695 62.481L161.068 63.7722L165 68ZM3.25518 10.6634C3.52933 10.5007 3.80876 10.3387 4.09331 10.1774L3.60037 9.30738C3.31009 9.47184 3.02485 9.63723 2.74482 9.80343L3.25518 10.6634ZM5.82601 9.23906C6.39884 8.94235 6.98872 8.64952 7.59466 8.36144L7.1653 7.45831C6.54932 7.75115 5.94924 8.04904 5.36608 8.3511L5.82601 9.23906ZM9.39481 7.54068C9.98603 7.28222 10.5902 7.02865 11.2066 6.78067L10.8333 5.85294C10.2079 6.10456 9.59462 6.36195 8.99425 6.62441L9.39481 7.54068ZM13.0446 6.07151C13.6551 5.84577 14.276 5.62578 14.9065 5.41216L14.5856 4.46505C13.9465 4.68159 13.3169 4.90464 12.6978 5.13357L13.0446 6.07151ZM16.7899 4.80226C17.4117 4.61005 18.0418 4.42426 18.6794 4.24543L18.4093 3.28258C17.7632 3.46379 17.1248 3.65206 16.4946 3.84686L16.7899 4.80226ZM20.5852 3.73769C21.2198 3.57746 21.861 3.42434 22.5082 3.27883L22.2889 2.30319C21.6331 2.45062 20.9834 2.60576 20.3404 2.76812L20.5852 3.73769ZM24.4407 2.87086C25.082 2.74425 25.7284 2.62533 26.3793 2.51457L26.2116 1.52874C25.5519 1.64099 24.8968 1.7615 24.247 1.8898L24.4407 2.87086ZM28.3308 2.20929C28.9801 2.11662 29.6334 2.03231 30.29 1.95678L30.1757 0.963328C29.51 1.03991 28.8477 1.12539 28.1896 1.21932L28.3308 2.20929ZM32.2508 1.75862C32.9043 1.70174 33.5607 1.65382 34.2194 1.61528L34.161 0.616991C33.4927 0.656086 32.8269 0.704695 32.1641 0.762387L32.2508 1.75862ZM36.1913 1.52856C36.8464 1.50934 37.5033 1.49968 38.1616 1.50001L38.162 0.500009C37.4937 0.499679 36.8269 0.50948 36.1619 0.528994L36.1913 1.52856ZM40.1338 1.53114C40.7896 1.55162 41.4463 1.58234 42.1033 1.62369L42.1661 0.625664C41.4984 0.583639 40.8312 0.552428 40.165 0.531623L40.1338 1.53114ZM44.0668 1.77925C44.7199 1.84176 45.3729 1.91516 46.0253 1.99983L46.154 1.00815C45.4903 0.922012 44.8262 0.847364 44.1621 0.783798L44.0668 1.77925ZM47.974 2.28694C48.6204 2.39372 49.2659 2.51199 49.9099 2.64213L50.108 1.66194C49.4521 1.5294 48.7949 1.40899 48.1369 1.30031L47.974 2.28694ZM51.833 3.06752C52.4695 3.22072 53.1042 3.386 53.7366 3.56374L54.0072 2.60104C53.3625 2.41984 52.7156 2.25138 52.067 2.09528L51.833 3.06752ZM55.6193 4.13232C56.2426 4.33389 56.8632 4.54811 57.4807 4.77535L57.8261 3.83687C57.1959 3.60498 56.5627 3.38644 55.927 3.18084L55.6193 4.13232ZM59.3097 5.49066C59.9132 5.74099 60.5133 6.00438 61.1096 6.28117L61.5307 5.37412C60.9217 5.09145 60.3089 4.82252 59.6928 4.56697L59.3097 5.49066ZM62.877 7.14707C63.4557 7.44587 64.0303 7.75799 64.6005 8.08376L65.0966 7.21548C64.514 6.88264 63.9269 6.56377 63.3358 6.25853L62.877 7.14707ZM66.2879 9.09642C66.8389 9.44336 67.3852 9.8038 67.9266 10.1781L68.4952 9.35551C67.9421 8.97306 67.3838 8.60474 66.8208 8.25022L66.2879 9.09642ZM69.517 11.3289C70.0377 11.7229 70.5533 12.1306 71.0635 12.5521L71.7005 11.7813C71.1793 11.3506 70.6525 10.9341 70.1205 10.5314L69.517 11.3289ZM72.5455 13.8304C73.0305 14.2668 73.51 14.7167 73.9837 15.1802L74.6831 14.4655C74.1994 13.9922 73.7097 13.5328 73.2144 13.087L72.5455 13.8304ZM75.356 16.5791C75.8019 17.0526 76.2422 17.539 76.6765 18.0388L77.4313 17.3829C76.9883 16.8731 76.5391 16.3767 76.084 15.8935L75.356 16.5791ZM77.9374 19.5486C78.3434 20.0543 78.7435 20.5725 79.1377 21.1035L79.9407 20.5074C79.539 19.9664 79.1311 19.4382 78.7172 18.9226L77.9374 19.5486ZM80.2847 22.7097C80.651 23.243 81.0116 23.7883 81.3662 24.3457L82.21 23.809C81.8491 23.2417 81.482 22.6866 81.109 22.1435L80.2847 22.7097ZM82.399 26.0327C82.7271 26.5898 83.0496 27.1581 83.3661 27.738L84.2439 27.2588C83.9221 26.6695 83.5943 26.0917 83.2606 25.5252L82.399 26.0327ZM84.2867 29.4898C84.5787 30.0676 84.8653 30.656 85.146 31.2554L86.0516 30.8312C85.7666 30.2229 85.4757 29.6254 85.1791 29.0386L84.2867 29.4898ZM85.9579 33.0565C86.0904 33.362 86.2214 33.6702 86.351 33.9811L87.274 33.5964C87.1426 33.2811 87.0097 32.9686 86.8754 32.6587L85.9579 33.0565ZM86.351 33.9811C86.4808 34.2925 86.6 34.5982 86.7079 34.8994L87.6493 34.5621C87.535 34.2432 87.4096 33.9216 87.274 33.5964L86.351 33.9811ZM87.2381 36.7705C87.3662 37.4108 87.4323 38.0418 87.4297 38.6767L88.4297 38.6808C88.4325 37.9727 88.3587 37.2745 88.2187 36.5744L87.2381 36.7705ZM87.2161 40.5752C87.086 41.1666 86.8936 41.7766 86.6313 42.4145L87.5562 42.7948C87.8385 42.1083 88.0491 41.443 88.1928 40.79L87.2161 40.5752ZM85.7695 44.1721C85.6133 44.449 85.4449 44.7316 85.2639 45.0204L86.1111 45.5515C86.2999 45.2505 86.4762 44.9546 86.6404 44.6635L85.7695 44.1721ZM85.2639 45.0204C85.0917 45.295 84.9096 45.5643 84.7183 45.8275L85.5271 46.4156C85.7318 46.134 85.9267 45.8457 86.1111 45.5515L85.2639 45.0204ZM83.468 47.321C83.0179 47.7896 82.5356 48.2273 82.0258 48.6283L82.6439 49.4143C83.1909 48.9842 83.7075 48.5152 84.1891 48.0138L83.468 47.321ZM80.4159 49.7159C79.8538 50.038 79.2689 50.317 78.6656 50.547L79.0219 51.4814C79.6756 51.2322 80.3075 50.9306 80.9131 50.5835L80.4159 49.7159ZM76.8101 51.0837C76.1841 51.2087 75.5442 51.2807 74.8946 51.2943L74.9156 52.2941C75.6254 52.2792 76.3237 52.2005 77.0058 52.0644L76.8101 51.0837ZM72.9731 51.1627C72.6592 51.113 72.3438 51.0489 72.0272 50.97L71.7853 51.9403C72.13 52.0263 72.4739 52.0961 72.8165 52.1504L72.9731 51.1627ZM72.0639 50.9807C71.8 50.893 71.529 50.7844 71.2544 50.655L70.8279 51.5595C71.1369 51.7051 71.4449 51.8288 71.7486 51.9297L72.0639 50.9807ZM69.7426 49.7419C69.2861 49.4021 68.8393 49.0067 68.4177 48.5568L67.688 49.2407C68.1506 49.7342 68.6419 50.1692 69.1456 50.5441L69.7426 49.7419ZM67.3164 47.1572C67.0002 46.6754 66.7145 46.1529 66.4696 45.5907L65.5528 45.99C65.8209 46.6054 66.1338 47.1777 66.4803 47.7058L67.3164 47.1572ZM65.896 43.9021C65.7565 43.3447 65.6554 42.7566 65.5999 42.1382L64.6039 42.2276C64.664 42.8977 64.7738 43.5371 64.926 44.145L65.896 43.9021ZM65.5687 40.3411C65.5987 39.7663 65.6667 39.1693 65.7773 38.5502L64.7929 38.3743C64.6752 39.0332 64.6023 39.6716 64.5701 40.289L65.5687 40.3411ZM66.1952 36.7832C66.2787 36.4979 66.371 36.2085 66.4725 35.9151L65.5275 35.5882C65.4208 35.8966 65.3236 36.2012 65.2355 36.5022L66.1952 36.7832ZM66.4725 35.9151C66.5833 35.5948 66.6997 35.2751 66.8218 34.9563L65.8879 34.5986C65.7619 34.9277 65.6418 35.2577 65.5275 35.5882L66.4725 35.9151ZM67.615 33.0758C67.8985 32.4623 68.2047 31.8547 68.5342 31.2555L67.6579 30.7737C67.3169 31.3938 67.0003 32.0222 66.7072 32.6563L67.615 33.0758ZM69.5798 29.506C69.9469 28.9396 70.337 28.3835 70.7507 27.8398L69.9549 27.2343C69.5257 27.7984 69.1212 28.3751 68.7407 28.962L69.5798 29.506ZM72.0447 26.269C72.4927 25.7666 72.9636 25.2779 73.4582 24.8051L72.7672 24.0823C72.253 24.5738 71.7636 25.0816 71.2983 25.6035L72.0447 26.269ZM74.9831 23.4608C75.5034 23.0382 76.0462 22.632 76.6122 22.244L76.0468 21.4192C75.4583 21.8227 74.8938 22.2451 74.3527 22.6845L74.9831 23.4608ZM78.3351 21.1621C78.915 20.8295 79.5163 20.5147 80.1396 20.2195L79.7115 19.3157C79.0646 19.6222 78.4401 19.949 77.8376 20.2946L78.3351 21.1621ZM82.0112 19.4183C82.6338 19.1789 83.2762 18.9578 83.9388 18.7562L83.6478 17.7995C82.9625 18.0079 82.2975 18.2368 81.6523 18.4849L82.0112 19.4183ZM85.9106 18.2293C86.239 18.1532 86.572 18.0816 86.9096 18.0148L86.7154 17.0338C86.3673 17.1028 86.0238 17.1766 85.6848 17.2551L85.9106 18.2293ZM86.9096 18.0148C87.2256 17.9522 87.5457 17.8916 87.8698 17.8329L87.6919 16.8489C87.3623 16.9085 87.0368 16.9702 86.7154 17.0338L86.9096 18.0148ZM89.8278 17.5112C90.4713 17.4158 91.1283 17.3283 91.7977 17.2493L91.6805 16.2562C91.0013 16.3363 90.3345 16.4251 89.6811 16.522L89.8278 17.5112ZM93.7767 17.0445C94.4243 16.9866 95.0818 16.9368 95.7485 16.8955L95.6867 15.8975C95.011 15.9393 94.3444 15.9898 93.6878 16.0484L93.7767 17.0445ZM97.7282 16.7994C98.3829 16.7763 99.0452 16.7614 99.7144 16.7553L99.7052 15.7553C99.0273 15.7615 98.3563 15.7766 97.693 15.8L97.7282 16.7994ZM101.705 16.7629C102.36 16.7739 103.02 16.7933 103.685 16.8215L103.728 15.8224C103.054 15.7938 102.385 15.7742 101.722 15.763L101.705 16.7629ZM105.665 16.9311C106.322 16.9759 106.982 17.0294 107.647 17.092L107.74 16.0964C107.068 16.033 106.398 15.9788 105.733 15.9334L105.665 16.9311ZM109.622 17.3042C110.274 17.3828 110.929 17.4704 111.586 17.5672L111.731 16.5779C111.066 16.4798 110.402 16.391 109.742 16.3114L109.622 17.3042ZM113.546 17.8829C114.196 17.9964 114.847 18.1192 115.499 18.2515L115.698 17.2715C115.037 17.1373 114.377 17.0129 113.718 16.8978L113.546 17.8829ZM117.434 18.6719C118.076 18.8206 118.719 18.9788 119.361 19.1468L119.614 18.1794C118.963 18.0089 118.311 17.8485 117.66 17.6977L117.434 18.6719ZM121.275 19.6766C121.907 19.8612 122.538 20.0555 123.168 20.2598L123.476 19.3085C122.837 19.1012 122.196 18.904 121.556 18.7168L121.275 19.6766ZM125.046 20.8997C125.666 21.1216 126.286 21.3535 126.903 21.5958L127.268 20.6648C126.641 20.4188 126.012 20.1833 125.382 19.9581L125.046 20.8997ZM128.735 22.347C129.341 22.6066 129.945 22.8765 130.546 23.1569L130.969 22.2506C130.358 21.9657 129.744 21.6915 129.129 21.4278L128.735 22.347ZM132.328 24.0229C132.915 24.3199 133.499 24.6274 134.08 24.9456L134.56 24.0687C133.97 23.7451 133.376 23.4325 132.78 23.1306L132.328 24.0229ZM135.805 25.9284C136.369 26.2628 136.931 26.6079 137.488 26.9639L138.026 26.121C137.459 25.7589 136.888 25.408 136.314 25.0679L135.805 25.9284ZM139.14 28.0583C139.682 28.4311 140.22 28.8147 140.753 29.2093L141.348 28.4054C140.805 28.0038 140.258 27.6135 139.706 27.2343L139.14 28.0583ZM142.322 30.4122C142.838 30.822 143.349 31.2427 143.855 31.6745L144.504 30.9139C143.989 30.4744 143.469 30.0463 142.944 29.6293L142.322 30.4122ZM145.334 32.9826C145.818 33.4262 146.298 33.8807 146.772 34.3462L147.472 33.6328C146.99 33.1591 146.502 32.6966 146.009 32.2452L145.334 32.9826ZM148.16 35.7588C148.611 36.2337 149.056 36.7193 149.496 37.2158L150.245 36.5529C149.797 36.0477 149.344 35.5536 148.885 35.0703L148.16 35.7588ZM150.788 38.7264C151.203 39.2297 151.613 39.7435 152.017 40.2679L152.81 39.6577C152.399 39.1243 151.982 38.6017 151.559 38.0897L150.788 38.7264ZM153.206 41.8656C153.586 42.3951 153.96 42.9346 154.328 43.4845L155.159 42.9283C154.785 42.3693 154.404 41.8208 154.018 41.2825L153.206 41.8656ZM155.408 45.1558C155.753 45.7094 156.092 46.2729 156.424 46.8465L157.289 46.3446C156.951 45.762 156.607 45.1894 156.256 44.6268L155.408 45.1558ZM157.396 48.5823C157.706 49.1566 158.01 49.7406 158.307 50.3341L159.201 49.886C158.899 49.2835 158.591 48.6907 158.276 48.1075L157.396 48.5823ZM159.173 52.1266C159.448 52.718 159.717 53.3186 159.979 53.9285L160.898 53.5328C160.631 52.9143 160.358 52.3051 160.079 51.705L159.173 52.1266ZM160.743 55.7713C160.984 56.3762 161.219 56.9898 161.448 57.6121L162.386 57.267C162.154 56.6364 161.916 56.0145 161.672 55.4013L160.743 55.7713ZM162.114 59.501C162.322 60.1158 162.524 60.7388 162.721 61.3701L163.675 61.0732C163.477 60.4341 163.272 59.8033 163.061 59.1806L162.114 59.501ZM163.291 63.289C163.469 63.9148 163.641 64.5485 163.808 65.1901L164.776 64.939C164.607 64.29 164.433 63.6489 164.253 63.0156L163.291 63.289Z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <span className="for-border" />
          </div>
        </div>
        <div className="testimoial-wrapper">
          <svg
            className="vector"
            width={440}
            height={335}
            viewBox="0 0 440 335"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M400.449 27.0956C425.169 54.1912 440 83.75 440 133.015C440 219.228 378.202 295.588 291.685 335L269.438 302.978C351.011 258.64 368.315 201.985 373.258 165.037C360.899 172.426 343.595 174.89 326.292 172.426C281.798 167.5 247.191 133.015 247.191 86.2132C247.191 64.0441 257.079 41.875 271.91 24.6324C289.214 7.38971 308.989 0 333.708 0C360.899 0 385.618 12.3162 400.449 27.0956ZM153.258 27.0956C177.978 54.1912 192.809 83.75 192.809 133.015C192.809 219.228 131.011 295.588 44.4944 335L22.2472 302.978C103.82 258.64 121.124 201.985 126.067 165.037C113.708 172.426 96.4045 174.89 79.1011 172.426C34.6068 167.5 0 130.551 0 86.2132C0 64.0441 9.88764 41.875 24.7191 24.6324C42.0225 7.38971 61.7978 0 86.5169 0C113.708 0 138.427 12.3162 153.258 27.0956Z" />
          </svg>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <Swiper {...settings} className="swiper home2-testimonial-slider">
                <div className="swiper-wrapper">
                  {testimonialData.map((testimonial) => (
                    <SwiperSlide className="swiper-slide" key={testimonial.id}>
                      <div className="testimonal-content">
                        <span>{testimonial.tag}</span>
                        <p>{testimonial.description}</p>
                        <div className="author-area">
                          <div className="content">
                            <h6>{testimonial.authorName}</h6>
                            <span>{testimonial.designation}</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </div>
          </div>
          <div className="slider-btn-area">
            <div className="slider-btn-grp w-100">
              <div className="slider-btn prev-2">
                <svg
                  width={66}
                  height={126}
                  viewBox="0 0 66 126"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M65.3591 0.652103C65.167 0.453766 64.8504 0.448742 64.6521 0.64088L0.281395 63L64.6521 125.359C64.8504 125.551 65.167 125.546 65.3591 125.348C65.5513 125.15 65.5462 124.833 65.3479 124.641L1.7186 63L65.3479 1.35912C65.5462 1.16698 65.5513 0.850439 65.3591 0.652103Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M47.3536 34.6464C47.1583 34.4512 46.8417 34.4512 46.6464 34.6464L18.2929 63L46.6464 91.3535C46.8417 91.5488 47.1583 91.5488 47.3536 91.3535C47.5488 91.1583 47.5488 90.8417 47.3536 90.6464L19.7071 63L47.3536 35.3536C47.5488 35.1583 47.5488 34.8417 47.3536 34.6464Z"
                  />
                </svg>
              </div>
              <div className="slider-btn next-2">
                <svg
                  width={66}
                  height={126}
                  viewBox="0 0 66 126"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.64088 0.652103C0.833019 0.453766 1.14956 0.448742 1.3479 0.64088L65.7186 63L1.3479 125.359C1.14956 125.551 0.833019 125.546 0.64088 125.348C0.448742 125.15 0.453766 124.833 0.652103 124.641L64.2814 63L0.652103 1.35912C0.453766 1.16698 0.448742 0.850439 0.64088 0.652103Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.6464 34.6464C18.8417 34.4512 19.1583 34.4512 19.3536 34.6464L47.7071 63L19.3536 91.3535C19.1583 91.5488 18.8417 91.5488 18.6464 91.3535C18.4512 91.1583 18.4512 90.8417 18.6464 90.6464L46.2929 63L18.6464 35.3536C18.4512 35.1583 18.4512 34.8417 18.6464 34.6464Z"
                  />
                </svg>
              </div>
            </div>
            {/* <div className="franctional-pagi2" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home5TestimonialSection;
