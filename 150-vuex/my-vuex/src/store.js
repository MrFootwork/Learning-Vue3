import { createStore } from 'vuex';

const counterModule = {
  state() {
    return {
      counter: 0
    };
  },
  mutations: {
    increment(state) {
      ++state.counter;
    },
    increase(state, payload) {
      console.log(state);
      state.counter += payload.value;
    }
  },
  actions: {
    increment(context) {
      // console.log(state);
      context.commit('increment');
    },
    increase(context, payload) {
      setTimeout(() => {
        context.commit('increase', payload);
      }, 2000);
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) return 0;
      if (finalCounter > 100) return 100;
      return finalCounter;
    }
  }
};

const store = createStore({
  modules: {
    counter: counterModule
  },
  state() {
    return {
      loggedIn: false
    };
  },
  mutations: {
    // login(state) {
    //   state.loggedIn = true;
    // },
    // logout(state) {
    //   state.loggedIn = false;
    // }
    setAuth(state, payload) {
      state.loggedIn = payload.isAuth;
    }
  },
  actions: {
    // login(context) {
    //   context.commit('login');
    // },
    // logout(context) {
    //   context.commit('logout');
    // }
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    }
  },
  getters: {
    isLoggedIn(state) {
      return state.loggedIn;
    }
  }
});

export default store;
