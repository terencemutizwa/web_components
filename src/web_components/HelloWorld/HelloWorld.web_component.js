import {LitElement, html} from '@polymer/lit-element';

class HelloWorld extends LitElement {


    static get properties() {
        return {name: String}
    };

    _render({name}) {
        console.log('Got here')
        return html`<h4 ><IXText /> Hello Web Components <span class="mood">${name}</span> </h4>`;

    }
}

window.customElements.define('hello-world', HelloWorld);