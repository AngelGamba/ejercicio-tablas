import { LitElement, html, css } from 'lit';
import '@material/web/textfield/outlined-text-field.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
import '@material/web/button/outlined-button.js';
import { registerTranslateConfig, use, translate } from "lit-translate";
import '/src/app.js'

class FilterForm extends LitElement {
  render() {
    return html`
      <div class="filters">
        <md-outlined-select label=${translate("Idioma")} @change='${this.changeLanguages}'>
          <md-select-option value='es' ?selected=${use.lang === 'es'}>${translate("Español")}</md-select-option >
          <md-select-option value='en' ?selected=${use.lang === 'en'}>${translate("Ingles")}</md-select-option >
        </md-outlined-select>
        <md-outlined-text-field id="origin" label=${translate("Origen")}>
        </md-outlined-text-field>
        <md-outlined-select id="status" label=${translate("Estatus")}>
          <md-select-option value="">${translate("Todos")}</md-select-option>
          <md-select-option value="alive">${translate("Vivo")}</md-select-option>
          <md-select-option value="dead">${translate("Muerto")}</md-select-option>
          <md-select-option value="unknown">${translate("Desconocido")}</md-select-option>
        </md-outlined-select>
        <md-outlined-button @click=${this._applyFilters}>${translate("Filtrar")}</md-outlined-button>
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

  async changeLanguages(event) {
    const newLang = event.target.value;
    await use(newLang);
    this._lang = newLang;
  }

  static styles = css`
    .filters {
      display: flex;
      gap: 10px;
      padding: 10px;
      max-width: 60%;
      align-items: center;
      background: #e5ff00ae;
      border-radius: 10px;
    }
  `;
}

customElements.define('filter-form', FilterForm);
