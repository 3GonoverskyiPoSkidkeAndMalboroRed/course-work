import {useParams} from "react-router-dom";
import {projects} from "../../helpers/storeList"

const Project = () => {
	const {id} = useParams();
	const project = projects[id];

    return (
		<main className="section">
			<div className="container">
				<div className="project-details">
					<h1 className="title-2">{project.Disigner}</h1>
					<h3 className="title-3">{project.ItemName}</h3>

					<img
						src={project.imgBig}
						alt={project.ItemName}
						className="project-details__cover"
					/>

					<div className="project-details__desc">
						<p>Price: {project.price}</p>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Project;