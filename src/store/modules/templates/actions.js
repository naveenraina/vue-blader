import * as types from "./mutation-types";

export const setCurrentTemplate = ({ commit, dispatch }, data) => {
  commit(types.SETCURRENTTEMPLATE, data);
  dispatch('sectiontypes/getSectionTypes', {id: data.id}, {root: true})
};

