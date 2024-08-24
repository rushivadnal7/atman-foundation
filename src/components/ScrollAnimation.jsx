import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import "../Pages/PagesCSS/Home.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { imgSeqPicArr } from "../utils/imageSeqPicArr";

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = ({ images }) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const preLoadedRef = useRef(false);
  gsap.registerPlugin(ScrollTrigger);

  const frames = {
    currentIndex: 0,
    maxIndex: 382,
  };
  console.log(imgSeqPicArr[381]);

  const images = [];
  let imagesLoaded = 0;

  const preLoadImages = () => {
    if (preLoadedRef.current) return;
    preLoadedRef.current = true;

    for (let i = 0; i < frames.maxIndex; i++) {
      const imageUrl = imgSeqPicArr[i];
      const img = new Image();
      img.src = imageUrl;

      img.onload = function () {
        imagesLoaded++;
        if (imagesLoaded === frames.maxIndex) {
          console.log("All images loaded");
          loadImage(frames.currentIndex);
          startAnimation();
        }
      };

      img.onerror = function () {
        console.error(`Failed to load image at index ${i}: ${imageUrl}`);
      };

      images.push(img);
    }
  };

  const loadImage = (index) => {
    if (index >= 0 && index < frames.maxIndex) {
      const img = images[index];
      if (!img || !img.width) {
        console.error("Image element is undefined or not yet loaded:", img);
        return;
      }
      const canvas = canvasRef.current;
      const context = contextRef.current;

      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const scaleX = canvas.width / img.width;
        const scaleY = canvas.height / img.height;
        const scale = Math.max(scaleX, scaleY);

        const newWidth = img.width * scale;
        const newHeight = img.height * scale;

        const offsetX = (canvas.width - newWidth) / 2;
        const offsetY = (canvas.height - newHeight) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";
        context.drawImage(img, offsetX, offsetY, newWidth, newHeight);

        frames.currentIndex = index;
      }
    } else {
      console.error(`Index ${index} is out of bounds`);
    }
  };

  const startAnimation = () => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".parent",
        start: "top top",
        scrub: 2,
        end: "bottom bottom",
        markers: true,
      },
    });

    t1.to(frames, {
      currentIndex: frames.maxIndex,
      onUpdate: () => {
        console.log(Math.floor(frames.currentIndex));
        loadImage(Math.floor(frames.currentIndex));
      },
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      contextRef.current = canvas.getContext("2d");
      preLoadImages();
    }
  }, []);

  return (
    <div className="parent bg-slate-400 w-full relative h-[2000vh]">
      <div className="w-full h-screen sticky left-0 top-0">
        <canvas className="w-full h-screen" ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default ScrollAnimation;
