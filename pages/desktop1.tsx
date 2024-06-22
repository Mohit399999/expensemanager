import type { NextPage } from "next";
import LoginFormContainer from "../components/login-form-container";

const Desktop1: NextPage = () => {
  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#514192,_#04068a)] h-[1024px] overflow-hidden text-center text-base text-white font-montserrat">
      <img
        className="absolute top-[18px] left-[36px] w-[47px] h-[988px] overflow-hidden"
        alt=""
        src="/frame.svg"
      />
      <div className="absolute top-[313px] left-[570px] w-[300px] h-[398px]">
        <div className="absolute top-[0px] left-[724px] w-[146px] h-[398px] overflow-hidden">
          <div className="absolute top-[378px] left-[0px] font-medium">
            Forgot password?
          </div>
        </div>
        <LoginFormContainer />
      </div>
    </div>
  );
};

export default Desktop1;
