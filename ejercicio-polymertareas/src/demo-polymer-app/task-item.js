
import {html, PolymerElement} from 'https://unpkg.com/@polymer/polymer@3.5.0/polymer-element.js';

class TaskItem extends PolymerElement {
  static get properties() {
    return {
      task: Object
    };
  }

  static get template() {
    return html`
      <style>
        .done {
          color: gray;
          text-decoration: line-through;
        }
        button {
          margin-left: 10px;
          width: 40px;
        }
      </style>
      <div>
        <span class$="[[computeClass(task.done)]]">[[task.name]]</span>
        <button on-click="toggleDone">✔</button>
        <button on-click="deleteTask">🗑</button>
      </div>
    `;
  }

  computeClass(done) {
    return done ? 'done' : '';
  }

  toggleDone() {
    this.dispatchEvent(new CustomEvent('toggle-task', { detail: this.task }));
  }

  deleteTask() {
    this.dispatchEvent(new CustomEvent('delete-task', { detail: this.task }));
  }
}

customElements.define('task-item', TaskItem);
