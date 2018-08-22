import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGOUT,
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
    FETCH_ALL_PAYMENT_LOG 
} from './mutation_types'

export const userMutations = {
    //When users try to login
    [LOGIN](state){
        state.pending = true;
    },
    //When users successfully login 
    [LOGIN_SUCCESS](state){
        state.isLoggedIn = true;
        state.pending = false;
    },
    [LOGOUT](state){
        state.isLoggedIn = false;
    },
    //To add new application
    [ADD_APPLICATION](state,payload){
        state.trequests.push(payload);
    },
    [ADD_NEW_USER](state,payload){
        // payload = currentUser;
        state.users.push(payload)  
    },
    //When user is logged in, get the user's id, name and other information and push to current user
    //Get user current institution by name
    // [CHECK_USER_LOGIN_STATUS](state,payload){
    //    if( state.isLogin = true){
    //         payload = state.users;
    //    }
    //    else{
    //        state.isLogin = false;
    //    }
    // },
    [RETRIEVE_USER_PROFILE](state,payload){
        state.currentUser = payload;
    },
    [FETCH_LOGIN_NAME](state,payload){
        state.users.firstname = payload;
    },
    //Search for institution name from all institutions
    [FILTER_INSTITUTION_BY_NAME](state,payload){
        state.institutions = payload;
    }
};
export const institutionMutations = {
    [APPLICATION_BY_INSTITUTION_ID](state,payload){

    },
    [CONFIRM_USER_APPLICATION](state,payload){
        payload = state.application_status[1];
    },
    [RETRIEVE_INSTITUTION_PROFILE](state,payload){
        payload = state.currentInstitution;
    },
    [RETRIEVE_PAYMENT_LOG_BY_INSTITUTION_ID](state,payload){
        
    }
};
export const flexisafMutations = {
    [FETCH_ALL_APPLICATIONS](state,payload){
        payload = state.transcript_requests;
    },
    [FETCH_ALL_INSTITUTION_PROFILE](state,payload){
        payload = state.institutions;
    },
    [FETCH_ALL_USERS](state,payload){
        payload = state.users;
    },
    [FETCH_ALL_PAYMENT_LOG](state,payload){
        payload = state.payment_log;
    }
};