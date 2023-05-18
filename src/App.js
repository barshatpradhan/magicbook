import HomePage from "./modules/HomePage";
import Header1 from "./components/Header1";
import HowitWorks from "./components/HowItWorks";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateBook from "./pages/createBook";
import ImageUpload from "./api/imageModifier";

function App() {
  return (
    <>
      <Header1 />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/createbook" element={<CreateBook />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
