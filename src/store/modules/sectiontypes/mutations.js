import * as types from "./mutation-types";

const mutations = {
  [types.SECTIONTYPES](state, data) {
    state.sectionTypes = data.value;
  },
};

export default mutations;
