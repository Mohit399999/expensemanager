import type { NextPage } from "next";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`absolute top-[2815px] left-[calc(50%_-_640px)] w-[1279px] h-[111px] text-center text-xs text-black font-navbar ${className}`}
    >
      <div className="absolute top-[3px] left-[calc(50%_-_192.5px)] flex flex-row items-center justify-center gap-[38px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-mid font-medium font-navbar text-nav-bar text-left inline-block">{`About Us `}</button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-mid font-medium font-navbar text-nav-bar text-left inline-block">
          Blog
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-mid font-medium font-navbar text-nav-bar text-left inline-block">
          Contact Us
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-mid font-medium font-navbar text-nav-bar text-left inline-block">
          Support
        </button>
      </div>
      <div className="absolute top-[96px] left-[calc(50%_-_78.5px)] whitespace-pre-wrap">
        © 2024 All rights reserved.
      </div>
      <img
        className="absolute top-[61px] left-[calc(50%_-_639.5px)] w-[1279px] h-[3px] object-contain"
        alt=""
        src="/line-1@2x.png"
      />
      <div className="absolute top-[0px] right-[0px] flex flex-row items-start justify-start gap-[10px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[26px] relative h-[26px] bg-[url('/circled-facebook-svg256-1@3x.png')] bg-cover bg-no-repeat bg-[top]" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[26px] relative h-[26px] bg-[url('/circled-instagram-svg256-1@3x.png')] bg-cover bg-no-repeat bg-[top]" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[26px] relative h-[26px] bg-[url('/circled-linkedin-svg256-1@3x.png')] bg-cover bg-no-repeat bg-[top]" />
        <img
          className="w-[25px] relative h-[25px] object-cover"
          alt=""
          src="/circled-youtube-svg256-1@2x.png"
        />
        <img
          className="w-[25px] relative h-[25px] object-cover"
          alt=""
          src="/circled-twitter-svg256-1@2x.png"
        />
      </div>
      <img
        className="absolute top-[2px] left-[0px] w-11 h-[23.4px]"
        alt=""
        src="/logo.svg"
      />
    </footer>
  );
};

export default Footer;
