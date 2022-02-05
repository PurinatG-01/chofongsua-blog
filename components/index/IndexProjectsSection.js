import React from "react"
import main from "components/index/index.global"
import { Card, Button } from "components/global"
import styled from "styled-components"
import { motion } from "framer-motion"
import projectConfig from "config/project"

const ProjectSection = styled(main.section)`
  padding: 64px 16px;
  width: 100%;
  transition: all 0.6s ease-in-out;
  &.project-section {
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
  }
  &.inview-project-section {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  .__title {
    text-align: center;
    max-width: var(--page-container-max-width);
    margin: 0 auto;
    margin-bottom: 16px;
    border-right: 4px solid var(--page-text-color);
    animation: clipText 1.5s steps(40, end), blink-caret 0.75s step-end infinite;
    white-space: nowrap;
    overflow: hidden;
    width: fit-content;
  }
  .subtitle {
    text-align: center;
    display: block;
    max-width: var(--page-container-max-width);
    margin: 0 auto;
    margin-bottom: 48px;
    white-space: nowrap;
    overflow: hidden;
    width: fit-content;
  }

  @keyframes clipText {
    from {
      clip-path: polygon(0 0, 0 0, 0 100%, 0 0);
    }

    to {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }

  @media (min-width: 768px) {
    .__title,
    .subtitle {
      text-align: start;
    }
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    margin: 0;
    grid-gap: 16px;
    max-width: var(--page-container-max-width);
    margin: 0 auto;

    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

const ProjectCard = styled(motion.div)`
  background-color: transparent;
  perspective: 1000px;
  min-height: 220px;

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  &.-more {
    .flip-card-inner {
      .flip-card-front {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--reverse-text-color);
        background-color: var(--reverse-card-bg);
        p {
          text-align: center;
        }
        ${Button} {
          margin: 16px auto;
        }
      }
    }
  }

  &:hover:not(.-more) {
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
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    transition: all 0.6s ease-in-out;
  }

  .inview-flip-card-inner {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  .flip-card-front {
    .title {
      display: block;
      font-weight: 800;
      text-transform: uppercase;
      font-size: 1.2em;
    }
    .status {
      text-transform: uppercase;
      font-weight: 800;
      &.-online {
        color: var(--base-green);
      }
      &.-offline {
        color: var(--base-red);
      }
      &.-local {
        color: var(--base-yellow);
      }
    }
    .description {
      text-indent: 2em;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  .flip-card-back {
    background-color: var(--reverse-card-bg);
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;
    padding: 16px;
    ${Button} {
      background-color: var(--reverse-button-bg);
      color: var(--reverse-text-color);
    }
  }
`

const randomNumber = () => {
  return Math.floor(Math.random() * 10) / 10
}

export default function IndexProjectsSection() {
  return (
    <ProjectSection
      className="project-section"
      data-scroll
      data-scroll-speed="1.2"
      data-scroll-class="inview-project-section"
    >
      <main.sectionTitle className="__title">Projects</main.sectionTitle>
      <span className="subtitle">
        My experience projects in all state (LIVE, LOCAL, DOWN, etc.)
      </span>
      <motion.div className="wrapper">
        {projectConfig.map((project) => (
          <ProjectCard
            key={project.title}
            className={`-${project.status.type}`}
          >
            <motion.div className="flip-card-inner">
              <Card
                className="flip-card-front"
                colorTheme={project.colorTheme}
                data-scroll
                data-scroll-class="inview-flip-card-inner"
                data-scroll-repeat="true"
              >
                <span className="title">{project.title}</span>
                {!!project.status.text && (
                  <span className={`status -${project.status.type}`}>
                    status: {project.status.text}
                  </span>
                )}
                <p className="description">{project.description}</p>
                {project.status.type == "more" &&
                  project.url.map((url) => (
                    <Button
                      className="url"
                      onClick={() => window.open(url.url)}
                    >
                      {url.title}
                    </Button>
                  ))}
              </Card>
              <Card
                className="flip-card-back"
                data-scroll
                data-scroll-delay="5"
                data-scroll-class="inview-flip-card-inner"
                data-scroll-repeat="true"
              >
                {project.url.map((url) => (
                  <Button className="url" onClick={() => window.open(url.url)}>
                    {url.title}
                  </Button>
                ))}
              </Card>
            </motion.div>
          </ProjectCard>
        ))}
      </motion.div>
    </ProjectSection>
  )
}
