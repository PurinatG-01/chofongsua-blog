import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

export default [
  {
    title: "Facebook",
    url: "https://www.facebook.com/purinat.sanbundit/",
    description: "Fame Sanbundit",
    icon: () => <FontAwesomeIcon icon={faFacebook} />,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/chofongsua/",
    description: "@chofongsua",
    icon: () => <FontAwesomeIcon icon={faInstagram} />,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/purinat-sanbundit-12266217a/",
    description: "Purinat Sanbundit",
    icon: () => <FontAwesomeIcon icon={faLinkedin} />,
  },
]
