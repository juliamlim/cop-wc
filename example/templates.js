customElements.define('so-cool', class extends HTMLElement {
    constructor() {
        super();

        const template = document.getElementById('cool-component');
        const { content } = template || {};

        if (content) {
            const shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.appendChild(content.cloneNode(true));
        }
    }
})