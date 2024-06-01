import "./style.css";

import vk from '../../img/2tydEsN4bqMn5PUEDFqfS4-1920-80.jpg'
import instagram from '../../img/2tydEsN4bqMn5PUEDFqfS4-1920-80.jpg'
import twitter from '../../img/2tydEsN4bqMn5PUEDFqfS4-1920-80.jpg'


const Footer = () => {
    return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item">
							<a href="#!">
								<img src={vk} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="#!">
								<img src={instagram} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="#!">
								<img src={twitter} alt="Link" />
							</a>
						</li>

					</ul>
					<div className="copyright">
						<p>© 2022 frontend-dev.com</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;