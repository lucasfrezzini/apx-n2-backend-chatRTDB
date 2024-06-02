class Messages extends HTMLElement {
  static get styleBase() {
    return /*css*/ `
    section#messages {
      height:calc(100vh - 282px);
      display: flex;
      flex-direction: column;
      justify-content: end;
      gap:10px;
      overflow-y: scroll;
    }

    .message {
      display: flex; 
      flex-direction: column;
    }

    .message-right {
      align-items: end;
    }

    .message h6{
      color: var(--color-black);
      margin: 0px 0 2px 5px;
      font-size: 15px;
    }
    .message p {
      display: inline-block;
      background-color: var(--color-gray);
      margin: 0;
      padding:5px 10px;
      border-radius: 5px;
      max-width: 85%;
      display: flex;
      flex-direction: column;
      align-items: end;
      gap: 4px;
    }
    
    .message-right p {
      background-color: var(--color-green);
      text-align: right;
      margin-right: 10px;
    }

    .message p span {
      font-size: 12px;
      font-weight: bold;
    }
    `;
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot!.innerHTML = `
    <style>${Messages.styleBase}</style>
    <section id="messages">
      <div class="message message-left">
        <h6>Pau</h6>
        <p>1...Como dijimos, la principal característica de una BD realtime es que varios clientes reciben al instante las actualizaciones del servidor.<span>17:45h</span></p>
      </div>
      <div class="message message-right">
        <h6 hidden>Tano</h6>
        <p>Hola como estás vos? Todo en orden? Espero que andes muy bien y te encuentres mucho mejor desde la ultima vez que hablamos.<span>17:45h</span></p>
      </div>
      <div class="message message-left">
        <h6>Pau</h6>
        <p>Como dijimos, la principal característica de una BD realtime es que varios clientes reciben al instante las actualizaciones del servidor.<span>17:45h</span></p>
      </div><div class="message message-right">
        <h6 hidden>Tano</h6>
        <p>Hola como estás vos? Todo en orden? Espero que andes muy bien y te encuentres mucho mejor desde la ultima vez que hablamos.<span>17:45h</span></p>
      </div>
    </section>
    `;
  }
}

customElements.define("messages-el", Messages);
