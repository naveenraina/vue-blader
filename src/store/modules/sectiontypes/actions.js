import * as types from "./mutation-types";

export const getSectionTypes = ({ commit }, data) => {
    var id = data.id
    //create dummy sectionTypes for testing
    // data.value = [
    //     {id: id, title: 'section type ' + id},
    //     {id: id+1, title: 'section type ' + id+1}
    // ]
  commit(types.SECTIONTYPES, id);
};

export const addSectionType = ({ commit }, data) => {
  commit(types.ADDSECTIONTYPE, data);
};

