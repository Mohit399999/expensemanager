import type { NextPage } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";

export type Page2Type = {
  className?: string;
};

const Page2: NextPage<Page2Type> = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[calc(50%_+_23px)] left-[calc(50%_-_681px)] w-[1363px] h-[568px] text-center text-13xl text-black font-h2 ${className}`}
    >
      <div className="absolute top-[calc(50%_-_238px)] left-[calc(50%_-_357.5px)] text-23xl capitalize font-medium inline-block w-[716px]">
        Manage Your Expenses with Ease and Confidence
      </div>
      <div className="absolute top-[calc(50%_-_284px)] left-[calc(50%_-_41.5px)] text-lg uppercase font-semibold font-navbar text-left">
        Simplify
      </div>
      <div className="absolute top-[290px] left-[0px] w-[328px] h-[278px] font-navbar">
        <div className="absolute w-full top-[39.57%] left-[0%] font-semibold font-h2 inline-block">
          Monthly Expense Tracking
        </div>
        <div className="absolute top-[-1769.4px] left-[calc(50%_-_188.5px)] rounded-[4.07px] bg-whitesmoke w-[1410px] overflow-hidden flex flex-row items-center justify-between text-left text-lgi-3">
          <div className="w-[106.7px] flex flex-row items-center justify-center">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[40.7px] relative h-[40.7px]">
              <img
                className="absolute top-[10.2px] left-[10.2px] w-[18.3px] h-[18.3px] overflow-hidden"
                alt=""
                src="/home-1.svg"
              />
            </button>
            <div className="w-[74.2px] h-[43.7px] hidden flex-col items-center justify-center">
              <div className="relative font-semibold">Home</div>
            </div>
          </div>
          <DropdownButton
            className="w-[32.7px] flex flex-col relative"
            as={ButtonGroup}
            style={{ width: "32.7", height: "100%" }}
          >{` `}</DropdownButton>
        </div>
        <div className="absolute h-[20.5%] w-[71.83%] top-[79.5%] left-[13.96%] text-base inline-block">
          Make secure payments directly from the app, saving you time and
          hassle.
        </div>
        <img
          className="absolute h-[17.99%] w-[15.24%] top-[8.99%] right-[42.38%] bottom-[73.02%] left-[42.38%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/money-3@2x.png"
        />
      </div>
      <div className="absolute top-[290px] left-[345px] w-[328px] h-[278px]">
        <div className="absolute w-full top-[39.57%] left-[0%] font-semibold inline-block">
          <p className="m-0">{`Ai Financial `}</p>
          <p className="m-0">Advice</p>
        </div>
        <div className="absolute h-[20.5%] w-[71.83%] top-[79.5%] left-[13.96%] text-base font-navbar inline-block">
          <p className="m-0">Secure personalized financial</p>
          <p className="m-0">advice powered by AI technology</p>
        </div>
        <img
          className="absolute h-[21.58%] w-[15.52%] top-[0%] right-[42.1%] bottom-[78.42%] left-[42.38%] max-w-full overflow-hidden max-h-full hidden"
          alt=""
          src="/money.svg"
        />
        <img
          className="absolute h-[20.36%] w-[17.07%] top-[6.47%] right-[41.46%] bottom-[73.17%] left-[41.46%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/artificialbraincomputer3-1@2x.png"
        />
      </div>
      <div className="absolute top-[290px] left-[690px] w-[328px] h-[278px]">
        <div className="absolute w-full top-[39.57%] left-[0%] font-semibold inline-block">
          User Interactions through Payments
        </div>
        <div className="absolute h-[20.5%] w-[71.83%] top-[79.5%] left-[13.96%] text-base font-navbar inline-block">
          Connect and engage with other users through secure payments
        </div>
        <img
          className="absolute h-[21.58%] w-[15.52%] top-[0%] right-[42.1%] bottom-[78.42%] left-[42.38%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/money1@2x.png"
        />
      </div>
      <div className="absolute top-[290px] left-[1035px] w-[328px] h-[278px]">
        <div className="absolute w-full top-[39.57%] left-[0%] font-semibold inline-block">
          Split Money In Groups
        </div>
        <div className="absolute h-[20.5%] w-[71.83%] top-[79.5%] left-[13.96%] text-base font-navbar inline-block">
          Effortlessly split bills and expenses among friends, family, or
          roommates.
        </div>
        <img
          className="absolute h-[19.78%] w-[16.77%] top-[7.19%] right-[41.77%] bottom-[73.02%] left-[41.46%] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/splitv-2@2x.png"
        />
      </div>
      <img
        className="absolute top-[313px] left-[829px] w-[58px] h-[51.8px] overflow-hidden"
        alt=""
        src="/payment.svg"
      />
    </section>
  );
};

export default Page2;
