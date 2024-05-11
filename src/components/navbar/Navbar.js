import { NavLink } from 'react-router-dom';
// import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import './style.css';
import logo from '../../img/logoshmodelmodel.png'
const Navbar = () => {
	const activeLink = 'nav-list__link nav-list__link--active';
	const normalLink = 'nav-list__link';

	return (
		<nav className="nav">
			<div className="container">
				<div className="nav-row">



					<ul className="nav-list">
						<li className="nav-list__item">
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								STORE
							</NavLink>
						</li>

						<li className="nav-list__item">
							<NavLink
								to="/projects"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								DESIGN
							</NavLink>
						</li>

						<NavLink to="/" className="logo">
					<img src={logo} alt="Logo" />
					</NavLink>

						<li className="nav-list__item">
							<NavLink
								to="/news"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								NEWS
							</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink
								to="/contacts"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								MUSIC
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
