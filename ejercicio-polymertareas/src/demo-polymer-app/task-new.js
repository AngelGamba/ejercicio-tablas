
import {html, PolymerElement} from 'https://unpkg.com/@polymer/polymer@3.5.0/polymer-element.js';

class TaskNew extends PolymerElement {
  static get template() {
    return html`
      <style>
        input {
          padding: 5px;
        }
        button {
          margin-left: 10px;
          padding: 5px 10px;
        }
      </style>
      <input id="taskInput" placeholder="Nueva tarea...">
      <button on-click="addTask">Agregar</button>
    `;
  }

  addTask() {
    const input = this.$.taskInput;
    const name = input.value.trim();
    if (!name) return;

    const newTask = {
      id: Date.now(),
      name: name,
      done: false
    };

    window.dispatchEvent(new CustomEvent('new-task', { detail: newTask }));
    input.value = '';
  }
}

customElements.define('task-new', TaskNew);
