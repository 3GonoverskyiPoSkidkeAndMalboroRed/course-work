// import React from 'react';
// import Slider from 'react-slick';
// // import logo from './logo.png'; // import the logo image
// import photo1 from '../../img/reckowensmineralpearlbolanbootcutpants.png'; // import the first photo
// import photo2 from '../../img/reckowensmineralpearlbolanbootcutpants.png'; // import the second photo
// import photo3 from '../../img/jpgcyberskullmeshtop.png';
// function Header() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <header>
//       <Slider {...settings}>
//         <div>
//           <img src={photo1} alt="Photo 1" />
//         </div>
//         <div>
//           <img src={photo2} alt="Photo 2" />
//         </div>
//         <div>
//           <img src={photo3} alt="Photo 3" />
//         </div>
//       </Slider>
//     </header>
//   );
// }

// export default Header;












import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from './Slider';
import photo1 from '../../img/jpgcyberskullmeshtop.png'
import photo2 from '../../img/reckowensmineralpearlbolanbootcutpants.png'
import photo3 from '../../img/rickowensleatherpilotjacket.png'


function Header() {
	return (
            <div>
				<div className='TitleOfCarousel'>
				<h2>SHOP THIS ITEM</h2>
				</div>
                <Slider />
            </div>
        );
    }
	export default Header;
