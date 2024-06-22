import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Desktop2: NextPage = () => {
  const router = useRouter();

  const onBackLeft1IconClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#514192,_#04068a)] h-[1024px] overflow-hidden flex flex-row items-start justify-start py-[33px] px-12 box-border gap-[475px] text-center text-sm text-white font-montserrat">
      <img
        className="w-[47px] relative h-[47px] overflow-hidden shrink-0 cursor-pointer"
        alt=""
        src="/backleft-1.svg"
        onClick={onBackLeft1IconClick}
      />
      <div className="w-[667px] h-[376px] flex flex-col items-center justify-end gap-[13px] mt-[291px]">
        <img
          className="w-[109px] relative h-[109px] overflow-hidden shrink-0"
          alt=""
          src="/frame1.svg"
        />
        <div className="w-[300px] h-[254px] flex flex-col items-center justify-start gap-[48px]">
          <div className="w-[300px] h-[161px] overflow-hidden shrink-0 flex flex-col items-center justify-start gap-[13px]">
            <div className="w-[300px] rounded box-border h-[45px] flex flex-row items-center justify-start py-[13px] px-3 gap-[18px] border-[1px] border-solid border-white">
              <img
                className="w-5 relative h-5 overflow-hidden shrink-0"
                alt=""
                src="/user1.svg"
              />
              <div className="relative leading-[20px] uppercase font-light">
                USER NAME
              </div>
            </div>
            <div className="w-[300px] rounded box-border h-[45px] flex flex-row items-center justify-start py-[13px] px-3 gap-[24px] border-[1px] border-solid border-white">
              <img
                className="w-5 relative h-5 overflow-hidden shrink-0"
                alt=""
                src="/lock1.svg"
              />
              <div className="relative leading-[20px] uppercase font-light">
                EMAIL
              </div>
            </div>
            <div className="w-[300px] rounded box-border h-[45px] flex flex-row items-center justify-start py-[11px] px-3 gap-[24px] border-[1px] border-solid border-white">
              <img
                className="w-5 relative h-5 overflow-hidden shrink-0"
                alt=""
                src="/lock1.svg"
              />
              <div className="relative leading-[20px] uppercase font-light">{`PASSWORD `}</div>
            </div>
          </div>
          <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.3)] rounded bg-white h-[45px] flex flex-col items-center justify-end py-3 px-0 box-border text-base text-royalblue">
            <div className="relative leading-[20px] uppercase font-semibold">
              Sign up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop2;
