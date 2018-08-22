import {
    APPLICATION_BY_USER_ID,
    UPDATE_APPLICATION_STATUS, 
    FILTER_APPLICATION_BY_KEYWORD,
    CHECK_USER_LOGIN_STATUS,
    ADD_APPLICATION,
    ADD_NEW_USER,
    SUCCESS_LOGIN_MESSAGE,
    RETRIEVE_USER_PROFILE, 
    FILTER_INSTITUTION_BY_NAME, 
    FETCH_LOGIN_NAME,
    APPLICATION_BY_INSTITUTION_ID,
    CONFIRM_USER_APPLICATION,
    RETRIEVE_INSTITUTION_PROFILE, 
    RETRIEVE_PAYMENT_LOG_BY_INSTITUTION_ID,
    FETCH_ALL_APPLICATIONS, 
    FETCH_ALL_INSTITUTION_PROFILE, 
    FETCH_ALL_USERS,
    FETCH_ALL_PAYMENT_LOG, 
    LOGIN_SUCCESS,
    LOGOUT
} from './mutation_types'


export const userActions = {

    login({state,commit,rootState}, creds) {
        console.log("login...", creds);
        commit(LOGIN); // show spinner
        return new Promise(resolve => {
          setTimeout(() => {
            localStorage.setItem("token", "JWT");
            commit(LOGIN_SUCCESS);
            resolve();
          }, 1000);
        });
      },
      logout({commit}){
        localStorage.removeItem("token");
        commit(LOGOUT);
      },


    //Add  New user
     addUser(store) {
        let dispatch = store.dispatch
         dispatch('ADD_NEW_USER')
     },
     //Add New application
     addApplication(store){
         let dispatch = store.dispatch
         dispatch('ADD_APPLICATION')
     },   
}
export const institutionActions = {}
export const flexisafActions = {
    allApplications(store){
        let dispatch = store.dispatch
        dispatch('FETCH_ALL_APPLICATIONS')
    },
    allInstitution(store){
        let dispatch = store.dispatch
        dispatch('FETCH_ALL_INSTITUTION')
    },
    allUsers(store){
        let dispatch = store.dispatch
        dispatch('FETCH_ALL_USERS')
    },
    fetchAllPayments(store){
        let dispatch = store.dispatch
        dispatch('FETCH_ALL_PAYMENT_LOG')
    }
}
