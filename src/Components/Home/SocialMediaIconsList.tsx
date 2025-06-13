import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SocialMediaIcon from "./SocialMediaIcon";

function SocialMediaIconsList() {
  return (
    <div className="social-media">
      <div className="follow-me">
        <p>follow me</p>
        <FontAwesomeIcon className="arrow" icon={faArrowRight} />
      </div>
      <div className="icons-group">
        <SocialMediaIcon
          link="https://www.linkedin.com/in/amr-walidi"
          target="_blank"
          backgroundColor="#364AFF"
          icon={faLinkedin}
        />
        <SocialMediaIcon
          link="https://twitter.com/AmrNawaf1"
          target="_blank"
          backgroundColor="black"
          icon={faXTwitter}
        />
        <SocialMediaIcon
          link="https://www.instagram.com/amr.nw_02/"
          target="_blank"
          backgroundColor="#BC2191"
          icon={faInstagram}
        />
      </div>
    </div>
  );
}

export default SocialMediaIconsList;
