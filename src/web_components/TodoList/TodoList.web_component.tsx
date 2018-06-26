import {LitElement, html} from '@polymer/lit-element';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
const retargetEvents = require('react-shadow-dom-retarget-events');
import * as TodoList from '../../components/TodoList/TodoList.component';

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
        retargetEvents(this.shadowRoot);
        return html`
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
            <style>
                .s-app{
                    border: solid green 1px;
                    padding: 20px;
                }
                paper-button.danger {
                    background: red;
                }
            </style>
            <div class="s-app">
            <paper-button class="danger">Web paper</paper-button>
            <button class="parent-button btn btn-primary" on-click="${this.onClick}">Polymer Button</button>
              ${mountPoint}
            </div>
        `;
    }
}

window.customElements.define('todo-list', TodoListComponent);

export default TodoListComponent;

