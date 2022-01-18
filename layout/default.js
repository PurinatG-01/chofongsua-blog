import React from "react"
import { PageContainer } from "components/global"
import { motion } from "framer-motion"
import NavBar from "components/layout/navbar"
import styled from "styled-components"

const PageWrapper = styled(motion.div)`
  display: block;
  overflow: auto;
`

const PageAnimationProps = {
  transition: {
    type: "spring",
    duration: 1.2,
  },
  initial: {
    y: -32,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
}

export default function Layout(props) {
  return (
    <>
      <PageWrapper {...PageAnimationProps}>
        <NavBar />
        <PageContainer>{props.children}</PageContainer>
      </PageWrapper>
    </>
  )
}
