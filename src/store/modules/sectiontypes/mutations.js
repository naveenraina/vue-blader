import * as types from "./mutation-types";

const mutations = {
  [types.SECTIONTYPES](state, data) {
    state.currentSectionTypes = []
    state.sectionTypes.forEach(element => {
      if(element.templateId === data) {
        state.currentSectionTypes.push(element)

      }
      
    });
    
  },
  [types.ADDSECTIONTYPE](state, data) {
    state.sectionTypes.push({id: state.sectionTypes.length + 1, title: data.title,templateId: data.templateId})
    state.currentSectionTypes = []
    state.sectionTypes.forEach(element => {
      if(element.templateId === data.templateId) {
        state.currentSectionTypes.push(element)

      }
      
    });
  }
};

export default mutations;
