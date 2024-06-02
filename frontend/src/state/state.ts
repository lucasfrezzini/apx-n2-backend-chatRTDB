interface State {
  data: any;
  listeners: any;
  setUser: any;
  setNewMessage: any;
  getData: any;
  getMessages: any;
}
const state: State = {
  data: {
    chat: [
      {
        id: "3211323123112-213-233",
        user: "Tano",
        message: "Mensaje número 1",
        sendTime: "18:22",
      },
      {
        id: "3211323123112-213-233",
        user: "Cintia",
        message: "Mensaje número 2",
        sendTime: "18:22",
      },
      {
        id: "3211323123112-213-233",
        user: "Tano",
        message: "Mensaje número 3",
        sendTime: "18:22",
      },
      {
        id: "3211323123112-213-233",
        user: "Cintia",
        message: "Mensaje número 4",
        sendTime: "18:22",
      },
      {
        id: "3211323123112-213-233",
        user: "Tano",
        message: "Mensaje número 5",
        sendTime: "18:22",
      },
      {
        id: "3211323123112-213-233",
        user: "Cintia",
        message: "Mensaje número 6",
        sendTime: "18:22",
      },
    ],
  },
  listeners: () => {},
  setUser: () => {},
  setNewMessage: () => {},
  getData: () => {},
  getMessages: () => {},
};

export default { state };
