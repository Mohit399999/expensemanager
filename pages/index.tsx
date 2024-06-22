import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import Page3 from "../components/page3";
import Page2 from "../components/page2";
import Page1 from "../components/page1";
import Page from "../components/page";

const Desktop: NextPage = () => {
  return (
    <div className="w-full relative bg-white h-[2948px] overflow-hidden">
      <Footer />
      <Page3 />
      <Page2 />
      <Page1 />
      <Page />
      <header className="absolute top-[73.8px] left-[53px] flex flex-row items-center justify-center gap-[662px]">
        <img
          className="w-[99.9px] relative h-[41px] object-cover"
          alt=""
          src="/logo1@2x.png"
        />
        <nav className="m-0 flex flex-row items-start justify-start gap-[43.8px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lgi-1 font-medium font-navbar text-nav-bar text-left inline-block">
            Expense Management
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lgi-1 font-medium font-navbar text-nav-bar text-left inline-block">
            Group Expenses
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-lgi-1 font-medium font-navbar text-nav-bar text-left inline-block">
            Monthly Tracking
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Desktop;
