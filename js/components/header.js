export default class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header>
          <nav class="container desktop-menu">
            <ul class="horizontal-list">
                <li data-aos="fade-down" data-aos-duration="400"><a href="#landing-section">Home</a></li>
                <li data-aos="fade-down" data-aos-duration="600"><a href="#about">About</a></li>
                <li data-aos="fade-down" data-aos-duration="800"><a href="#projects">Projects</a></li>
                <li data-aos="fade-down" data-aos-duration="1000"><a href="#experience">Experience</a></li>
                <li data-aos="fade-down" data-aos-duration="1200"><a href="#contact" class="cta-btn">Get in contact</a></li>
            </ul>
          </nav>
          <div class="right" id="mobile-right">
          <button class="hamburger hamburger--collapse" type="button" id="mobile-btn">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
          </div>
        </header>
        
        <ul class="mobile-menu expandable" id="mobile-menu-li">
          <li><a href="#landing-section">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <div class="bottom">
            <li><a href="#contact" class="cta-btn-mobile">Get in contact!</a></li>
          </div>
        </ul>
      `;
    }
  }
  
  customElements.define('header-component', Header);