import React, { useEffect } from "react"
import { PageContainer } from "../components/global"
import useTheme from "../hooks/useTheme"

export default function Layout(props) {
  const { toggleTheme, initTheme } = useTheme()
  useEffect(() => {
    initTheme()
  }, [])

  return (
    <>
      <button onClick={toggleTheme}>toggle</button>
      <PageContainer>{props.children}</PageContainer>
    </>
  )
}
