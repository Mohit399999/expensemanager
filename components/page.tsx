import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Property1Default from "./property1-default";

export type PageType = {
  className?: string;
};

const Page: NextPage<PageType> = ({ className = "" }) => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/desktop1");
  }, [router]);

  const onButtonClick1 = useCallback(() => {
    router.push("/desktop2");
  }, [router]);

  return (
    <div
      className={`absolute top-[126px] left-[calc(50%_-_708px)] w-[1415px] h-[621px] text-left text-lg text-black font-navbar ${className}`}
    >
      <div className="absolute top-[0px] left-[calc(50%_-_707.5px)] shadow-[0px_4px_4px_rgba(4,_6,_138,_0.33)] rounded-mid [background:linear-gradient(-79.07deg,_#dfe2ef_85.4%,_#afb5d5_99.76%)] w-[1415px] h-[621px]" />
      <Property1Default
        button="LOGIN"
        property1DefaultWidth="74px"
        property1DefaultBackgroundColor="#04068a"
        property1DefaultBorder="none"
        property1DefaultBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        property1DefaultHeight="unset"
        property1DefaultPosition="absolute"
        property1DefaultTop="506px"
        property1DefaultLeft="221px"
        property1DefaultFilter="unset"
        buttonColor="#fff"
        onButtonClick={onButtonClick}
      />
      <Property1Default
        button="SIGN UP"
        property1DefaultWidth="73px"
        property1DefaultBackgroundColor="transparent"
        property1DefaultBorder="1px solid #04068a"
        property1DefaultBoxShadow="unset"
        property1DefaultHeight="unset"
        property1DefaultPosition="absolute"
        property1DefaultTop="506px"
        property1DefaultLeft="314px"
        property1DefaultFilter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        buttonColor="#04068a"
        onButtonClick={onButtonClick1}
      />
      <p className="m-0 absolute top-[419px] left-[75px]">
        <span className="block whitespace-pre-wrap">{`Manage your  personal and group expenses effortlessly with our `}</span>
        <span className="block">web-based application</span>
      </p>
      <h1 className="m-0 absolute top-[246px] left-[75px] text-36xl font-bold font-h2">
        <p className="m-0">{`Take Control of your `}</p>
        <p className="m-0">Expenses with ease</p>
      </h1>
      <img
        className="absolute top-[37px] left-[calc(50%_-_7.5px)] rounded-11xl w-[702px] h-[547px] object-cover"
        alt=""
        src="/image1@2x.png"
      />
    </div>
  );
};

export default Page;
