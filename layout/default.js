import React, { useRef, useEffect } from "react"
import { PageContainer } from "components/global"
import { motion } from "framer-motion"
import NavBar from "components/layout/navbar"
import styled from "styled-components"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"

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
  const containerRef = useRef(null)

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      containerRef={containerRef}
    >
      <PageWrapper
        {...PageAnimationProps}
        data-scroll-container
        ref={containerRef}
      >
        <NavBar />
        <PageContainer data-scroll-section>{props.children}</PageContainer>
      </PageWrapper>
    </LocomotiveScrollProvider>
  )
}
