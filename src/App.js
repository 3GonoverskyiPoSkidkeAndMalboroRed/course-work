
import './App.css';

// import ListItem from './components/main_page_info.js';
// import {mainPageInfo} from './content/data_list.js';
import ShopItems from './components/shopthsitems/shopthsitems.js'
import AbsorbThisItem from './components/abscontent/abscontent.js'
// import Store from '../src/components/pages/Store/Store.js';
import ColorSchemesExample from './components/navbar/navbar.js'
function App() {
  return (
    
  <div>
    <div >
  <div className='ColorSchemesExample'>
      <ColorSchemesExample />
      </div>
      <div class='ShopItemStyle'><ShopItems /></div>
       <AbsorbThisItem/>
      
    </div>
    
    </div>
   
      
  );
}

export default App;
