import Library from '../../components/library/Library';
import {librarys} from "../../helpers/librarysList"

const Librarys = () => {
	return (
		<main className="section">
  <div className="container">
    {/* <h2 className="title-1"></h2> */}
    <div className="librarys-grid">
      <ul className="librarys">
        {librarys.map((librarys, index) => {
          return (
            <Library
              key={index}
              title={librarys.Disigner}
              img={librarys.img}
              index={index}
            />
          );
        })}
      </ul>
    </div>
  </div>
</main>
	);
};

export default Librarys;
