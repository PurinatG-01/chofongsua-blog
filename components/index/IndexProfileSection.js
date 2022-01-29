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
  .__wrapper {
    display: flex;
    flex-direction: column;
    gap: 48px;
    margin-bottom: 64px;
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
        text-indent: 2em;
      }
    }

    &.-bottom {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      .__skill {
        display: flex;
        gap: 16px;
        flex-basis: 30%;
        margin: 0 auto;
        .__icon {
          align-self: flex-start;
          overflow: hidden;
          padding: 4px;
          border: 2px solid var(--page-text-color);
          border-radius: 8px;
          min-width: 48px;
          min-height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            width: 24px;
            height: 24px;
          }
        }

        .__title {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          animation: blink-caret 0.75s step-end infinite;
          border-right: 2px solid var(--page-text-color);
        }
        .__description {
          text-indent: 2em;
          text-align: start;
          text-justify: inter-word;
        }
      }
    }
  }
  @media screen and (min-width: 1200px) {
    .__wrapper {
      flex-direction: row;
      margin-bottom: 120px;
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

const SkillAnimtaProps = (_delay) => ({
  initial: { opacity: 0, y: 60 },
  animate: { y: 0, opacity: 1 },
  exit: { opacity: 0, yield: 60 },
  transition: {
    ease: "linear",
    duration: 0.3,
    delay: _delay,
  },
})

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
        <>
          <motion.div {...ProfileAnimateProps} className="__wrapper">
            <Avatar src="/image/avatar_5.gif" />
            <motion.div className="__detail">
              <main.sectionTitle className="__name">
                {profileConfig.name}
              </main.sectionTitle>
              <motion.span className="__quote">
                {profileConfig.quote}
              </motion.span>
              <motion.p className="__description">
                {profileConfig.description}
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div className="__wrapper -bottom">
            {profileConfig.skills.map((skill) => (
              <motion.div
                className="__skill"
                {...SkillAnimtaProps(skill.delay)}
              >
                <motion.div className="__icon">{skill.icon()}</motion.div>
                <motion.div>
                  <motion.span className="__title _header">
                    {skill.title}
                  </motion.span>
                  <motion.p className="__description">
                    {" "}
                    {skill.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}
    </ProfileSection>
  )
}
