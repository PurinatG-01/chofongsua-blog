import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDesktop,
  faServer,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons"

export default {
  name: "Purinat Sanbundit",
  quote: "Personal web blog | Web Developer | ___",
  description:
    "My name is Purinat Sanbundit. I'm a web developer seeking an exciting experience. I'm currently working a full-time job in the position of front-end developer at DekD. I've experience in various software development fields which are IoT, Software, Mobile, Web, or IT Infrastructure development. The current primary focus is gaining new knowledge from different fields and getting a hand on some trending projects.",
  skills: [
    {
      title: "Front-end development",
      description:
        "The most experience and primary skill in all development skills. Experience on various project with some crucial aspects including SEO, web performance, and various modern framework (React, Vue, Next, Nuxt, Svelte etc.).",
      icon: () => <FontAwesomeIcon icon={faDesktop} />,
      delay: 1.5,
    },
    {
      title: "Back-end development",
      description:
        "The secondary skill for various project. Experience in planning and building backbone framework for some small projects with various backend frameworks (Express.js, Flask, Django etc.) along with some major DB type (SQL, No-SQL).",
      icon: () => <FontAwesomeIcon icon={faServer} />,
      delay: 1.6,
    },
    {
      title: "Infrastrucure | DevOps ",
      description:
        "Experience in various cloud technologies (Google cloud, AWS, DigitalOcean, Heroku, Netlify etc.) along with some CI/CD tools (Jenkins, Docker etc.) and also has experience on local server setup.",
      icon: () => <FontAwesomeIcon icon={faNetworkWired} />,
      delay: 1.7,
    },
  ],
}
