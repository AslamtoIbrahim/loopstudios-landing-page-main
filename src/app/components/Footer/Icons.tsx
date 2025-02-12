import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { faPinterest } from "@fortawesome/free-brands-svg-icons/faPinterest";

const socialLinks = [
  { icon: faFacebook, link: "https://www.facebook.com" },
  { icon: faTwitter, link: "https://www.twitter.com" },
  { icon: faPinterest, link: "https://www.pinterest.com" },
  { icon: faInstagram, link: "https://www.instagram.com" },
];

const Icons = () => {
  return (
    <div className="text-white flex gap-4">
      {socialLinks.map((item, index) => (
        <a
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          className="relative hover:after:absolute hover:after:content-[''] hover:after:h-1 hover:after:w-3 hover:after:bg-white hover:after:left-[0.5px] hover:after:-bottom-1"
          href={item.link}
        >
          <FontAwesomeIcon icon={item.icon} />
        </a>
      ))}
    </div>
  );
};

export default Icons;
