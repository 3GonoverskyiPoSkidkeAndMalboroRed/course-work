import { NavLink } from 'react-router-dom';
import './style.css';

function Library({ title, img, index }) {
  return (
    <NavLink to={`/library/${index}`}>
      <li className="project">
        <img src={img} alt={title} className="project__img" />

      </li>
    </NavLink>
  );
}

export default Library;
