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
  [types.SETCURRENTSECTIONTYPE](state, data) {
    // state.currentSectionTypes = data;
    state.activeSectionTypeId = data.id  },

  [types.ADDSECTIONTYPE](state, data) {
    state.sectionTypes.push({id: state.sectionTypes.length + 1, title: data.title,templateId: data.templateId})
    state.activeSectionTypeId = state.sectionTypes.length
    state.currentSectionTypes = []
    state.sectionTypes.forEach(element => {
      if(element.templateId === data.templateId) {
        state.currentSectionTypes.push(element)

      }
      
    });
  }
};

export default mutations;
