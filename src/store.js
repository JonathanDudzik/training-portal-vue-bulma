import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // names used throughout portal
    courseName: "Child Income Eligibility",
    // points to the routes array that holds the /course route to navigate the route's children
    courseRoute: 2,
    // functional states 
    genericEventCounter: 0,
    currentRoute: '',
    nextRoute: '',
    prevRoute: '',
    activeMenuLink: '',
    isPlaying: false,
    showHelpModal: false,
  },
  mutations: {
    changeCurrentMedia (state, value) {
      state.currentMedia = value
    },
    changeCurrentRoute (state, value) {
      state.currentRoute = value
    },
    changeNextRoute (state, value) {
      state.nextRoute = value
    },
    changePrevRoute (state, value) {
      state.prevRoute = value
    },
    changeActiveMenuLink (state, value) {
      state.activeMenuLink = value
    },
    changeIsPlaying (state, value) {
      state.isPlaying = value
    },
    changeGenericEventCounter (state, value) {
      state.genericEventCounter = value
    },
    changeShowHelpModal (state, value) {
      state.showHelpModal = value
    },
  },
})
