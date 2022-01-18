import React from "react"
import main from "components/index/index.global"
import styled from "styled-components"
import { Image } from "components/global"
import profileConfig from "config/profile"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"

const Avatar = styled(Image)`
  border-radius: 50%;
  width: 128px;
  height: 128px;
  margin: 20px auto;
  display: block;
  object-fit: cover;
  object-position: center;
  box-shadow: none !important;
`

const GreetingSection = styled(main.section)`
  margin-bottom: 320px;
  margin-top: 20vh;
  position: static;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 110vh;
    z-index: 0;
    object-fit: cover;
    opacity: 0.8;
  }
`

const BackgroundOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 110vh;
  z-index: 1;
  background-color: var(--page-bg);
  opacity: 0.8;
  mix-blend-mode: soft-light;
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
  box-shadow: var(--overlay-shadow);
  -webkit-box-shadow: var(--overlay-shadow);
  -moz-box-shadow: var(--overlay-shadow);
`

const scrollIntoView = (id) => {
  if (!window || !document) return
  const yOffset = -100
  const element = document.querySelector(id)
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
  window.scrollTo({ top: y, behavior: "smooth" })
}

export default function IndexGreetingSection() {
  return (
    <GreetingSection>
      <video autoPlay loop muted>
        <source src="/image/sky_bg_1.mp4" type="video/mp4" />
      </video>
      <BackgroundOverlay></BackgroundOverlay>
      <ForegroundOverlay>
        <Avatar src="/image/avatar_5.gif" />
        <main.sectionTitle>{profileConfig.name}</main.sectionTitle>
        <span className="__quote">{profileConfig.quote}</span>
        <p className="__description">{profileConfig.description}</p>
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
            scrollIntoView("#social-media")
          }}
        >
          <FontAwesomeIcon icon={faArrowDown} />
        </main.buttonDown>
      </ForegroundOverlay>
    </GreetingSection>
  )
}
