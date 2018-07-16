<template>
  <div id="app" class="layout">
    <!-- <top-bar></top-bar> -->
    <transition :name="direction === 'forward' ? 'in' : 'out'"
      @after-enter="afterEnter" @before-enter="beforeEnter">
      <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition :name="direction === 'forward' ? 'in' : 'out'"
      @after-enter="afterEnter" @before-enter="beforeEnter">
      <router-view v-if="!$route.meta.keepAlive" v-show="init"></router-view>
    </transition>
    <!-- <foot></foot>
    <loading></loading>
    <msg></msg> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
import * as types from './store/mutation-types';

export default {
  name: 'App',
  data() {
    return {
      init: false,
    };
  },
  computed: {
    ...mapState({
      direction: state => state.direction,
    }),
  },
  methods: {
    afterEnter() {
      this.$store.commit(types.UPDATE_TRANSITION, false);
    },
    beforeEnter() {
      this.$store.commit(types.UPDATE_TRANSITION, true);
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
