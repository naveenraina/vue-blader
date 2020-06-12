import * as types from "./mutation-types";

const mutations = {
  [types.SECTIONS](state, data) {
    state.currentSections = []
    state.sections.forEach(element => {
      if(element.sectionTypeId === data) {
        state.currentSections.push(element)

      }
      
    });
    
  },
  [types.ADDSECTION](state, data) {
    state.sections.push({id: state.sections.length + 1, title: data.title,sectionTypeId: data.sectionTypeId})
    state.currentSections = []
    state.sections.forEach(element => {
      if(element.sectionTypeId === data.sectionTypeId) {
        state.currentSections.push(element)

      }
      
    });
  }
};

export default mutations;
