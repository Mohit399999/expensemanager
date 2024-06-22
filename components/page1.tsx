import type { NextPage } from "next";

export type Page1Type = {
  className?: string;
};

const Page1: NextPage<Page1Type> = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[811px] left-[calc(50%_-_707px)] w-[1415px] h-[621px] text-left text-3xl text-black font-navbar ${className}`}
    >
      <div className="absolute top-[0px] left-[calc(50%_-_707.5px)] shadow-[0px_4px_4px_rgba(4,_6,_138,_0.3)] rounded-mid [background:linear-gradient(78.22deg,_#dfe2ef_85.4%,_#afb5d5)] w-[1415px] h-[621px]" />
      <h3 className="m-0 absolute top-[417px] left-[745px] text-inherit font-bold font-inherit">
        SECURE
      </h3>
      <h3 className="m-0 absolute top-[417px] left-[1057px] text-inherit font-bold font-h2">
        CONVENIENT
      </h3>
      <p className="m-0 absolute top-[243px] left-[745px] text-lg inline-block w-[502px] h-[3px]">{`Experience hassle-free payments with our direct payment feature `}</p>
      <div className="absolute top-[471px] left-[745px] text-mini inline-block w-[228px] h-12">
        <p className="m-0">{`Enjoy peace of mind that `}</p>
        <p className="m-0">{`your payments are secure `}</p>
        <p className="m-0">and protected</p>
      </div>
      <div className="absolute top-[471px] left-[1057px] text-mini inline-block w-[190px] h-12">
        <p className="m-0">Make payments anytime,</p>
        <p className="m-0">anywhere, without the</p>
        <p className="m-0">need of cash or checks</p>
      </div>
      <h2 className="m-0 absolute top-[103px] left-[730px] text-26xl font-medium font-h2">
        <p className="m-0">{`Simplify Your Payments with `}</p>
        <p className="m-0">direct payment functionality</p>
      </h2>
      <img
        className="absolute top-[357px] left-[745px] w-[49px] h-[49px] overflow-hidden object-cover"
        alt=""
        src="/secureshieldshieldsvgrepocom-2@2x.png"
      />
      <img
        className="absolute top-[354px] left-[1057px] w-[76px] h-[71px] overflow-hidden object-cover"
        alt=""
        src="/deliveryfastsvgrepocom-2@2x.png"
      />
      <img
        className="absolute top-[32px] left-[16px] rounded-11xl w-[602px] h-[557px] object-cover"
        alt=""
        src="/rectangle-25@2x.png"
      />
    </section>
  );
};

export default Page1;
