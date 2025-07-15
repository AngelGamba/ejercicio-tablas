import { LitElement, html, css } from 'lit';

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
        <p><strong>Estatus:</strong> ${this.character.status}</p>
        <p><strong>Especie:</strong> ${this.character.species}</p>
        <p><strong>Género:</strong> ${this.character.gender}</p>
        <p><strong>Origen:</strong> ${this.character.origin.name}</p>
        <p><strong>Ubicación:</strong> ${this.character.location.name}</p>
      </div>
    `;
  }

  static styles = css`
    .card {
      background: #f9f9f9;
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
