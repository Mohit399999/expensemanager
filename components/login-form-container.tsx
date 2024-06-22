import type { NextPage } from "next";

export type LoginFormContainerType = {
  className?: string;
};

const LoginFormContainer: NextPage<LoginFormContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] w-[300px] h-[367px] overflow-hidden text-center text-sm text-white font-montserrat ${className}`}
    >
      <div className="absolute top-[169px] left-[0px] rounded box-border w-[300px] h-[45px] border-[1px] border-solid border-white">
        <div className="absolute top-[13px] left-[51px] leading-[20px] uppercase font-light">
          Username
        </div>
        <img
          className="absolute top-[13px] left-[12px] w-5 h-5 overflow-hidden"
          alt=""
          src="/user.svg"
        />
      </div>
      <div className="absolute top-[234px] left-[0px] rounded box-border w-[300px] h-[45px] border-[1px] border-solid border-white">
        <div className="absolute top-[13px] left-[51px] leading-[20px] uppercase font-light">
          password
        </div>
        <img
          className="absolute h-[44.44%] w-[6.67%] top-[28.89%] right-[89.33%] bottom-[26.67%] left-[4%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/lock.svg"
        />
      </div>
      <div className="absolute top-[0px] left-[0px] w-[300px] h-[367px] overflow-hidden text-base text-royalblue">
        <img
          className="absolute h-[26.68%] w-[39.8%] top-[0%] right-[30.2%] bottom-[73.32%] left-[30%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group.svg"
        />
        <div className="absolute top-[322px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.3)] rounded bg-white w-[300px] h-[45px]">
          <div className="absolute top-[13px] left-[123px] leading-[20px] uppercase font-semibold">
            login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFormContainer;
