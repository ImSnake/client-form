import { createStore } from 'vuex';
import EventService from "@/services/EventService";

export default createStore({

  state: {
    orderId: '561361',

    questionList: [
      {
        text: "Оцените скорость подключения",
        rating: ""
      },
      {
        text: "Оцените работу инженера по подключению услуг",
        rating: ""
      },
      {
        text: "На сколько понятно была предоставлена консультации менеджером отдела продаж по услугам",
        rating: ""
      },
      {
        text: "Оцените ваше впечатление от обращения в компанию в целом",
        rating: ""
      }
    ]
  },

  mutations: {
    SET_CUSTOMER_DATA(state, data) {
      state.customerData = data;
    },

    SET_STATUSES(state, data) {
      state.statuses = data;
    },

    UPDATE_ORDER_DETAILS(state, data) {
      state.orderDetails = data;
    }
  },

  actions: {
    fetchConnectionStatuses({ commit }) {
      return EventService.getConnectionStatuses()
        .then(response => {
          commit('SET_STATUSES', response.data);
        })
        .catch(error => {
          throw(error);
        });
    },

    fetchOrderDetails({ commit }, orderId) {
      return EventService.getOrderDetails(orderId)
        .then(response => {
          commit('UPDATE_ORDER_DETAILS', response.data);
        })
        .catch(error => {
          throw(error);
        });
    },

    fetchCustomerData({ commit }) {
      return EventService.getCustomerData()
        .then(response => {
          commit('SET_CUSTOMER_DATA', response.data);
        })
        .catch(error => {
          throw(error);
        });
    }

  },

  modules: {
  }
});
