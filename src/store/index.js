import Vue from "vue";
import Vuex from "vuex";
import sectiontypes from "./modules/sectiontypes";
import templates from "./modules/templates";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    sectiontypes,
    templates
  }
});
