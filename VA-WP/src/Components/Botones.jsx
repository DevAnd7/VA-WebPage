import { Link } from "react-router-dom";

function BotonesRS({ onClick, iconClass, label }) {
  return (
    <button onClick={onClick} className="btn btn-outline-dark p-1">
      <i className={iconClass}></i> {label}
    </button>
  );
}

export { BotonesRS };


function BotonesVerMas({ href, label }) {
  return <Link className="btn btn-outline-dark" to={href}>{label}</Link>;
}

export { BotonesVerMas };