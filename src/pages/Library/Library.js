import {useParams} from "react-router-dom";
import {librarys} from "../../helpers/LibraryList.js"


const Library = () => {
	const {id} = useParams();
	const library = librarys[id];

    return (
		<main className="section">
			<div className="container">
				<div className="project-details">
					<h1 className="title-2">{library.Disigner}</h1>
					<h3 className="title-3">{library.ItemName}</h3>

					<img
						src={library.imgBig}
						alt={library.ItemName}
						className="project-details__cover"
					/>

					<div className="project-details__desc">
						<p>Price: {library.price}</p>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Library;