import "./styles/main.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home";
import Projects from "./pages/Design/Projects";
import Project from "./pages/Design/Project";
import Music from "./pages/Music/Music";
import Librarys from "./pages/Library/Librarys"
import Library from "./pages/Library/Library"


function App() {
  return (
		<div className="App">
			<Router>

				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/librarys" element={<Librarys />} />
					<Route path="/library/:id" element={<Library />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/project/:id" element={<Project />} />
					<Route path="/music" element={<Music />} />
				</Routes>
				
			</Router>
		</div>
  );
}

export default App;
