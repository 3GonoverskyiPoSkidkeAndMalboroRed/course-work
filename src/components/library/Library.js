import { NavLink } from 'react-router-dom';
import '../library/style.css';

const Library = ({ title, img, index }) => {
	return (
		<NavLink to={`/library/${index}`}>
			<li className="project">
				<img src={img} alt={title} className="project__img" />

			</li>
		</NavLink>
	);
};

export default Library;
