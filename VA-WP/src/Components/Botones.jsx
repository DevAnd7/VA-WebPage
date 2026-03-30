import { Link } from "react-router-dom";

function BotonesRS({ onClick, iconClass, label }) {
  return (
    <button onClick={onClick} className="btn btn-outline-dark p-1">
      <i className={iconClass}></i> {label}
    </button>
  );
}

export { BotonesRS };


export const BotonesVerMas = ({ href }) => {
  return <Link to={href}>Ver más</Link>;
};

export { BotonesVerMas };