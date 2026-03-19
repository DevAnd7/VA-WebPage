function Footer() {
  return (
    <footer className="d-flex justify-content-between align-items-center bg-dark text-white px-5 py-2 mt-5">

      <div className="d-flex align-items-center gap-3">
        <h3 className="mb-0">Virgilio Arrieta</h3>

        <ul className="d-flex gap-3 list-unstyled fs-3 mb-0">
          <li>
            <a href="https://www.instagram.com/virgilioarrieta/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@virgilio.arrieta" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-tiktok"></i>
            </a>
          </li>
        </ul>
      </div>

      <small className="mb-0">
        © 2026 - Todos los derechos reservados - Made with love by Andri Arrieta
      </small>

    </footer>
  );
}

export default Footer;