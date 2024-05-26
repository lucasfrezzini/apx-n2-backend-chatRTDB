class FormFieldset extends HTMLElement {
  static get styleBase() {
    return /*css*/ `
    fieldset,
    button,
    input {
      border: none;
      width: 100%;
    }

    input,
    button {
      padding: 10px 10px;
      border-radius: 5px;
      border: 2px solid black;
    }
    fieldset {
      border: none;
      margin: 0;
      padding:0;
    }
    label {
      font-weight: bold;
    }
    input {
      width: calc(100% - 24px);
      margin-bottom: 10px;
    }
    button {
      background-color: var(--color-blue);
      border: var(--color-blue);
      font-weight: bold;
    }
    `;
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot!.innerHTML = /*html*/ `
    <style>${FormFieldset.styleBase}</style>
    <form>
      <fieldset>
        ${
          this.hasAttribute("showLabel")
            ? `<label for="name" >${this.getAttribute("label")}</label><br>`
            : ""
        }
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="${this.getAttribute("placeholder")}"
          ${
            !this.hasAttribute("showLabel")
              ? `aria-label="${this.getAttribute("label")}"`
              : ""
          }
          >
      </fieldset>
      <button>${this.getAttribute("button")}</button>
    </form>
    `;
  }
}

customElements.define("form-fieldset", FormFieldset);
