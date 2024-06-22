import type { NextPage } from "next";
import Property1Default from "./property1-default";

export type Page3Type = {
  className?: string;
};

const Page3: NextPage<Page3Type> = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[2129px] left-[calc(50%_-_720px)] w-[1440px] h-[621px] text-center text-26xl text-white font-navbar ${className}`}
    >
      <img
        className="absolute top-[0px] left-[calc(50%_-_720px)] w-[1440px] h-[621px] object-cover"
        alt=""
        src="/image-3@2x.png"
      />
      <h2 className="m-0 absolute top-[198px] left-[calc(50%_-_341px)] text-inherit font-medium font-h2 text-left">
        Stay Updated with Financial Tips
      </h2>
      <div className="absolute top-[calc(50%_+_44.5px)] left-[calc(50%_-_380px)] text-lg inline-block w-[761px]">
        Subscribe to our newsletter for the latest updates and valuable
        financial tips.
      </div>
      <div className="absolute top-[482px] left-[calc(50%_-_157px)] text-xs text-snow">
        By subscribing, you agree to our Terms and Conditions.
      </div>
      <div className="absolute top-[396px] left-[calc(50%_-_191px)] flex flex-row items-end justify-start gap-[32px]">
        <input
          className="[border:none] [outline:none] font-navbar text-base bg-white w-[265px] rounded-md flex flex-row items-center justify-start p-2.5 box-border text-gray"
          placeholder="Your Email Address"
          type="text"
        />
        <Property1Default
          button="SUBMIT"
          property1DefaultWidth="85px"
          property1DefaultBackgroundColor="#404183"
          property1DefaultBorder="none"
          property1DefaultBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          property1DefaultHeight="40px"
          property1DefaultPosition="unset"
          property1DefaultTop="unset"
          property1DefaultLeft="unset"
          property1DefaultFilter="unset"
          buttonColor="#fff"
        />
      </div>
    </section>
  );
};

export default Page3;
