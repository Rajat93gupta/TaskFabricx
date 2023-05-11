import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import FirstPage from "./Component/FirstPage";
import SecondPage from "./Component/SecondPage";
import Sec from "./Component/Sec";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" Component={FirstPage} />
          <Route exact path="/secondpage" Component={Sec} />
        </Routes>

        {/* <div className="list">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="Secondpage">Page 1</Link>
            </li>
          </ul>
        </div> */}
      </Router>
    </div>
  );
}
