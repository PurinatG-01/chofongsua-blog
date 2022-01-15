import React from "react"
import main from "components/index/index.global"
import { Card, Button } from "components/global"
import styled from "styled-components"
import socialMediaList from "config/socialMedia"

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

const goTo = (url) => {
  if (!window) return
  window.open(url)
}

export default function IndexSocialMediaSection() {
  return (
    <main.section id="social-media">
      <main.sectionTitle>Social media</main.sectionTitle>
      <SocialMediaList>
        {socialMediaList.map((social, main) => (
          <SocialMediaCard key={main}>
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
    </main.section>
  )
}
