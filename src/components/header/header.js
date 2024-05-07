
import './header-styles.css'
import logo from './logoshmodelmodel.png';

// import { Store, Design } from '../pages';



export default () => {
    return (
      // !!!СТАРЫЙ ВАРИАНТ НАВБАРА!!!
        <header class="header">
         <nav class="nav">
          <ul>
            <li><a href='../pages/Store/Store.js'>STORE</a></li>
            <li><a href="#">DESIGN</a></li>
            </ul>
        </nav>
        <img src={logo} alt="logo" ></img>
          <nav class= "nav">
          <ul>
            <li><a href="#">NEWS</a></li>
            <li><a href="#">MUSIC</a></li>
            </ul>
            </nav> 
      </header>






    );
};













