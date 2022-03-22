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
  [types.EMPTYSECTION](state) {
    state.currentSection = {}
    state.activeSectionId = null
    
  },
  [types.SETCURRENTSECTION](state, data) {
    // state.currentSectionTypes = data;
    state.activeSectionId = data.id
    state.currentSection = data 
    // state.currentSections.forEach(x => {
    //     if(x.id === state.activeSectionId) {
    //         state.currentSection = x
    //     }
    // })
    },
  [types.ADDSECTION](state, data) {
    state.sections.push({id: state.sections.length + 1, title: data.title,details: data.details,sectionTypeId: data.sectionTypeId})
    state.currentSections = []
    // state.activeSectionId = state.sections.length
    state.sections.forEach(element => {
      if(element.sectionTypeId === data.sectionTypeId) {
        state.currentSections.push(element)

      }
      
    });
    state.currentSections.forEach(x => {
        if(x.id === state.activeSectionId) {
            state.currentSection = x
        }
    })
  },
  [types.EDITSECTION](state, data) {

    state.currentSections = []
    // state.activeSectionId = state.sections.length
    state.sections.forEach(element => {
      if(element.sectionTypeId === data.sectionTypeId) {
          if(element.id === data.sectionId){
              element.title = data.title
              element.details = data.details
          }
        state.currentSections.push(element)

      }
      
    });
    state.currentSections.forEach(x => {
        if(x.id === state.activeSectionId) {
            state.currentSection = x
        }
    })
  }
};

export default mutations;
