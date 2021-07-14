class SectionFourth extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="sec-fourth">
            <h2 tabindex="0" class="h2-judul-fourth">
                Media Partner
            </h2>
            <div class="grid-fourth">
                <div class="img-daily">
                    <img tabindex="0" src="../images/heros/dailysocial.png" alt="logo daily social">
                </div>
                <div class="img-tech">
                    <img tabindex="0" src="../images/heros/techinasia.svg" alt="logo tech in asia">
                </div>
            </div>
        </section>
      `;
  }
}

customElements.define('sec-fourth', SectionFourth);
