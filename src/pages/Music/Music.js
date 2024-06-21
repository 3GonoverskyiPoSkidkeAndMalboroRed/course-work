// 



import ReactPlayer from 'react-player/youtube';

const youtubeLinks = [
  { id: 1, url: 'https://www.youtube.com/watch?v=XC68z6vHwpQ&t=1137s', description: 'Brutalismus 3000\n HOR BERLIN LIVE' },
  { id: 2, url: 'https://www.youtube.com/watch?v=VDgaKWRuhRU', description: 'Sara Landry\nBoiler Room Live' },
  { id: 3, url: 'https://www.youtube.com/watch?v=ubaVF0pqonE', description: 'D.Dan\nBoiler Room x Instytut Festival' },
  { id: 4, url: 'https://www.youtube.com/watch?v=mPivA1islyU', description: 'Black Sabbath\nParanoid (Extended Version) HQ' },
];

function Contacts() {
  return (
    <main className="section">
      <div className="video-container">
        {youtubeLinks.map((link) => (
          <div key={link.id} className="video-wrapper">
            <ReactPlayer
              url={link.url}
              width="100%"
              height="100%"
              controls={false}
            />
            <p>
              {link.description.split('\n').map((line, lineIndex) => (
                <span key={lineIndex}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </main>

  );
}

export default Contacts;