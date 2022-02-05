import React from "react"
import main from "components/index/index.global"
import styled from "styled-components"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import scrollIntoView from "helper/scrollIntoView"
import AnimatedText from "components/animated/AnimatedText"

const GreetingSection = styled(main.section)`
  margin-bottom: 100px;
  position: static;
  background: linear-gradient(
    54deg,
    var(--page-bg) 40%,
    var(--reverse-bg) 200%
  );
  .cube-wrapper {
    position: absolute;
    z-index: 5000;
    left: 46%;
    top: 10vh;
    transform: scale(0.3);
  }
`

const BackgroundOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 110vh;
  z-index: 1;
`

const ForegroundOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 16px;
  padding-top: 30vh;
  width: 100vw;
  height: 110vh;
  z-index: 2;
`

const container = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
}

export default function IndexGreetingSection() {
  const placeholderText = [
    { type: "heading1", text: "Welcome to" },
    {
      type: "heading2",
      text: "Chofongsua's blog",
    },
  ]

  return (
    <GreetingSection animate={{ opacity: 1 }}>
      <ForegroundOverlay
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <div className="__title -desktop">
          {placeholderText.map((item, index) => {
            return <AnimatedText {...item} key={index} />
          })}
        </div>
        <div className="__title -mobile">
          {placeholderText.map((item, index) => {
            return <AnimatedText {...item} key={index} />
          })}
        </div>
        <main.buttonDown
          initial={{ opacity: 0 }}
          animate={{ y: 30, opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 1,
            delay: 2,
            repeat: Infinity,
          }}
          onClick={() => {
            scrollIntoView("#profile")
          }}
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </main.buttonDown>
      </ForegroundOverlay>
    </GreetingSection>
  )
}
