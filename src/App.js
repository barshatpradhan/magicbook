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
      <Header1 />
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/createbook" element={<CreateBook />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
