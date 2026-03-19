import "./Footer.css"; //importacion de los estilos del footer

import Botones from "../Componentes/Botones"

function Footer() {
  return (
    <footer className="footer d-flex justify-content-between align-items-center px-5 py-2 mt-5">

      <div className="d-flex align-items-center gap-3">
        <h3 className="mb-0">Virgilio Arrieta</h3>

        <ul className="d-flex gap-3 list-unstyled fs-3 mb-0">
          <li>
            <Botones
              href="https://www.instagram.com/virgilioarrieta/"
              iconClass="bi bi-instagram"
              label="Instagram"
            />
          </li>

          <li>
            <Botones
              href="https://www.tiktok.com/@virgilio.arrieta"
              iconClass="bi bi-tiktok"
              label="TikTok"
            />
          </li>

          <li>
            <Botones
              href="https://open.spotify.com/intl-es/artist/0PCpDbUZp068RFBztSkiPn"
              iconClass="bi bi-spotify"
              label="Spotify"
            />
          </li>
        </ul>
      </div>

      <small className="mb-0">
        © 2026 - Todos los derechos reservados
      </small>

    </footer>
  );
}

export default Footer;