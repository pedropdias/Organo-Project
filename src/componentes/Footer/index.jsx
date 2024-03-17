import './Footer.css'

function Footer() {
  return(
    <div className="footer">
      <div className="icons-container">
        <img className ="icons" src="/imagens/fb.png" alt="facebook logo" />
        <img className ="icons" src="/imagens/tw.png" alt="twitter logo" />
        <img className ="icons" src="/imagens/ig.png" alt="instagram logo" />
      </div>
      <div className="logo-container">
        <img className="logo" src="/imagens/logo.png" alt="organo logo"/>
      </div>
      <h2 id="footer-text">Desenvolvido por Alura</h2>
    </div>
  )
}

export default Footer