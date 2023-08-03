export default class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <footer>
          <div class="container">
            <ul class="horizontal-list footer-socials" style="font-size: 30px;">
                <li><a href="https://www.linkedin.com/in/" rel="noreferrer"
                target="_blank"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="https://github.com/mikias-tulu" rel="noreferrer" target="_blank"><i
                    class="fab fa-github"></i></a></li>
                <li><a href="mailto:miki.tulu@gmail.com"><i class="fas fa-envelope"></i> </a></li>
            </ul>
            <ul class="horizontal-list menu-footer">
                <li><a href="#landing-section">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul><br>
          </div>
        </footer>
        <div class="sub-footer">
            <div class="container">
            <p>Mikias Tulu | Portfolio 2023</p>
            </div>
        </div>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);