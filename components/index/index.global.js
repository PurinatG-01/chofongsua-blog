import { Button } from "components/global"
import { motion } from "framer-motion"
import styled from "styled-components"

export const buttonDown = styled(Button)`
  border-radius: 50%;
  padding: 16px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

export const section = styled(motion.section)`
  width: 100%;
  margin-bottom: 48px;
  display: block;
  min-height: 100vh;
  scroll-snap-align: start;
  position: relative;
  padding-left: 16px;
  padding-right: 16px;
  .__title {
    text-align: center;
    text-transform: uppercase;
    &.-mobile,
    &.-mobile * {
      font-size: 1.1em !important;
      letter-spacing: 16px !important;
      @media screen and (min-width: 1200px) {
        display: none;
      }
    }
    &.-desktop,
    &.-desktop * {
      font-size: 40px !important;
      letter-spacing: 24px !important;
      @media screen and (max-width: 1199px) {
        display: none;
      }
    }
  }
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
  scroll-snap-align: start;
  ${(props) => props.styled}
`

export const sectionTitle = styled.span`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 24px;
  display: block;
  text-align: center;
  letter-spacing: 12px;
`

export default {
  section,
  sectionTitle,
  buttonDown,
}
