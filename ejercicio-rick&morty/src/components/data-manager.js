import { LitElement } from 'lit';

class DataManager extends LitElement {
  async fetchFiltered(filters = {}) {
    const baseUrl = 'https://rickandmortyapi.com/api/character/';
    const query = new URLSearchParams(filters).toString();
    const url = `${baseUrl}?${query}`;

    const res = await fetch(url);
    const data = await res.json();
    this.dispatchEvent(new CustomEvent('characters-loaded', {
      detail: data.results || []
    }));
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchFiltered();
  }
}

customElements.define('data-manager', DataManager);
