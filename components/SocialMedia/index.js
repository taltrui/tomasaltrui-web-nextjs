import Image from "next/image";
import Github from "../../assets/github.png";
import Linkedin from "../../assets/linkedin.png";
import Email from "../../assets/email.png";
import Twitter from "../../assets/twitter.png";

import styles from "./styles.module.scss";

const medias = [
  {
    icon: Linkedin,
    ref: "https://www.linkedin.com/in/tomas-altrui/",
    alt: "linkedin-link",
  },
  {
    icon: Github,
    ref: "https://github.com/taltrui",
    alt: "github-link",
  },
  {
    icon: Email,
    ref: "mailto:hola@tomasaltrui.dev",
    alt: "email-link",
  },
  // {
  //   icon: Twitter,
  //   ref: "https://www.linkedin.com/in/tomas-altrui/",
  // },
];

const SocialMedia = () => {
  return (
    <div className={styles.container}>
      {medias.map((media) => (
        <a href={media.ref} target="_blank" key={media.alt} rel="noreferrer">
          <div className={styles.icon}>
            <Image src={media.icon} alt={media.alt} width={52} height={52} />
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
