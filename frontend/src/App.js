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
import { Alert } from './components/Alert';



function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar title="Notebook" />
          <Alert message="This is test alert" />
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
