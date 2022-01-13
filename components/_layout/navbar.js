import React, { useEffect } from "react"
import styled from "styled-components"
import { Button } from "../global"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import useTheme from "../../hooks/useTheme"

const NavBar = styled(motion.nav)`
  max-width: 1200px;
  padding: 16px 24px;
  max-height: 10vh;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
`

const ThemeButton = styled(Button)`
  border-radius: 50%;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`

const LogoText = styled(motion.a)`
  letter-spacing: 10px;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
`

export default function navbar() {
  const { toggleTheme, initTheme } = useTheme()
  useEffect(() => {
    initTheme()
  }, [])
  return (
    <NavBar>
      <LogoText href="/">CHOFONGSUA</LogoText>
      <ThemeButton onClick={toggleTheme}>
        <FontAwesomeIcon icon={faMoon} />
      </ThemeButton>
    </NavBar>
  )
}
