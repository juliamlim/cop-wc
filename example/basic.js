/** Custom Elements Example */
class FirstPost extends HTMLElement {
    static get observedAttributes() {
        return ['name'];
    }

    constructor() {
        super();

        /** Create a shadow root */
        const shadow = this.attachShadow({mode: 'open'});
        
        /* Create Element Method */
        const post = document.createElement('content');
        post.setAttribute('select', '.post');

        const text = document.createElement('h1');
        text.setAttribute('class', 'post');
        text.innerText = '"First post!"';

        const author = document.createElement('p');
        author.innerText = `~ ${this.getAttribute('name')}`;

        shadow.appendChild(post);
        shadow.appendChild(text);
        shadow.appendChild(author);

        /* Range Method */
        const str = `
            <h1 class="post">"<slot>Second post ;(</slot>"</h1>
            <p>~ ${this.getAttribute('name')}</p>
        `;
        const style = `<style>.post { background-color: var(--post-color, orange); }</style>`;

        const html = document.createRange().createContextualFragment(str + style);
        // console.log(str, html);

        shadow.appendChild(html);

        // console.log(shadow);
    }

    attributeChangedCallback(attribute, oldVal, newVal) {
        console.log(attribute, oldVal, newVal);
        if (attribute === 'name') {
            const authors = this.shadowRoot.querySelectorAll('p');
            [...authors].map(el => {
                el.innerText = `~ ${newVal}`;
            })
        }
    }
}

customElements.define('first-post', FirstPost);