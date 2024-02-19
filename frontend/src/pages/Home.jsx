import React from "react";
import NewsPage from "./NewsPages";
import Banner from "./BannerTemp";
import SideBarDivider from "./SideBarDivider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <Banner />

      <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
        {/* post cards */}
        <NewsPage />

        <SideBarDivider />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
