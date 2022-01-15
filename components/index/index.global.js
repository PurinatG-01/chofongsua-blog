import { Button } from "components/global"
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

export const section = styled.section`
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
