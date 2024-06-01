import Project from '../../components/project/Project';
import {projects} from "../../helpers/projectsList"

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
