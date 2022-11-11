import React, { useContext} from "react";
import { DataContext } from "context/DataProvider";
import { Link } from "react-router-dom";
import Mascotas from "images/logo-mascotas.png";


export const Header = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;


  const toogleMenu = () =>{
    setMenu(!menu)
  }
 

  return (
    <header>
      <div className="menu">
      <box-icon name="menu"></box-icon>
      </div>
      <Link to="/">
      <div className="logo">
        <img src={Mascotas} alt="Logo" width="120" />
      </div>
      </Link>
      <ul>
        <li>
          <Link className= "head"to="/">INICIO</Link>
        </li>
        <li>
          <Link className= "head" to="/productos">PRODUCTOS</Link>
        </li>
        <li>
          <Link className= "head" to="/admin">ADMIN</Link>
        </li>
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item__total"> {carrito.length} </span>
      </div>
    </header>
  );
};
