import React from "react"
import { PageContainer } from "../components/global"
import NavBar from "../components/_layout/navbar"
import styled from "styled-components"

const PageWrapper = styled.div`
  display: block;
  overflow: auto;
`

export default function Layout(props) {
  return (
    <PageWrapper>
      <NavBar
        transition={{ type: "spring", duration: 1.2 }}
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      />
      <PageContainer
        transition={{ type: "spring", duration: 1.2 }}
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {props.children}
      </PageContainer>
    </PageWrapper>
  )
}
