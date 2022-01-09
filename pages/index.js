import { Card, Button } from "../components/global"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

import socialMediaList from "../config/socialMedia"

const SocialMediaSection = styled.section`
  width: 100%;
  margin-bottom: 48px;
  display: block;
`

const SectionTitle = styled.span`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 24px;
  display: block;
`

const SocialMediaList = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: scroll;
  padding: 16px;
`

const SocialMediaCard = styled(Card)`
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-8px);
  }
`

const CardTitle = styled.span`
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: 800;
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
  const goTo = (url) => {
    if (!window) return
    window.open(url)
  }
  return (
    <>
      <SocialMediaSection>
        <SectionTitle>Social media</SectionTitle>
        <SocialMediaList>
          {socialMediaList.map((social, index) => (
            <SocialMediaCard key={index}>
              <CardLogo></CardLogo>
              <CardTitle>{social.title}</CardTitle>
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
      </SocialMediaSection>
    </>
  )
}
