import React from "react";
import { SocialIcon } from "react-social-icons";

const Socials = () => {
  return (
    <div className="bg-gray-900/60 h-full flex flex-row gap-4 p-4 rounded-full">
      <SocialIcon
        url="https://x.com/"
        style={{ width: 32, height: 32 }}
        className="w-8 h-8 cursor-pointer"
      />
      <SocialIcon
        url="https://instagram.com/"
        style={{ width: 32, height: 32 }}
        className="w-8 h-8 cursor-pointer"
      />
      <SocialIcon
        url="https://facebook.com/"
        style={{ width: 32, height: 32 }}
        className="w-8 h-8 cursor-pointer"
      />
      <SocialIcon
        url="https://tiktok.com/"
        style={{ width: 32, height: 32 }}
        className="w-8 h-8 cursor-pointer"
      />
      <SocialIcon
        url="https://youtube.com/"
        style={{ width: 32, height: 32 }}
        className="w-8 h-8 cursor-pointer"
      />
      <SocialIcon
        url="https://twitch.tv/"
        style={{ width: 32, height: 32 }}
        className="w-8 h-8 cursor-pointer"
      />
      <SocialIcon
        url="https://discord.com/"
        style={{ width: 32, height: 32 }}
        className="w-8 h-8 cursor-pointer"
      />
    </div>
  );
};

export default Socials;
