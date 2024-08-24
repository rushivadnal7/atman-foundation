import React, { useState , useEffect } from "react";
import image1 from "../assets/images/image1.jpeg";
import image2 from "../assets/images/image2.jpeg";
import image3 from "../assets/images/image3.jpeg";
import image4 from "../assets/images/image4.jpeg";

import "../components/CSS/ImageSlideIn.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ImageSlideIn = () => {
  const [modalOpen, SetModalOpen] = useState(false);

  const modalOpenner = () => {
    console.log("clicked me");
    SetModalOpen(!modalOpen);
  };

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".image2", { xPercent: -150 })
      .from(".image3", { xPercent: 150 })
      .from(".image4", { yPercent: -150 });

    let endValue = window.innerWidth > 768 ? "+=4000" : "+=2000";

    ScrollTrigger.create({
      animation: tl,
      trigger: ".container",
      start: "top top",
      end: endValue,
      scrub: 2,
      pin: true,
      anticipatePin: 1,
    });
  }, []);

  useEffect(() => {
    if (modalOpen) {
      gsap.to(".modal", {
        x: 0,
        duration: 1.5,
        opacity: 1,
        display: "block", 
      });
    } else {
      gsap.to(".modal", {
        x: -300,
        duration: 1,
        opacity: 0,
        display: "none",
      });
    }
  }, [modalOpen]);

  const imageCards = {
    firstImage: {
      image: image1,
      class: "image1",
      title: "The social work did.",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet at ea explicabo vel sapiente voluptatum!",
      location: "atman foundation , mumbai ",
      moreInfo: "siuuuuuuuuuu",
    },
    secondImage: {
      image: image2,
      class: "image2",
      title: "The social work did.",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet at ea explicabo vel sapiente voluptatum!",
      location: "atman foundation , mumbai ",
    },
    thirdImage: {
      image: image3,
      class: "image3",
      title: "The social work did.",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet at ea explicabo vel sapiente voluptatum!",
      location: "atman foundation , mumbai ",
    },
    fourthImage: {
      image: image4,
      class: "image4",
      title: "The social work did.",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet at ea explicabo vel sapiente voluptatum!",
      location: "atman foundation , mumbai ",
    },
  };

  return (
    <div className="container relative h-screen w-screen   text-[var(--text-color)] flex flex-col text-center justify-center items-center ">
      <h1 className="h-[10%] w-full font-bold text-4xl ">
        "Transforming Lives Through Our Initiatives"
      </h1>
      <div className="sub-container w-[90%] h-[85%] relative     flex justify-center items-center overflow-hidden">
        {Object.values(imageCards).map((card, index) => {
          return (
            <div
              key={index}
              className={`${card.class} w-[100%] h-[100%] absolute z-10   `}
            >
              <div className="info absolute drop-shadow-2xl z-10 top-4 left-0 w-full  h-full flex justify-center items-center ">
                <span className=" w-1/2  font-extrabold text-7xl leading-snug     text-[var(--accent-color)]  ">
                  {card.title}
                </span>
                <div className="description-location w-1/2 h-full flex justify-center items-center flex-col gap-4 ">
                  <div className="text-xl font-medium  text-white">
                    <p>{card.description}</p>
                    {card.moreInfo ? (
                      <div
                        className={`group  flex justify-center text-sm cursor-pointer  items-center gap-2`}
                      >
                        <span onClick={modalOpenner}>more info</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-3 group-hover:-translate-y-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          />
                        </svg>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="text-white flex justify-center items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    <p className="">{card.location}</p>
                  </div>
                </div>
              </div>
              <img
                src={card.image}
                alt="images"
                className="w-full h-full absolute rounded-md  brightness-[0.4]  "
              />
            </div>
          );
        })}
      </div>
      <div
        className={`modal ${
          modalOpen === true ? "block" : "hidden"
        } shadow-orange-500    absolute w-[90%] h-[90%] z-50 `}
      >
        <div className="cross-svg w-full h-[5%] relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 absolute right-0 "
            onClick={modalOpenner}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>

        <div className="inner-box w-full bg-[rgba(255,255,255,0.8)] h-[95%]"></div>
      </div>
    </div>
  );
};

export default ImageSlideIn;
