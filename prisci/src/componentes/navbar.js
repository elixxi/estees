import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar el CSS de Bootstrap
import '../App.css';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top"> {/* Agrega la clase fixed-top */}
      <a className="navbar-brand" href="#">
        {/* Contenido de la marca */}
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Servicios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
