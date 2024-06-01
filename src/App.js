import "./styles/main.css";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar/Navbar"

import Home from "./pages/Home";
import Projects from "./pages/Design/Projects";
import Project from "./pages/Design/Project";
import Music from "./pages/Music/Music";
import Stors from "./pages/Store/Stors";
import Store from './pages/Store/Store'

import ScrollToTop from "./utils/scrollToTop"

function App() {
  return (
		<div className="App">
			<Router>
				<ScrollToTop />
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/stors" element={<Stors />} />
					<Route path="/store/:id" element={<Store />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/project/:id" element={<Project />} />
					<Route path="/music" element={<Music />} />
				</Routes>
				
			</Router>
		</div>
  );
}

export default App;
