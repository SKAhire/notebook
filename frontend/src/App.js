import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from './context/notes/NoteState';



function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar title="Notebook" />
          {/* <Alert alert={alert} /> */}
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </NoteState>
    </>

  );
}

export default App;
