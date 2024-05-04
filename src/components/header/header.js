import './header-styles.css'
import logo from './logoshmodelmodel.png';
export default () => {
    return (
        
        <header class="header">

        <nav class="nav">
          <ul>
            <li><a href="../Store.js">STORE</a></li>
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