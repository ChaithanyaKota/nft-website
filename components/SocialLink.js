import React from "react";
import Image from "next/image";

function SocialLink() {
  let socialLinks = [
    { name: "Discord", link: "/discord.svg" },
    { name: "Instagram", link: "/icons8-instagram.svg" },
    { name: "Twitter", link: "/icons8-twitter.svg" },
    { name: "OpenSea", link: "/OpenSea-icon.svg" },
  ];
  return (
    <div>
      <a href="" target="_blank" rel="noopener noreferrer">
        <span>
          <Image
            src={socialLinks.name}
            alt="Vercel Logo"
            width={72}
            height={16}
          />
        </span>
      </a>
    </div>
  );
}

export default SocialLink;
