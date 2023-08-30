import React from "react";
import headshot from "../images/headshot.png";
import { motion } from "framer-motion";

const Mysvg = () => {
  const svgVariant = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },

    hidden: {
      opacity: 0,
      x: 500,
    },
  };
  const imageVariant = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 3,
      },
    },

    hidden: {
      opacity: 0,
    },
  };

  return (
    <div>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="mysvg lg:w-[450px]"
        viewBox="67.164 212.386 775.741 680.911"
        variants={svgVariant}
        initial="hidden"
        animate="visible"
      >
        <defs>
          <linearGradient id="c" gradientTransform="rotate(-45 .5 .5)">
            <stop offset="0%" stopColor="#00DBDE" />
            <stop offset="50%" stopColor="#567eb7" />
            <stop offset="100%" stopColor="#f62ede" />
          </linearGradient>

          <clipPath id="b">
            <path
              fill="currentColor"
              d="M831 638.5q50 138.5-110 94T458.5 815q-102.5 127-226 48t-155-221q-31.5-142 33-260t177-154q112.5-36 197 11T645 313q76 27 106 107t80 218.5Z"
            />
          </clipPath>
          <filter id="a" x="-50vw" y="-50vh" width="100vw" height="100vh">
            <feFlood floodColor="#fff" result="neutral-gray" />
            <feTurbulence
              type="fractalNoise"
              baseFrequency="2.5"
              numOctaves="100"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix
              in="noise"
              type="saturate"
              values="0"
              result="destaturatedNoise"
            />
            <feComponentTransfer in="desaturatedNoise" result="theNoise">
              <feFuncA type="table" tableValues="0 0 0.15 0" />
            </feComponentTransfer>
            <feBlend
              in="SourceGraphic"
              in2="theNoise"
              mode="soft-light"
              result="noisy-image"
            />
          </filter>
        </defs>
        <g filter="url(#a)" clipPath="url(#b)">
          <path
            fill="url(#c)"
            d="M831 638.5q50 138.5-110 94T458.5 815q-102.5 127-226 48t-155-221q-31.5-142 33-260t177-154q112.5-36 197 11T645 313q76 27 106 107t80 218.5Z"
          />
        </g>

        <mask id="my-mask" style={{ maskType: "alpha" }}>
          <path
            fill="url(#c)"
            d="M831 638.5q50 138.5-110 94T458.5 815q-102.5 127-226 48t-155-221q-31.5-142 33-260t177-154q112.5-36 197 11T645 313q76 27 106 107t80 218.5Z"
          />
        </mask>

        <g mask="url(#my-mask)">
          <path
            fill="url(#c)"
            d="M831 638.5q50 138.5-110 94T458.5 815q-102.5 127-226 48t-155-221q-31.5-142 33-260t177-154q112.5-36 197 11T645 313q76 27 106 107t80 218.5Z"
          />
          <motion.image
            className="blog-img"
            xlinkHref={headshot}
            x="140"
            y="315"
            variants={imageVariant}
            initial="hidden"
            animate="visible"
          ></motion.image>
        </g>
      </motion.svg>
    </div>
  );
};

export default Mysvg;
