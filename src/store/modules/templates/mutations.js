import * as types from "./mutation-types";

const mutations = {
  [types.SETCURRENTTEMPLATE](state, data) {
    state.currentTemplate = data.value;
  },
  [types.ADDTEMPLATE](state, data) {
    state.templates.push({id: state.templates.length + 1, title: data })
  }
};

export default mutations;
