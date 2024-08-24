import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import "../Pages/PagesCSS/Home.css";
import ImageSlideIn from "../components/ImageSlideIn";
import gsap from "gsap";
import Footer from "../components/Footer";
import backgroundImage from "../assets/main_bg_image.jpg";
import mapImage from "../assets/map.svg";

import logo from "../assets/Atnam_icon.png";
import { useGSAP } from "@gsap/react";

import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [imagesLoaded, setImagesLoaded] = useState({
    background: false,
    mask: false,
  });
  const [loading, setLoading] = useState(null);
  const handleImageLoad = (imageName) => {
    setImagesLoaded((prev) => ({ ...prev, [imageName]: true }));
  };

  const handleImageError = (imageName) => {
    console.error(`${imageName} failed to load`);
  };

  useEffect(() => {
    if (imagesLoaded.background && imagesLoaded.mask) {
      console.log("All images are loaded!");
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [imagesLoaded]);

  useGSAP(() => {
    gsap.from(".description-div", {
      duration: 1,
      opacity: 0,
      x: 100,
      ease: "power2.out",

      scrollTrigger: {
        trigger: ".description-div",
        start: "-200px",
      },
    });

    gsap.from(".atman-icon-circle-div", {
      duration: 1,
      opacity: 0,
      rotateZ: -360,
      x: -100,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".atman-icon-circle-div",
        start: "-200px",
      },
    });
  }, []);

  return (
    <>
      <section className="home h-max w-screen">
        {loading ? (
          <div className="loader">
            <div className="spinner"></div>
          </div>
        ) : null}
        <Navbar />
        <div className="hero relative h-[85%] w-full">
          <div className="home-texts">
            <h1 className="text-5xl font-bold title">
              Educating Dreams, Empowering Lives
            </h1>
            <span>
              Ātman Foundation is dedicated to empowering underprivileged
              children through education. By providing essential tools and
              support, we aim to nurture young minds and pave the way for a
              brighter, more equitable future. Join us in transforming lives,
              one child at a time.
            </span>
          </div>
          <div className="map-container">
            <div className="image-box">
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
        <img
          src={backgroundImage}
          alt="Background"
          style={{ display: "none" }}
          onLoad={() => handleImageLoad("background")}
          onError={() => handleImageError("background")}
        />
        <img
          src={mapImage}
          alt="Mask"
          style={{ display: "none" }}
          onLoad={() => handleImageLoad("mask")}
          onError={() => handleImageError("mask")}
        />
        <ImageSlideIn />

        <div className="atman-info w-full h-screen my-8 flex py-12 px-10 bg-[var(--background)]">
          <div className="atman-icon-circle-div w-[44%] h-full flex justify-center items-center">
            <div className="atman-logo-circle w-96 h-96 rounded-[50%] border-4 p-20 border-[var(--secondary)]">
              <img
                src={logo}
                className="w-full h-full cursor-grab"
                alt="logo"
              />
            </div>
          </div>
          <div className="line-divider w-[1%] mx-2 border-l-8 border-[var(--primary)]"></div>
          <div className="w-[55%] h-full description-div">
            <div className="">
              <span className="text-4xl text-[var(--secondary)] font-bold title">
                Ātman Foundation:
              </span>
              <span className="text-4xl text-[var(--text-color)] font-bold title">
                Empowering the Future
              </span>
            </div>
            <p className="text-[var(--text-color)] mt-4">
              Ātman Foundation is dedicated to uplifting underprivileged
              sections of society, focusing primarily on providing essential
              educational resources to children in need. With a deep belief in
              the transformative power of education and timely counseling, we
              aim to equip young minds with the tools and support necessary to
              overcome life's challenges and build a brighter future. Through
              our collective efforts, we strive to empower the youth of India,
              ensuring they have the opportunities they deserve to continue
              their education and thrive. <br /> <br /> Our mission is to create
              a lasting impact on the lives of these children by not only
              addressing their immediate educational needs but also fostering a
              supportive environment that nurtures their growth and development.
              At Ātman, we believe that every child deserves the chance to
              succeed, and we are committed to bridging the gap between
              potential and opportunity. By working together, we can transform
              lives, strengthen communities, and pave the way for a more
              equitable and prosperous society.
            </p>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default Home;
