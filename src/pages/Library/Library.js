import {useParams} from "react-router-dom";
import {librarys} from "../../helpers/LibraryList.js"

const Library = () => {
	const {id} = useParams();
	const library = librarys[id];

	const handleImageClick = (event) => {
		event.target.classList.toggle('zoom');
	};

    return (
		<main className="section">
			<div className="container">
				<div className="library-details">
					<h1 className="title-2">{library.Tiile}</h1>
					<h3 className="title-3">{library.MagazineName}</h3>
					<div class="library-grid">

					{library.imgs.map((img, index) => (
						<img
							key={index}
							src={img}
							alt={library.ItemName}
							className="library-grid__item"
							onClick={handleImageClick}
						/>
					))}
					</div>
				</div>
			</div>
		</main>
	);
}

export default Library;