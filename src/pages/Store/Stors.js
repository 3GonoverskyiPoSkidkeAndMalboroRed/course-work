import Project from '../Store/Store.js';
import {projects} from "../../helpers/storeList.js"

const Projects = () => {
	return (
		<main className="section">
  <div className="container">
    {/* <h2 className="title-1"></h2> */}
    <div className="projects-grid">
      <ul className="projects">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              title={project.Disigner}
              img={project.img}
              index={index}
            />
          );
        })}
      </ul>
    </div>
  </div>
</main>
	);
};

export default Projects;
