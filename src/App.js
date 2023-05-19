import HomePage from "./modules/HomePage";
import Header1 from "./components/Header1";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter,
} from "react-router-dom";
import CreateBook from "./pages/createBook";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Header1 />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/createbook" element={<CreateBook />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
