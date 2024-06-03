import Library from '../../components/library/Library.js';
import {librarys} from "../../helpers/LibraryList.js"

const Librarys = () => {
	return (
		<main className="section">
  <div className="container">
    {/* <h2 className="title-1"></h2> */}
      <ul className="librarys">
        {librarys.map((library, index) => {
          return (
            <Library
              key={index}
              title={library.Disigner}
              img={library.img}
              index={index}
              className='library-grid__item'
              
            />
          );
        })}
      </ul>
    </div>

</main>
	);
};

export default Librarys;
