import { Card, Button, Image } from "../components/global"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import socialMediaList from "../config/socialMedia"
import profileConfig from "../config/profile"

const Avatar = styled(Image)`
  border-radius: 50%;
  width: 128px;
  height: 128px;
  margin: 20px auto;
  display: block;
`

const ButtonDown = styled(Button)`
  border-radius: 50%;
  padding: 16px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

const FloatingProp = styled(motion.div)`
  position: absolute;
  z-index: 200;
  background-color: var(--reverse-bg);
  border-radius: 50%;
  min-width: 32px;
  min-height: 32px;
  opacity: 0.4;
  ${(props) => props.styled}
`

const Section = styled.section`
  width: 100%;
  margin-bottom: 48px;
  display: block;
  min-height: 100vh;
  ${(props) => props.styled}
  position: relative;
  .__quote {
    text-align: center;
    margin-bottom: 32px;
    font-size: 20px;
    display: block;
    font-weight: 100;
  }
  .__description {
    text-align: center;
    margin-bottom: 32px;
    font-weight: 100;
  }
`

const SectionTitle = styled.span`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 24px;
  display: block;
  text-align: center;
  letter-spacing: 12px;
`

const SocialMediaList = styled.div`
  display: flex;
  gap: 80px;
  flex-wrap: wrap;
  padding: 16px;
  justify-content: center;
`

const SocialMediaCard = styled(Card)`
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  max-width: 240px;
  width: 100%;
  &:hover {
    transform: translateY(-8px);
  }
`

const CardTitle = styled.span`
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: 800;
  display: flex;
  svg {
    margin-right: 16px;
  }
`

const CardDescription = styled.p`
  font-size: 12px;
  margin-top: 0;
  margin-bottom: 16px;
  font-weight: 200;
`

const CardLogo = styled.div``

const CardButton = styled(Button)``

export default function Home() {
  const floatingPropAnimate = {
    animate: {
      y: 2,
    },
    transition: {
      ease: "linear",
      duration: 1,
      repeat: Infinity,
      bounce: 0.6,
    },
  }
  const goTo = (url) => {
    if (!window) return
    window.open(url)
  }

  const scrollIntoView = (id) => {
    if (!window || !document) return
    console.log("> id : ", id)

    const yOffset = -100
    const element = document.querySelector(id)
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: "smooth" })
  }

  return (
    <>
      <Section styled="margin-bottom:320px; margin-top: 80px;">
        {/* <FloatingProp
          {...floatingPropAnimate}
          styled="width: 64px; height: 64px ;top: 0;"
        />
        <FloatingProp
          {...floatingPropAnimate}
          styled="width: 24px; height: 24px ;top: 40%; left: 32px;"
        />
        <FloatingProp
          {...floatingPropAnimate}
          styled="width: 100px; height: 100px ;top: 40px; right: 10px;"
        /> */}
        <Avatar src="/image/profile_1.jpeg" />
        <SectionTitle>{profileConfig.name}</SectionTitle>
        <span className="__quote">{profileConfig.quote}</span>
        <p className="__description">{profileConfig.description}</p>
        <ButtonDown
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
        </ButtonDown>
      </Section>

      <Section id="social-media">
        <SectionTitle>Social media</SectionTitle>
        <SocialMediaList>
          {socialMediaList.map((social, index) => (
            <SocialMediaCard key={index}>
              <CardTitle>
                <CardLogo>{social.icon()}</CardLogo>
                {social.title}
              </CardTitle>
              <CardDescription>{social.description}</CardDescription>
              <CardButton
                onClick={() => {
                  goTo(social.url)
                }}
              >
                {"->"} &nbsp;PROFILE
              </CardButton>
            </SocialMediaCard>
          ))}
        </SocialMediaList>
      </Section>
    </>
  )
}
