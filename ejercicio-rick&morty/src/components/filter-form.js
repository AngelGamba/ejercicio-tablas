import { LitElement, html, css } from 'lit';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import '@material/web/button/outlined-button.js';

class FilterForm extends LitElement {
  render() {
    return html`
      <div class="filters">   
        <md-outlined-select id="idioma" label="Idioma">
          <md-select-option value="">Español</md-select-option>
          <md-select-option value="">Ingles</md-select-option>
        </md-outlined-select>
        <md-outlined-text-field id="origin" label="Origen">
        </md-outlined-text-field>
        <md-outlined-select id="status" label="Estatus">
          <md-select-option value="">Todos</md-select-option>
          <md-select-option value="alive">Vivo</md-select-option>
          <md-select-option value="dead">Muerto</md-select-option>
          <md-select-option value="unknown">Desconocido</md-select-option>
        </md-outlined-select>
        <md-outlined-button @click=${this._applyFilters}>Filtrar</md-outlined-button>
      </div>
    `;
  }

  _applyFilters() {
    const origin = this.renderRoot.querySelector('#origin').value;
    const status = this.renderRoot.querySelector('#status').value;

    const filters = {};
    if (status) filters.status = status;
    if (origin) filters.origin = origin;

    this.dispatchEvent(new CustomEvent('apply-filters', {
      detail: filters,
      bubbles: true,
      composed: true
    }));
  }

  static styles = css`
    .filters {
      display: flex;
      gap: 10px;
      padding: 10px;
      align-items: center;
    }
  `;
}

customElements.define('filter-form', FilterForm);
