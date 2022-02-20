import React, { useEffect } from "react"
import main from "components/index/index.global"
import { Card, Button } from "components/global"
import styled from "styled-components"
import { motion } from "framer-motion"
import projectConfig from "config/project"
import useGitHub from "hooks/useGithub"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import moment from "moment"
import { config } from "@fortawesome/fontawesome-svg-core"

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
  .-chip {
    font-size: 0.9em !important;
    padding: 4px 8px !important;
    background-color: var(--page-drop-bg) !important;
    border-radius: 4px !important;
    display: inline-block !important;
    width: fit-content !important;
    * {
      font-size: 0.8em !important;
    }
  }
  .header {
    max-width: var(--page-container-max-width);
    margin: 0 auto;
    margin-bottom: 16px;
    box-shadow: none;
    position: relative;
    min-height: 64px;
    .header__avatar {
      width: 160px;
      height: 160px;
      padding: 16px;
      overflow: hidden;
      border: 1px solid var(--card-border);
      background-color: var(--card-bg);
      border-radius: 50%;
      padding: 12px;
      margin: 0 auto;
      transform: translate(0, 4px);
      z-index: 10;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        transition: all 0.6s ease-in-out;
        border: 8px solid transparent;
      }
      &:hover {
        img {
          border: 8px solid var(--reverse-bg);
        }
      }
    }
    .header__detail {
      padding: 16px 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      clip-path: inset(0 0 100% 0);
      transition: all 0.6s ease-in-out;
      .detail__title {
        display: block;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 1.4em;
        transition: all 0.6s ease-in-out;
        width: fit-content;
        .title__icon-navigate {
          clip-path: inset(0 100% 0 0);
          transition: all 0.6s ease-in-out;
        }

        &:hover {
          transform: translateY(-4px);
          .title__icon-navigate {
            clip-path: inset(0 0 0 0);
          }
        }
      }
      .detail__wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
    }
    .inview-header__detail {
      clip-path: inset(0 0 0 0);
    }

    @media (min-width: 1320px) {
      .header__avatar {
        top: 0;
        left: 0;
        position: absolute;
        transform: translate(-48px, -32px);
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
      }
      .header__detail {
        padding-left: 120px;
        clip-path: inset(0 100% 0 0);
      }
      .inview-header__detail {
        clip-path: inset(0 0 0 0);
      }
    }
  }
  .title {
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
  .quote {
    text-align: center;
    display: block;
    max-width: var(--page-container-max-width);
    margin: 0 auto;
    margin-bottom: 48px;
    overflow: hidden;
    width: fit-content;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    @media (min-width: 1320px) {
      margin-bottom: 48px;
    }
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
    .title,
    .quote {
      text-align: start;
    }
  }
  .project-list__wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    margin: 0;
    grid-gap: 16px;
    max-width: var(--page-container-max-width);
    margin: 0 auto 48px;

    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .event-list__wrapper {
    max-width: var(--page-container-max-width);
    margin: 0 auto 100px;
    .-ellipsis {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 1px solid var(--card-border);
      margin: 40px auto;
    }
    .event-list__title {
      text-transform: uppercase;
      font-weight: 600;
      font-size: 24px;
      margin-bottom: 16px;
      display: inline-block;
    }
    .event-list__list {
      display: flex;
      flex-direction: column;
      gap: 24px;
      margin-bottom: 16px;
      .list__item {
        display: flex;
        flex-wrap: nowrap;
        transition: transform 0.2s ease-in-out, clip-path 0.6s ease-in-out;
        clip-path: inset(0 100% 0 0);
        &:hover {
          transform: translateY(-16px);
        }
        .item__avatar {
          border-radius: 50%;
          width: 48px;
          height: 48px;
          margin-right: 16px;
        }
        .item__wrapper {
          display: block;
          .item__repo {
            font-size: 1.1em;
            width: fit-content;
            display: block;
            margin-right: auto;
            margin-bottom: 8px;
            transition: all 0.2s ease-in-out;
            border-bottom: 2px solid transparent;
            &:hover {
              border-bottom: 2px solid var(--reverse-bg) !important;
            }
          }
          .item__inner-wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            .item__type {
              .type__status {
                width: 8px;
                height: 8px;
                display: inline-block;
                margin-right: 8px;
              }
            }
          }
        }
      }
      .inview-list__item {
        clip-path: inset(0 0 0 0);
      }
    }
  }
