import * as types from "./mutation-types";

const mutations = {
  [types.SETCURRENTTEMPLATE](state, data) {
    state.currentTemplate = data.value;
  }
};

export default mutations;
