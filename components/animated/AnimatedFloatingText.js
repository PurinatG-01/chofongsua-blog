import React from "react"
import styled from "styled-components"

const TextWrapper = styled.div`
  font-size: 4em;
  font-weight: 800;
  text-transform: uppercase italic;
  position: absolute;
  transition: all 0.2s ease-in-out;

  &.floating-text {
    transform: translateX(-30vw) !important;
  }

  &.inview-floating-text {
    transform: translateX(60vw) !important;
  }
`

export default function AnimatedFloatingText(props) {
  const { text } = props
  return (
    <div data-scroll-section>
      <TextWrapper
        data-scroll
        data-scroll-speed="1.2"
        className="floating-text"
        data-scroll-class="inview-float-text"
      >
        {text}
      </TextWrapper>
    </div>
  )
}
