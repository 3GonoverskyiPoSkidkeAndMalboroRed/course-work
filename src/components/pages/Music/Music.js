import ReactPlayer from 'react-player'
import './Music.css'
import Header from '../../header/header.js'

const youtubeLinks = [
  {url: 'https://www.youtube.com/watch?v=jckDw7_JbfU', description: 'Description 1\nSecond line of description'},
  {url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', description: 'Description 2\nSecond line of description'},
  {url: 'https://www.youtube.com/watch?v=Zgi9g-oGsSE', description: 'Description 3\nSecond line of description'},
];

function Music() {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='video-container'>
          {youtubeLinks.map((link, index) => (
            <div key={index} className='video-wrapper'>
              <ReactPlayer
                url={link.url}
                width='100%'
                height='100%'
              />
              <p>{link.description.split('\n').map((line, index) => (
                <span key={index}>{line}<br/></span>
              ))}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Music;