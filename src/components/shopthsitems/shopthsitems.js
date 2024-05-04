import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../productimg/jpgcyberskullmeshtop.png';
import img2 from '../../productimg/reckowensmineralpearlbolanbootcutpants.png';
import img3 from '../../productimg/rickowensleatherpilotjacket.png';
import { pics } from './img_item.js';

// const Block = (props) => {
//     <div>
//         <img src={props.path}/>
//         <p className="legend">{props.alt}</p>
//     </div>
// }

// class DemoCarousel extends Component {
//     render() {
    export default () => {
        return ( 
            <div><h2>SHOP THIS ITEM</h2>
            <Carousel>
                {/* {pics.map((pic, index) => <Block {...pic} key={index} />)} */}
                <div >
                    <img src={img1} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img2}  />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img3}  />
                    <p className="legend">Legend 3</p>
           </div>
    
            </Carousel>
            </div>
        );
    }
// };

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>

