function Botones({ href, iconClass, label, className = "btn-outline" }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button className={`btn ${className} p-1`}>
        <i className={iconClass}></i> {label}
      </button>
    </a>
  );
}

export default Botones;