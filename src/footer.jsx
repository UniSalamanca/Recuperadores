function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div>
          <div className="brand brand--footer">
            <span className="brand__mark">RN</span>
            <div>
              <div className="brand__name">Recuperadores Natura</div>
              <div className="brand__tagline">Gestion de residuos y aprovechamiento</div>
            </div>
          </div>
          <p className="muted">
            Soluciones ambientales para empresas que exigen trazabilidad, seguridad y resultados
            medibles.
          </p>
        </div>
        <div>
          <h3>Servicios</h3>
          <ul className="footer__links">
            <li>
              <a href="#servicios">Recoleccion y transporte</a>
            </li>
            <li>
              <a href="#servicios">Destruccion certificada</a>
            </li>
            <li>
              <a href="#servicios">Aprovechamiento</a>
            </li>
            <li>
              <a href="#servicios">Consultoria ambiental</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contacto</h3>
          <ul className="footer__links">
            <li>
              <a href="mailto:hola@recuperadoresnatura.com">hola@recuperadoresnatura.com</a>
            </li>
            <li>
              <a href="tel:+573001234567">+57 300 123 4567</a>
            </li>
            <li>
              <span className="muted">Atencion 24/7 para emergencias</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
