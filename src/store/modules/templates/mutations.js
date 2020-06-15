import * as types from "./mutation-types";

const mutations = {
  [types.SETCURRENTTEMPLATE](state, data) {
    state.currentTemplate = data;
    state.activeTemplateId = data.id  },
  [types.ADDTEMPLATE](state, data) {
    state.templates.push({id: state.templates.length + 1, title: data })
    state.activeTemplateId = state.templates.length

  }
};

export default mutations;
