import styled from "styled-components"

export const PageContainer = styled.div`
  max-width: var(--page-container-max-width);
  width: 100%;
  padding: 0 16px;
  margin: 0 auto;
`

export const Card = styled.div`
  padding: 16px;
  background: var(--card-bg);
  color: var(--card-color);
  border: 1px solid var(--card-border);
  border-radius: 4px;
  box-shadow: var(--base-box-shadow);
  -webkit-box-shadow: var(--base-box-shadow);
  -moz-box-shadow: var(--base-box-shadow);
`

export const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: var(--button-bg);
  color: var(--button-color);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
    background-color: var(--button-hover-bg);
    color: var(--button-hover-color);
  }
`

export default {
  PageContainer,
  Card,
  Button,
}
