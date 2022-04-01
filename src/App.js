import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SCPs from "./SCPs";
import Nav from "./Nav";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/SCPs" element={<SCPs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;

function Home() {
  return (
    <div className="container card" style={{ width: "80%" }}>
      <br></br>
      <h2 style={{ textAlign: "center" }}>
        <strong>Welcome to the SCP Foundation</strong>
      </h2>
      <h4 style={{ textAlign: "center" }}>
        <em>A secure source of information</em>
      </h4>
      <img src="/images/scp049-scp035.gif" alt="" />
    </div>
  );
}
