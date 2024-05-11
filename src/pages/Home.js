import Header from './../components/header/Header'
import photo from '../img/2tydEsN4bqMn5PUEDFqfS4-1920-80.jpg'

const Home = () => {
    return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<h2 className="title-2">ABSORB THIS ITEMS</h2>
					<ul className="image-list">
						<li className="image-list__item">
							<img src={photo} alt="Image 1" />
						</li>
						<li className="image-list__item">
							<img src={photo} alt="Image 2" />
						</li>
						<li className="image-list__item">
							<img src={photo} alt="Image 3" />
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;