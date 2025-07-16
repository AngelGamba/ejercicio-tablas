import { LitElement, html, css } from 'lit';
import { registerTranslateConfig, use, translate } from "lit-translate";

class CharacterCard extends LitElement {
  static properties = {
    character: { type: Object }
  };

  render() {
    if (!this.character) return html``;

    return html`
      <div class="card">
        <img src="${this.character.image}" alt="${this.character.name}">
        <h3>${this.character.name}</h3>
        <p><strong>${translate("Estatus")}:</strong> ${this.character.status}</p>
        <p><strong>${translate("Especie")}:</strong> ${this.character.species}</p>
        <p><strong>${translate("Genero")}:</strong> ${this.character.gender}</p>
        <p><strong>${translate("Origen")}:</strong> ${this.character.origin.name}</p>
        <p><strong>${translate("Ubicacion")}:</strong> ${this.character.location.name}</p>
      </div>
    `;
  }

  static styles = css`
    .card {
      background: #15f9007a;
      border-radius: 12px;
      padding: 1rem;
      box-shadow: 2px 2px 6px rgba(0,0,0,0.2);
      text-align: center;
    }

    img {
      width: 100%;
      border-radius: 8px;
    }
  `;
}

customElements.define('character-card', CharacterCard);
