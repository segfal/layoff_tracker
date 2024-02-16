import React from "react";
import community from "../images/community.webp"
import resources from "../images/resources.png"
import comparsion from "../images/comparisons.webp"
import layoff from "../images/layoff.webp"
import layoffs from "../images/1.png"
import Features from "../components/Features";


function LandingPage() {
  const handleLogin = async () => {
    
  };

  return (
    <div className="flex flex-col h-screen" style={{ backgroundColor: "white" }}>
      <section className="flex justify-evenly pb-5" style={{ borderBottom: "5px solid white" }}>
        <div className="h-full w-1/2">
          <div className="flex items-center h-80">
            <div>
              <p className="text-4xl font-bold" style={{ color: "#2E4764" }}>Welcome to LayOff Insight</p>
              <p className="text-4xl font-bold" style={{ color: "#2E4764" }}>Navigate Through Layoffs With Confidence</p>
              <p className="mt-5" style={{ color: "#2E4764" }}>Gain insights into layoff trends, compare company strategies, and access resources to help you through the transition.</p>
            </div>
          </div>
          <div className="space-x-10">
            <button onClick={handleLogin} className="h-16 w-48 font-bold text-xl text-white rounded-lg" style={{ backgroundColor: "#36454F" }}>View Trends</button>
            <span className="text-xl font-bold" style={{ color: "#2E4764" }}>Learn More</span>
          </div>
        </div>
        <img src={layoffs} alt="Layoff Trends" className="w-1/3"></img>
      </section>
      <section className="pb-11">
        <p className="text-4xl font-bold text-white mt-10 text-center">Key Features</p>
        <div className="flex justify-evenly mt-10">
          <Features logo={layoff} title={'Layoff Trends'} description1={'Track and analyze layoffs'} description2={'across various industries.'}></Features>
          <Features logo={comparsion} title={'Company Comparisons'} description1={'See how different companies'} description2={'handle layoffs.'}></Features>
          <Features logo={resources} title={'Resources & Support'} description1={'Find job resources,'} description2={'resume tips, and more.'}></Features>
          <Features logo={community} title={'Community Forum'} description1={'Connect with others,'} description2={'share experiences and support.'}></Features>
        </div>
      </section>
     
      <footer className="pb-4">
        <div className="flex justify-between ml-24 mr-24 pb-18 mt-10">
          <div className="ml-8 flex mr-5 pr-10">
            <p className="text-4xl font-bold" style={{ color: "#2E4764" }}>LayOff Insight</p>
          </div>
        </div>
        <hr className="ml-32 mr-24 mt-8" style={{ borderColor: "#2E4764" }}></hr>
        <p className="ml-32 mt-5" style={{ color: "#2E4764" }}>© 2023 LayOff Insight — Navigating Through Layoffs</p>
      </footer>
    </div>
  );
}

export default LandingPage;

