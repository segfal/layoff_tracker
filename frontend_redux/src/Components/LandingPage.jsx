import "./LandingPage.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Button from "@mui/material/Button";
import dash_image from "../assets/dashboard.png";
import Header from "./Header";
import vid1 from "../assets/layoffVid2.mp4";

const LandingPage = () => {
  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer offset={0} speed={0.2} style={{ height: "100vh" }}>
          <Header></Header>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "120vh", // Ensure this is also 100vh
              color: "white",
              backgroundColor: "#FCF7EC",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h1
                style={{
                  fontSize: "50px",
                  color: "#00543B",
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                All Layoff information you need in one place
              </h1>
              <p
                style={{
                  maxWidth: "640px",
                  margin: "auto",
                  color: "#00543B",
                  fontSize: "20px",
                  lineHeight: "1.6",
                }}
              >
                Layoff and hiring data across industries one click away.
                Filtering options to provide in-depth analysis.
              </p>

              <img
                src={dash_image}
                alt="Layoff Metrics Dashboard"
                style={{ maxWidth: "50%", height: "auto" }}
              />
              {/* Additional content like buttons can go here */}
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ height: "100vh" }}>
          <div
            style={{
              position: "fixed", // Fixed position to act as a background
              top: 0,
              left: 0,
              width: "100%",
              height: "120%",
              overflow: "hidden",
              zIndex: -1, // Behind content
            }}
          >
            <video
              autoPlay
              loop
              muted
              style={{
                position: 'fixed', // Use fixed to cover the entire viewport
                top: 0,
                left: 0,
                width: '100vw', // Set width to 100% of the viewport width
                height: '120vh', // Set height to 100% of the viewport height
                objectFit: 'cover', // Cover the container without stretching
                zIndex: -1, // Send the video to the background
              }}>
              <source src={vid1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              color: "white",
              textAlign: "center",
              zIndex: 2, // Above the video background
            }}
          >
            <h1>Welcome to Our Technology</h1>
            {/* ... other content ... */}
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.2}
          style={{ height: "100vh" }}
          factor={2}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "120vh", // Consistent with the height of the previous layer
              color: "white",
              backgroundImage: `url(https://images.unsplash.com/photo-1562569633-622303bafef5)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1>Innovating for Tomorrow</h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.2} style={{ height: "100vh" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "120vh", // Ensure this is also 100vh
              color: "white",
              backgroundImage: `url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1>Join Us</h1>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default LandingPage;
