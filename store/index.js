const initialState = {
    darkMode: false,
  }
  
  export const state = () => initialState;
  
  export const getters = {
    getDarkMode(state){
      return state.darkMode  
    },
  }
  
  export const mutations = {
    SET_DARKMODE(state, data){
      state.darkMode = data;
    },
  }
  
  export const actions = {
    setDarkMode({ commit }, data){
      commit('SET_DARKMODE', data)
    },
  }