
import {html, PolymerElement} from 'https://unpkg.com/@polymer/polymer@3.5.0/polymer-element.js';
import './task-item.js';

class TaskList extends PolymerElement {
  static get properties() {
    return {
      tasks: {
        type: Array,
        value: () => JSON.parse(localStorage.getItem('task') || '[]')
      }
    };
  }

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
      <div id="taskList">
      </div>`;
  }

  _renderList() {
  const container = this.shadowRoot.getElementById('taskList');
  container.innerHTML = '';
  this.tasks.forEach(task => {
    const item = document.createElement('task-item');
    item.task = task;
    item.addEventListener('toggle-task', e => this.toggleTask(e));
    item.addEventListener('delete-task', e => this.deleteTask(e));
    container.appendChild(item);
  });
}

  toggleTask(e) {
    const id = e.detail.id;
    this.tasks = this.tasks.map(t => t.id === id ? {...t, done: !t.done} : t);
    localStorage.setItem('task', JSON.stringify(this.tasks));
    this._renderList();
  }
  
  deleteTask(e) {
    const id = e.detail.id;
    this.tasks = this.tasks.filter(t => t.id !== id);
    localStorage.setItem('task', JSON.stringify(this.tasks));
    this._renderList();
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('new-task', this._onNewTask.bind(this));
    this._renderList();
  }

  _onNewTask(e) {
    this.push('tasks', e.detail);
    localStorage.setItem('task', JSON.stringify(this.tasks));
    this._renderList();
  }
}

customElements.define('task-list', TaskList);
