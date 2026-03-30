function BotonesRS({ onClick, iconClass, label }) {
  return (
    <button onClick={onClick} className="btn btn-outline-dark p-1">
      <i className={iconClass}></i> {label}
    </button>
  );
}

export { BotonesRS };


function BotonesVerMas({ onClick }) {
  return (
    <button onClick={onClick} className="btn btn-outline-dark p-2">
      Ver más
    </button>
  );
}

export { BotonesVerMas };