import * as types from "./mutation-types";

export const getSections = ({ commit }, data) => {
    var id = data.id
    //create dummy sectionTypes for testing
    // data.value = [
    //     {id: id, title: 'section type ' + id},
    //     {id: id+1, title: 'section type ' + id+1}
    // ]
  commit(types.SECTIONS, id);
};
export const emptySection = ({ commit }) => {
   
  commit(types.EMPTYSECTION);
};
export const setCurrentSection = ({ commit }, data) => {
   
  commit(types.SETCURRENTSECTION, data);
};

export const addSection = ({ commit }, data) => {
    if(data.sectionId) {
        commit(types.EDITSECTION, data);
    } else {
        commit(types.ADDSECTION, data);

    }
  
};

