interface State {
  data: any;
  listeners: any;
  setUser: any;
  setNewMessage: any;
  getData: any;
  getMessages: any;
}
const state: State = {
  data: () => {},
  listeners: () => {},
  setUser: () => {},
  setNewMessage: () => {},
  getData: () => {},
  getMessages: () => {},
};

export default { state };
