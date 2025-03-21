import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/ruhulamin2024",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/ruhulamin2024",
  },
  {
    // icon: <FaBluesky />,
    icon: <FaTwitter />,
    path: "https://x.com/ruhulamin_2024",
  },
  {
    icon: <FaFacebookF />,
    path: "https://www.facebook.com/ruhulamin15jun1999",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            href={item.path}
            key={index}
            target="_blank"
            className={iconStyles}
          >
            <span>{item.icon}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