`

const ProjectCard = styled(motion.div)`
  background-color: transparent;
  perspective: 1000px;
  min-height: 220px;
  transition: all 0.2s ease-in-out;

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
        border-bottom: none !important;
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
    transform: translateY(-16px);
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
    border-bottom: 8px solid
      ${({ colorTheme }) => colorTheme ?? "var(--reverse-card-bg)"};
    .project__title {
      display: block;
      font-weight: 800;
      text-transform: uppercase;
      font-size: 1.2em;
    }
    .project__status {
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
    .project__description {
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

export default function IndexProjectsSection() {
  const { userInfo, config: gitHubConfig, eventInfo } = useGitHub()

  // console.log("> userInfo : ", userInfo)
  // console.log("> eventInfo?.slice(0,5) : ", eventInfo?.slice(0, 5))

  return (
    <ProjectSection
      className="project-section"
      data-scroll
      data-scroll-speed="1.1"
      data-scroll-class="inview-project-section"
    >
      <main.sectionTitle className="__title title">Projects</main.sectionTitle>
      <span className="quote">learning | working | experiencing</span>
      <div className="header">
        <div className="header__avatar">
          <img src={userInfo?.avatar_url ?? ""} />
        </div>
        <Card
          className="header__detail"
          data-scroll
          data-scroll-delay="1"
          data-scroll-class="inview-header__detail"
        >
          <a
            href={userInfo?.html_url ?? "#"}
            target="_blank"
            className="detail__title"
          >
            {gitHubConfig.icon()} GITHUB | {userInfo?.login ?? ""}{" "}
            <FontAwesomeIcon
              icon={faChevronRight}
              className="title__icon-navigate"
            />
          </a>
          <span className="detail__bio">{userInfo?.bio ?? ""}</span>
          <div className="detail__wrapper">
            <span className="detail__repos -chip">
              Public repositories:{" "}
              <span className="_text-green">{userInfo?.public_repos ?? ""}</span>
            </span>
            <span className="detail__follow -chip">
              Follower : {userInfo?.followers ?? ""} | Following :{" "}
              {userInfo?.following ?? ""}
            </span>
            <span className="detail__follow -chip">
              Join on{" "}
              {moment(userInfo?.created_at ?? "").format(
                "DD MMMM YYYY / HH:mm"
              )}
            </span>
          </div>
        </Card>
      </div>
      <div className="project-list__wrapper">
        {projectConfig.map((project) => (
          <ProjectCard
            key={project.title}
            className={`-${project.status.type}`}
            color-theme={project.colorTheme}
          >
            <div className="flip-card-inner">
              <Card
                className="flip-card-front"
                data-scroll
                data-scroll-class="inview-flip-card-inner"
                data-scroll-repeat="true"
                data-scroll-delay="1"
              >
                <span className="project__title">{project.title}</span>
                {!!project.status.text && (
                  <span className={`project__status -${project.status.type}`}>
                    status: {project.status.text}
                  </span>
                )}
                <p className="project__description">{project.description}</p>
                {project.status.type == "more" &&
                  project.url.map((url, index) => (
                    <Button
                      className="url"
                      onClick={() => window.open(url.url)}
                      key={index}
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
                {project.url.map((url, index) => (
                  <Button className="url" key={index} onClick={() => window.open(url.url)}>
                    {url.title}
                  </Button>
                ))}
              </Card>
            </div>
          </ProjectCard>
        ))}
      </div>
      <div className="event-list__wrapper">
        <span className="event-list__title">Github latest events</span>
        <div className="event-list__list">
          {!!eventInfo &&
            [...eventInfo].slice(0, 8).map((event, index) => (
              <Card
                className="list__item"
                data-scroll
                data-scroll-class="inview-list__item"
                key={index}
              >
                <img
                  src={event?.actor?.avatar_url ?? ""}
                  className="item__avatar"
                />
                <div className="item__wrapper">
                  <a className="item__repo" href={event?.repo?.url}>
                    {event?.repo?.name}
                  </a>
                  <div className="item__inner-wrapper">
                    <span className="item__type -chip ">
                      <motion.div
                        initial={{ opacity: 0.5, rotate: 0, scale: 0.6 }}
                        animate={{ opacity: 1, rotate: 360, scale: 1 }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className={`type__status _bg-${
                          event?.type?.includes("Push") ? "green" : "yellow"
                        }`}
                      ></motion.div>
                      {event?.type ?? ""}
                    </span>
                    <span className="item__type -chip">
                      {moment(event?.created_at ?? "").format(
                        "DD MMMM YYYY / HH:mm"
                      ) ?? ""}
                    </span>
                    {event?.type?.includes("Push") && (
                      <span className="item__commit -chip">
                        Total commits:{" "}
                        <span className="_text-green">
                          {event?.payload?.size ?? "0"}
                        </span>
                      </span>
                    )}
                    {event?.type?.includes("Pull") && (
                      <span className="item__action -chip">
                        Action:{" "}
                        <span className="_text-yellow">
                          {event?.payload?.action ?? ""} #
                          {event?.payload?.number ?? ""}
                        </span>
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            ))}
        </div>
        {[1, 2, 3].map((index) => (
          <div key={index} className="-ellipsis"></div>
        ))}
      </div>
    </ProjectSection>
  )
}
