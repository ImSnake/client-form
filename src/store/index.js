import { createStore } from 'vuex';
import EventService from "@/services/EventService";

export default createStore({

  state: {
    //appStates: {},
    //userData: {},
  },

  mutations: {
    SET_STATE(state, data) {
      state.appStates = data;
    },

    SET_MEETING_DATA(state, data) {
      state.meetingData = data;
    },

    SET_USER_DATA(state, data) {
      console.log('set user data');
      state.userData = data;
    }
  },

  actions: {
    fetchAppStates({ commit }) {
      return EventService.getAppStates()
        .then(response => {
          commit('SET_STATE', response.data);
        })
        .catch(error => {
          throw(error);
        });
    },

    fetchUserData({ commit }) {
      return EventService.getUserData()
        .then(response => {
          commit('SET_USER_DATA', response.data);
          console.log('commit user data');
        })
        .catch(error => {
          throw(error);
        });
    },

    fetchMeetingData ({ commit }) {
      return EventService.getMeetingData()
        .then(response => {
          commit('SET_MEETING_DATA', response.data);
          console.log('commit meeting data');
        })
        .catch(error => {
          throw(error);
        });
    }
  },

  modules: {
  }
});
