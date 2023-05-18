import LandingPicture from "../components/LandingPicture.js";
import BooksList from "../components/BooksList.js";
import HowItWorks from "../components/HowItWorks.js";
import AboutUs from "../components/AboutUs.js";
import Box from "@mui/material/Box";

function HomePage() {
  return (
    <Box
      style={{
        background: "linear-gradient(180deg, #f3eacd, #c7e9f5)",
        color: "#ed4296",
        textShadow: "1px 1px 2px black",
      }}
    >
      <LandingPicture />
      <BooksList />
      <HowItWorks />
      <AboutUs />
    </Box>
  );
}

export default HomePage;
