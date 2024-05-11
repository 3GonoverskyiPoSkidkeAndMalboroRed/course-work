import './Home.css'
// import './App.css';
import Header from '../../header/header'
import ShopItems from '../../shopthsitems/shopthsitems'
import AbsorbThisItem from '../../abscontent/abscontent'
function Home() {
  return (
    
  
    <div class='HomePageStyles'>
  
      <Header />
      <div class='ShopItemStyle'><ShopItems /></div>
       <AbsorbThisItem/>
      
    </div>
  );
}

export default Home;
