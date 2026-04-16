import { Link } from "react-router-dom";

function BotonesRS({ onClick, iconClass, label }) {
  return (
    <button onClick={onClick} className="btn btn-outline-dark p-1 m-0">
      <i className={iconClass}></i> {label}
    </button>
  );
}

export { BotonesRS };


function BotonesVerMas({ href }) {
  return (
    <Link className="btn btn-outline-dark" to={href}>
      Ver más
    </Link>
  );
}

export { BotonesVerMas };