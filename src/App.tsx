import './App.css'
import Logo from './components/svg/logo'
import Facebook from './components/svg/facebook'
import Instagram from './components/svg/instagram'
import Github from './components/svg/github'
function App() {
  
  return (
    <div className="container">
      <header className="header">
        <Logo />
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
        <nav className='redessociales'> 
          <a href="https://instagram.com"><Instagram /></a> 
          <a href="https://github.com"><Github /></a>
          <a href="https://facebook.com"><Facebook /></a>
        </nav>
      </header>
      <main className="main">
        <h2>Portafolio</h2>
        <section className="hero">
        <img src="/images/perfil.jpg" alt="Foto" />

        
          <p>
            Soy Maria estudiante de ultimo semestre de la carrera ingenieria de sistemas...
          </p>
        </section>
        <h2>Proyectos</h2>
        <section className="projects">
          <article>
            <h3>Portafolios</h3>
            <p>Página web de portafolio personal</p>
          </article>
          <article>
            <h3>Tienda online </h3>
            <p>Súper tienda online la mejor tiendade Popayan</p>
          </article>
        </section>
      </main>
      <footer className='footer'>
        <p>© 2023 María</p>
      </footer>
    </div>
  )
}

export default App
