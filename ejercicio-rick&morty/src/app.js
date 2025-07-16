import { LitElement, html, css } from 'lit';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import './components/data-manager.js';
import './components/character-card.js';
import './components/filter-form.js';
import { registerTranslateConfig, use, translate } from "lit-translate";

registerTranslateConfig({
  loader: lang => fetch(`/assets/locales/${lang}.json`).then(res => res.json())
});
use("es");

class RickAndMortyApp extends LitElement {
  static properties = {
    characters: { type: Array }
  };

  constructor() {
    super();
    this.characters = [];
    this._lang = use.lang;
  }

  render() {
    return html`
      <data-manager @characters-loaded=${this._updateCharacters}></data-manager>
      <filter-form @apply-filters=${this._applyFilters}></filter-form>
      <div class="cards-container">
        ${this.characters.map(char => html`
          <character-card .character=${char}></character-card>
        `)}
      </div>
    `;
  }

  _updateCharacters(e) {
    this.characters = e.detail;
  }

  _applyFilters(e) {
    this.shadowRoot.querySelector('data-manager').fetchFiltered(e.detail);
  }

  static styles = css`
    .cards-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1rem;
      padding: 1rem;
    }
  `;
}

customElements.define('rick-and-morty-app', RickAndMortyApp);
