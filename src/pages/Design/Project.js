import {useParams} from "react-router-dom";
import {projects} from "../../helpers/projectsList"

const Project = () => {
	const {id} = useParams();
	const project = projects[id];

	const handleImageClick = (event) => {
		event.target.classList.toggle('zoom');
	};
    return (
		<main className="section">
			<div className="container">
				<div className="project-details">
					<h1 className="title-2">{project.Disigner}</h1>
					<h3 className="title-3">{project.ItemName}</h3>
					<div class="library-grid">
					{project.imgsBig.map((img, index) => (
					<img
					key={index}
					src={img}
					alt={project.ItemName}
				    className="project-details__cover"
					onClick={handleImageClick}
					/>
					))}
					<div className="project-details__desc">
						<p>Price: {project.price}</p>
					</div>
					</div>
				</div>
			</div> 
		</main>
	);
}

export default Project;