import {useParams} from "react-router-dom";
import {librarys} from "../../helpers/librarysList"

const Library = () => {
	const {id} = useParams();
	const librarys = librarys[id];

    return (
		<main className="section">
			<div className="container">
				<div className="library-details">
					<h1 className="title-2">{librarys.Disigner}</h1>
					<h3 className="title-3">{librarys.ItemName}</h3>

					<img
						src={librarys.imgBig}
						alt={librarys.ItemName}
						className="library-details__cover"
					/>

					<div className="library-details__desc">
						<p>Price: {librarys.price}</p>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Library;