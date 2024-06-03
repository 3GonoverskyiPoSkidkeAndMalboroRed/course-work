import { NavLink } from 'react-router-dom';
import './style.css';

const Library = ({ title, img, index }) => {
	return (
		<NavLink to={`/library/${index}`}>
			<li className="library">
				<img src={img} alt={title} className="library__img" />
				<h3 className="library__title">{title}</h3>
			</li>
		</NavLink>
	);
};

export default Library;
