import React from "react"
import IndexGreetingSection from "components/index/IndexGreetingSection"
import IndexSocialMediaSection from "components/index/IndexSocialMediaSection"
import IndexProfileSection from "components/index/IndexProfileSection"
import IndexProjectsSection from "components/index/IndexProjectsSection"

export default function Home() {
  return (
    <>
      <IndexGreetingSection />
      <IndexProfileSection />
      <IndexProjectsSection />
      <IndexSocialMediaSection />
    </>
  )
}
