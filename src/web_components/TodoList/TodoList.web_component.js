import {LitElement, html} from '@polymer/lit-element';
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from '../../components/TodoList/TodoList.component';

import './todo-list.scss';

class TodoListComponent extends LitElement {

    static get properties() {
        return {name: String}
    };

    onClick = (e) => {
        console.log("Clicked parent");
        alert("Clicked");
    };

    _render({name}) {
        const mountPoint = document.createElement('div');
        this.shadowRoot.appendChild(mountPoint);
        ReactDOM.render(
            <TodoList name={name} clicked={this.onClick} />,
            mountPoint
        );
        return html`
            <style>
                .taber {
                  background: green;
                  color: white;
                }
            </style>
            <div>
            <paper-button on-click=${this.onClick} raised  primary class="raised blue">WComp btn</paper-button>
            <div>${name}  </div>
              ${mountPoint}
            </div>
        `;
    }
}

window.customElements.define('todo-list', TodoListComponent);

