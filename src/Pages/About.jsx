import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import boxImg1 from "../assets/images/about_box_img1.jpeg";
import boxImg2 from "../assets/images/about-box_img2.jpeg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {

  useGSAP(( )=> {
    gsap.from('.box1',{
      x: -100,
      duration: 1.5,
      ease: 'power2.out',
    })
    gsap.from('.box2',{
      y: 200,
      duration: 1.5,
      ease: 'power2.out',
    })
    gsap.from('.title',{
      x: 200,
      duration: 1.5,
      ease: 'power2.out',
    })
    gsap.from('.paragraph',{
      x: 200,
      duration: 2,
      ease: 'power2.out',
    })
    
  },[])

  return (
    <section className="w-screen h-max bg-[var(--background)]">
      <Navbar />
      <div className="w-screen h-screen flex ">
        <div className="left-container relative w-1/2 h-[80%]  flex ">
          <div className="box1 w-[40%] h-[60%] absolute top-4 left-10">
            <img
              src={boxImg1}
              className="w-full h-full rounded-xl"
              alt="image"
            />
          </div>
          <div className="box2 w-[40%] h-[60%] absolute bottom-4 right-10">
            <img
              src={boxImg2}
              className="w-full h-full rounded-xl"
              alt="image"
            />
          </div>
        </div>
        <div className="right-container w-1/2 h-[80%]  flex flex-col justify-center items-center text-center ">
          <h1 className="text-[var(--text-color)] font-bold text-2xl title">ABOUT US</h1>
          <p className="text-gray-400 text-justify p-4 text-sm w-4/5  paragraph">
            The Ātman Foundation, established on 2nd August 2024, is dedicated
            to transforming the lives of underprivileged children by providing
            essential educational resources and support. Inspired by the
            Sanskrit concept of "Ātman," meaning the true Self, we aim to
            empower young minds to realize their potential through education,
            mentorship, and holistic development. Our mission is to create a
            nurturing environment that bridges the gap between potential and
            opportunity, fostering resilience and success for the youth of
            India. Together, we work towards a more just and compassionate
            society.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
