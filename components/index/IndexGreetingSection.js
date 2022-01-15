import React from "react"
import main from "components/index/index.global"
import styled from "styled-components"
import { Image } from "components/global"
import profileConfig from "config/profile"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"

const Avatar = styled(Image)`
  border-radius: 50%;
  width: 128px;
  height: 128px;
  margin: 20px auto;
  display: block;
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
    <main.section styled="margin-bottom:320px; margin-top: 80px;">
      <Avatar src="/image/profile_1.jpeg" />
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
    </main.section>
  )
}
