
import "../css/LandingPage.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Button from "@mui/material/Button";
import dash_image from "../assets/img/dashboard.png";
import Header from "./Header";
import vid1 from "../assets/img/layoffVid2.mp4";
import vid2 from "../assets/img/layoffVid3.mp4";
import curved_arrow from "../assets/img/curved-arrow.svg";
import layoffImg from "../assets/img/layoffImg1.png";

const buttonStyle = {
  cursor: "pointer",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#00543B",
  color: "#fff",
  position: "absolute",
  bottom: "-15px",
  right: "260px",
  transform: "translateY(-100%)",
};

const textStyle = {
  position: "absolute",
  bottom: "100px",
  left: "80%",
  transform: "translateX(-70%)",
  color: "white",
};

const textStyle2 = {
  position: "absolute",
  top: "50px",
  right: "78%",
  transform: "translateX(20%)",
  color: "white",
};
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
                  // marginBottom: "200"
                }}
              >
                Layoff and hiring data across industries one click away.
                Filtering options to provide in-depth analysis.
              </p>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <button style={buttonStyle}>Dashboard</button>
              </div>

              <img
                src={dash_image}
                alt="Layoff Metrics Dashboard"
                style={{ maxWidth: "50%", height: "auto" }}
              />

              <img
                src={curved_arrow}
                alt="Layoff Metrics Dashboard"
                style={{
                  maxWidth: "50%",
                  height: "auto",
                  position: "absolute",
                  transform: "scaleY(-1)",
                  width: "50px",
                }}
              />
              {/* Additional content like buttons can go here */}
            </div>
            {/* <img src={curved_arrow} alt="" class="home__arrow"/>  */}
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}

          speed={0.2}
          style={{ height: "100vh" }}
          factor={2}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "120vh", // Consistent with the height of the previous layer
              color: "white",
              backgroundImage: `url(${layoffImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1 style={textStyle2}>Recently Laid Off?</h1>
            <h1 style={textStyle}>Stay Ahead Of The Game!</h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.2} style={{ height: "100vh" }}>
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
                position: "fixed", // Use fixed to cover the entire viewport
                top: 0,
                left: 0,
                width: "100vw", // Set width to 100% of the viewport width
                height: "120vh", // Set height to 100% of the viewport height
                objectFit: "cover", // Cover the container without stretching
                zIndex: -1, // Send the video to the background
              }}
            >
              <source src={vid1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start", // Align items to the start of the container along the cross axis
              justifyContent: "center", // Keeps the vertical alignment at center
              height: "100vh",
              color: "black",
              textAlign: "left", // Aligns text to the left
              zIndex: 2, // Above the video background
              paddingLeft: "10%", // Adds padding on the left to offset the text from the very edge
            }}
          >
            {" "}
            <h1 style={textStyle2}>Layoffs Can be Hard.</h1>
            <h2 style={textStyle}>
              {" "}
              But, with our app, make it easy for yourself to see whats
              happening and remain a step ahead.
            </h2>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.2} style={{ height: "100vh" }}>
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
                position: "fixed", // Use fixed to cover the entire viewport
                top: 0,
                left: 0,
                width: "100vw", // Set width to 100% of the viewport width
                height: "120vh", // Set height to 100% of the viewport height
                objectFit: "cover", // Cover the container without stretching
                zIndex: -1, // Send the video to the background
              }}
            >
              <source src={vid2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start", // Align items to the start of the container along the cross axis
              justifyContent: "center", // Keeps the vertical alignment at center
              height: "100vh",
              color: "black",
              textAlign: "left", // Aligns text to the left
              zIndex: 2, // Above the video background
              paddingLeft: "10%", // Adds padding on the left to offset the text from the very edge
            }}
          >
            {/* <h1>Welcome to Our Technology</h1> */}

          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};



export default LandingPage;
