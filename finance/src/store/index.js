import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import project from './modules/project';
import modal from './modules/modal';

import * as types from './mutation-types';

// 开发环境
if (process.env.NODE_ENV === 'development') {
  Vue.use(Vuex);
}
const debug = process.env.NODE_ENV !== 'production';


const getters = {

};

const actions = {
};


const mutations = {
  [types.UPDATE_AJAX](state, status) {
    state.ajaxing = status;
  },
  [types.UPDATE_DIRECTION](state, direction) {
    state.direction = direction;
  },
  [types.UPDATE_TRANSITION](state, status) {
    state.transitionState = status;
  },
};
const state = {
  ajaxing: false,
  direction: 'forward',
  transitionState: true,
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    user,
    project,
    modal,
  },
  strict: debug,
});
