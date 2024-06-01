import Header from './../components/header/Header'
import Footer from '../components/footer/Footer'

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
  <Footer />
	</div>

      </main>
    </>
  );
}

export default Home;