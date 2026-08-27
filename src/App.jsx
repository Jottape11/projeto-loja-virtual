import './App.css'
import hero from './assets/hero.png'
import Header from './components/header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Products from './components/Products'
import Benefits from './components/Benefits'

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero 
      titulo = "Ofertas imperdíveis para você"
      subtitulo = "Até 30% de desconto em produtos selecionados. Aproveite!"
      textoBotao = "Ver ofertas"
      imagemHero = {hero}
      />

      <Categories />
      <Products />
      <Benefits />

      <footer id="contato" className="footer">
        <div className="footer-column">
          <h3>ReactShop</h3>
          <p>A melhor loja virtual para você encontrar tudo o que precisa.</p>
        </div>

        <div className="footer-column">
          <h3>Links úteis</h3>
          <ul>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#contato">Contato</a></li>
            <li><a href="#produtos">Sobre nós</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Redes sociais</h3>
          <div className="social-icons">
            <span className="icon-button">📘</span>
            <span className="icon-button">📸</span>
            <span className="icon-button">🐦</span>
          </div>
        </div>

        <p className="copyright">© 2026 ReactShop. Todos os direitos reservados.</p>
      </footer>

    </div>
  )
}

export default App
