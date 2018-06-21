import {LitElement, html} from '@polymer/lit-element';
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from '../../components/TodoList/TodoList.component';
import 'font-awesome/css/font-awesome.min.css';


class TodoListComponent extends LitElement {

    static get properties() {
        return {name: String}
    };

    _render({name}) {
        const mountPoint = document.createElement('div');
        this.shadowRoot.appendChild(mountPoint);
        ReactDOM.render(
            <TodoList />,
            mountPoint
        );
        return html`
            <div>
            <div>${name} <i class="fa fa-angle-left" ></i> </div>
              ${mountPoint}
            </div>
        `;
    }
}

window.customElements.define('todo-list', TodoListComponent);

