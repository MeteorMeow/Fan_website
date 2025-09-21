import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Characters from "./character";
import Model from "./Model";

function App() {
  return (
    <div>
      <nav className="Navbar">
        <Link className="NavButton" to="/">Home</Link>
        <Link className="NavButton" to="/character">Characters</Link>
        <Link className="NavButton" to="/model">Model</Link>
      </nav>

      <Routes>
        <Route path="/"  
          element={
            <div className='home-container'>
              <div className='cover'>
                <img src={process.env.PUBLIC_URL + "/cover.jpg"} alt='Check your internet' className="img" />
                <div className="text-box">
                  <h1 className="title">Frieren: Beyond The Journey's End</h1>
                  <p className="rating">⭐ IMDb: 9.1/10</p>
                  <div className="genres">
                    <span className="tag">Fantasy</span>
                    <span className="tag">Adventure</span>
                    <span className="tag">Drama</span>
                  </div>
                  <p className="summary">
                    A story about an elf who has lived for hundreds of years after the end 
                    of a great adventure, reflecting on time, memory, and what it means to 
                    connect with others.
                  </p>
                </div>
              </div>
            </div>
          } 
        />
        <Route path="/character" element={
          <div className="page-container">
            <Characters />
          </div>} />
        <Route path="/model" element={
          <div className="page-container">
            <Model />
          </div>} />
      </Routes>
    </div>
  );
}
export default App;