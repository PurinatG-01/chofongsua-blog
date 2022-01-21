import React from "react"
import main from "components/index/index.global"
import { Image } from "components/global"
import styled from "styled-components"
import scrollIntoView from "helper/scrollIntoView"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import profileConfig from "config/profile"

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

export default function IndexProfileSection() {
  return (
    <main.section id="profile">
      <main.sectionTitle>Meta Profile</main.sectionTitle>
      <Avatar src="/image/avatar_5.gif" />
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
