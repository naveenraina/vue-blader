import mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

const initialState = {
  sectionTypes: [
        // { id: 1, title: 'section type 1' },
        // { id: 2, title: 'section type 2' }
    ],
  currentSectionTypes: [],
  activeSectionTypeId: null
};


export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
};
