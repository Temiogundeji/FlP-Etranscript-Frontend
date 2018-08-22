export const flexisafGetters = {
    allInstitutions:state => state.institutions,
    allApplications:state => state.requests,
    allUsers:state =>state.users,
    allPaymentLog:state =>state.paymentLogs
}
export const institutionGetters = {

}
export const userGetters = {
   isLoggedIn:state =>{
    return state.isLoggedIn
   }
}