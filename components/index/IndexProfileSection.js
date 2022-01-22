import React from "react"
import main from "components/index/index.global"
import { Image } from "components/global"
import styled from "styled-components"
import profileConfig from "config/profile"
import useInView from "react-cool-inview"
import { motion } from "framer-motion"

const Avatar = styled(Image)`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin: 20px auto;
  display: block;
  object-fit: cover;
  object-position: center;
  box-shadow: none !important;
  margin: 0 auto;
`

const ProfileSection = styled(main.section)`
  .__wrapper {
    display: flex;
    flex-direction: column;
    gap: 48px;
    .__detail {
      display: flex;
      flex-direction: column;
      gap: 16px;
      * {
        text-align: center !important;
        margin: 0;
      }
      .__name {
        text-transform: uppercase;
        font-size: 20px;
        overflow: hidden;
        width: fit-content;
        border-right: 4px solid var(--page-text-color);
        white-space: nowrap;
        letter-spacing: 0.15em;
        margin: 0 auto;
        animation: typing 2s steps(40, end), blink-caret 0.75s step-end infinite;
        font-weight: 800;
        max-width: 824px;
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 263px;
          }
        }
        @keyframes blink-caret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: var(--page-text-color);
          }
        }
      }
      .__quote {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 16px;
      }
      .__description {
        text-align: justify;
        text-justify: inter-word;
        font-weight: 200;
      }
    }
  }
  @media screen and (min-width: 1200px) {
    .__wrapper {
      flex-direction: row;
      .__detail {
        .__name {
          margin: 0;
        }
        * {
          text-align: start !important;
        }
      }
    }
    ${Avatar} {
      width: 224px;
      height: 224px;
    }
  }
`

const ProfileAnimateProps = {
  initial: { opacity: 0, x: -60 },
  animate: { x: 0, opacity: 1 },
  exit: { opacity: 0, x: 60 },
  transition: {
    ease: "linear",
    duration: 0.3,
    delay: 0.3,
  },
}

export default function IndexProfileSection(props) {
  const { observe, inView } = useInView({
    threshold: 0.2,
    onEnter: ({ unobserve }) => {
      unobserve()
    },
  })

  return (
    <ProfileSection ref={observe} id="profile">
      {inView && (
        <motion.div {...ProfileAnimateProps} className="__wrapper">
          <Avatar src="/image/avatar_5.gif" />
          <motion.div className="__detail">
            <main.sectionTitle className="__name">
              {profileConfig.name}
            </main.sectionTitle>
            <motion.span className="__quote">{profileConfig.quote}</motion.span>
            <motion.p className="__description">
              {profileConfig.description}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </ProfileSection>
  )
}
