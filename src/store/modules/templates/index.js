import mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

const initialState = {
    templates: [
        { id: 1, title: 'template 1' },
        { id: 2, title: 'template 2' },
    ],
    currentTemplate: { id: 1, title: 'template 1' }
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
};
