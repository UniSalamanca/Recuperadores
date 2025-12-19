import { useState } from "react"
import "./App.css"
import videoRecuperadores from "./assets/video home/Recuperadores.mp4"
import Header from "./header.jsx"
import Footer from "./footer.jsx"

// Servicios principales que ofrece la empresa
const services = [
  {
    title: "Recuperacion",
    description:
      "Identificamos y rescatamos materiales aprovechables para evitar que terminen en rellenos y aportar a la economia circular.",
    tags: ["Clasificacion certificada", "Evidencia fotografica"],
  },
  {
    title: "Recoleccion",
    description:
      "Rutas programadas y emergencias para viviendas, comercios e industria. Separacion en la fuente y acompanamiento en sitio.",
    tags: ["Rutas seguras", "Personal con EPP"],
  },
  {
    title: "Transporte",
    description:
      "Flota propia con permisos y operadores formados para trasladar residuos peligrosos y aprovechables de forma segura.",
    tags: ["GPS en flota", "Documentacion al dia"],
  },
  {
    title: "Pesaje y trazabilidad",
    description:
      "Basculas certificadas y registro digital por entrega: manifiestos, actas y certificados listos para auditorias.",
    tags: ["Pesaje preciso", "Certificados en linea"],
  },
]

const benefits = [
  {
    title: "Seguridad y cumplimiento",
    description: "Licencias vigentes, protocolos para residuos peligrosos y personal entrenado.",
  },
  {
    title: "Transparencia y datos",
    description: "Manifiestos, actas y reportes en linea para que tu equipo de cumplimiento tenga visibilidad.",
  },
  {
    title: "Impacto social",
    description: "Programas de inclusion para recuperadores y educacion ambiental en comunidades.",
  },
]

const coverage = [
  "Bogota",
  "Soacha",
  "Barranquilla",
  "Fusagasuga",
  "Cartagena",
  "Puerto Colombia",
  "Monteria",
  "Sahagun",
]

function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <div className="page">
      <Header />

      <main className="wrap main">
        {/* Bloque superior con video y presencia */}
        <section className="section media" id="video">
          <div className="media-grid">
            <aside className="media-sidebar">
              <div className="sidebar-block">
                <h3>Presencia</h3>
                <p className="muted">Estamos en las principales ciudades y zonas clave.</p>
                <ul className="locations-list">
                  {coverage.map((city) => (
                    <li key={city}>
                      <span className="location-dot" />
                      {city}
                    </li>
                  ))}
                </ul>
                <p className="note locations-note">Rutas programadas y respuesta a emergencias 24/7.</p>
              </div>
              <div className="sidebar-block">
                <h4>Para quien trabajamos</h4>
                <ul className="clean-list">
                  <li>Hogares, comercios e industria</li>
                  <li>Hospitales y laboratorios</li>
                  <li>Instituciones publicas y privadas</li>
                </ul>
              </div>
            </aside>

            <div className="video-card">
              <div className="video-thumb">
                <video
                  className="video-player"
                  src={videoRecuperadores}
                  controls
                  preload="metadata"
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                  onEnded={() => setIsVideoPlaying(false)}
                />
                <div
                  className={`video-overlay video-overlay--top ${
                    isVideoPlaying ? "video-overlay--hidden" : ""
                  }`}
                >
                  <p className="eyebrow eyebrow--light">Labor social</p>
                  <h2>Conoce como trabajamos con las comunidades</h2>
                  <p className="muted muted--light">
                    Recuperadores Natura en campo: educacion, inclusion y gestion segura de residuos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="beneficios">
          <div className="section__head">
            <p className="eyebrow">Beneficios</p>
            <h2>Simple, seguro y transparente</h2>
          </div>
          <div className="grid grid--cards">
            {benefits.map((item) => (
              <article className="card card--minimal" key={item.title}>
                <h3>{item.title}</h3>
                <p className="muted">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="servicios">
          <div className="section__head">
            <p className="eyebrow">Que hacemos</p>
            <h2>Servicios esenciales para cada etapa</h2>
          </div>
          <div className="grid grid--cards">
            {services.map((service) => (
              <article className="card card--border" key={service.title}>
                <h3>{service.title}</h3>
                <p className="muted">{service.description}</p>
                <div className="chips">
                  {service.tags.map((tag) => (
                    <span className="chip" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="social">
          <div className="section__head">
            <p className="eyebrow">Labor social</p>
            <h2>Apoyamos a las personas que hacen posible el reciclaje</h2>
          </div>
          <div className="panel panel--social">
            <p className="muted">
              Fortalecemos a la poblacion recicladora con formacion, formalizacion y programas de
              ingresos dignos. Generamos espacios educativos para comunidades, instituciones y empresas
              para construir un futuro sostenible y seguro para todos.
            </p>
            <div className="chips">
              <span className="chip chip--ghost">Capacitacion y inclusion</span>
              <span className="chip chip--ghost">Conciencia ambiental</span>
              <span className="chip chip--ghost">Acompanamiento comunitario</span>
            </div>
          </div>
        </section>

        <section className="cta" id="contacto">
          <div className="cta__content">
            <p className="eyebrow">Contacto</p>
            <h2>Agenda tu recoleccion o pide una visita tecnica</h2>
            <p className="muted">
              Cuanta con un gestor autorizado en cualquier punto del pais. Resolvemos en menos de 24 horas.
            </p>
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-card__label">Telefono</div>
                <a href="tel:+573001234567">+57 300 123 4567</a>
                <span className="contact-card__note">Lunes a domingo, 24/7 emergencias</span>
              </div>
              <div className="contact-card">
                <div className="contact-card__label">Correo</div>
                <a href="mailto:hola@recuperadoresnatura.com">hola@recuperadoresnatura.com</a>
                <span className="contact-card__note">Respuesta en menos de un dia habil</span>
              </div>
            </div>
            <div className="cta__actions">
              <a className="btn btn--primary" href="mailto:hola@recuperadoresnatura.com">
                Solicitar cotizacion
              </a>
              <a className="btn btn--ghost" href="#servicios">
                Ver servicios
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
