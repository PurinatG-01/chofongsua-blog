import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const Cube = styled(motion.div)`
  perspective: 1000px;
  perspective-origin: 50% 50%;

  @keyframes rotate3d {
    0% {
      transform: scale3d(1, 1, 1) rotateX(-26deg) rotateY(-44deg) rotateZ(0deg)
        translate3d(0px, 0px, 0px) skew(0deg, 0deg);
    }
    33% {
      transform: scale3d(1, 1, 1) rotateX(-26deg) rotateY(134deg) rotateZ(0deg)
        translate3d(0px, 0px, 0px) skew(0deg, 0deg);
    }
    66% {
      transform: scale3d(1, 1, 1) rotateX(-26deg) rotateY(226deg) rotateZ(0deg)
        translate3d(0px, 0px, 0px) skew(0deg, 0deg);
    }
    100% {
      transform: scale3d(1, 1, 1) rotateX(-26deg) rotateY(316deg) rotateZ(0deg)
        translate3d(0px, 0px, 0px) skew(0deg, 0deg);
    }
  }

  @keyframes reverseRotate3d {
    0% {
      transform: scale3d(1, 1, 1) rotateX(-26deg) rotateY(316deg) rotateZ(0deg)
        translate3d(0px, 0px, 0px) skew(0deg, 0deg);
    }
    33% {
      transform: scale3d(1, 1, 1) rotateX(-26deg) rotateY(226deg) rotateZ(0deg)
        translate3d(0px, 0px, 0px) skew(0deg, 0deg);
    }
    66% {
      transform: scale3d(1, 1, 1) rotateX(-26deg) rotateY(134deg) rotateZ(0deg)
        translate3d(0px, 0px, 0px) skew(0deg, 0deg);
    }
    100% {
      transform: scale3d(1, 1, 1) rotateX(-26deg) rotateY(-44deg) rotateZ(0deg)
        translate3d(0px, 0px, 0px) skew(0deg, 0deg);
    }
  }

  .cube {
    margin: auto;
    position: relative;
    height: ${(props) => props?.size}px;
    width: ${(props) => props?.size}px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    animation: ${(props) => (props?.reverse ? "reverseRotate3d" : "rotate3d")}
      5s linear infinite;
    div {
      position: absolute;
      box-sizing: border-box;
      line-height: ${(props) => props?.size}px;
      text-align: center;
      height: 100%;
      width: 100%;
      opacity: 0.9;
      border: 1px solid var(--card-border);
      background-color: var(--reverse-card-bg);
      color: var(--reverse-page-text-color);
    }
    .front {
      -webkit-transform: ${(props) =>
        "translateZ(" + (0 - props?.size) + "px)"};
      transform: ${(props) => "translateZ(" + -(100 - props?.size) + "px)"};
    }
    .back {
      -webkit-transform: translateZ(-100px) rotateY(180deg);
      transform: translateZ(-100px) rotateY(180deg);
    }
    .top {
      -webkit-transform: rotateX(-270deg) translateY(-100px);
      transform: rotateX(-270deg) translateY(-100px);
      transform-origin: top center;
    }
    .bottom {
      -webkit-transform: rotateX(270deg) translateY(100px);
      transform: rotateX(270deg) translateY(100px);
      transform-origin: bottom center;
    }
    .left {
      -webkit-transform: rotateY(270deg) translateX(-100px);
      transform: rotateY(270deg) translateX(-100px);
      transform-origin: center left;
    }
    .right {
      -webkit-transform: rotateY(-270deg) translateX(100px);
      transform: rotateY(-270deg) translateX(100px);
      transform-origin: top right;
    }
  }
`

export default function CubeRotated(props) {
  const CubeProps = { ...props }
  return (
    <Cube {...CubeProps}>
      <motion.div className="cube">
        {["front", "back", "top", "bottom", "left", "right"].map((val) => (
          <motion.div className={`${val}`}></motion.div>
        ))}
      </motion.div>
    </Cube>
  )
}
