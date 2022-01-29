import React from "react"
import main from "components/index/index.global"
import { Card } from "components/global"
import styled from "styled-components"
import { motion } from "framer-motion"
import profileConfig from "config/profile"

const ProjectSection = styled(main.section)`
  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 930px;
    width: 100%;
    margin: 0 auto;
    grid-gap: 16px;
  }
`

const ProjectCard = styled(motion.div)`
  background-color: transparent;
  perspective: 1000px;
  min-height: 100px;

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  &:hover {
    .flip-card-inner {
      transform: rotateY(180deg);
    }
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
  }

  .flip-card-back {
    background-color: var(--reverse-card-bg);
    transform: rotateY(180deg);
  }
`

export default function IndexProjectsSection() {
  return (
    <ProjectSection>
      <main.sectionTitle>Projects</main.sectionTitle>
      <motion.div className="wrapper">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((project) => (
          <ProjectCard>
            <motion.div className="flip-card-inner">
              <Card className="flip-card-front">Front</Card>
              <Card className="flip-card-back"></Card>
            </motion.div>
          </ProjectCard>
        ))}
      </motion.div>
    </ProjectSection>
  )
}
