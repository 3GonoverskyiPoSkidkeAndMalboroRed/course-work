import Header from './../components/header/Header'
import photo from '../img/2tydEsN4bqMn5PUEDFqfS4-1920-80.jpg'

const itemsLinks = [
  {url: 'https://www.youtube.com/watch?v=jckDw7_JbfU', description: 'Description 1\nSecond line of description'},
  {url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', description: 'Description 2\nSecond line of description'},
  {url: 'https://www.youtube.com/watch?v=Zgi9g-oGsSE', description: 'Description 3\nSecond line of description'},
  {url: 'https://www.youtube.com/watch?v=Zgi9g-oGsSE', description: 'Description 3\nSecond line of description'},
];

const Home = () => {
  return (
    <>
      <Header />
	  
      <main className="footer">
	<div className='title-2'>
	<h2>ABSORB THIS CONTENT</h2>
	</div>
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              {itemsLinks.map((item, index) => (
                <li key={index} className="social__item">
                  <a href={item.url}>
                    <img src={photo} alt="Link" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;