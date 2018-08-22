import Vue from 'vue'
import Router from 'vue-router'
import institutionDashboard from '@/components/Configuration/institutionDashboard'
import requestsList from '@/components/Applications/requestsList'
import paymentLogList from '@/components/Applications/paymentLogList'
import Profile from '@/components/Applications/Profile'
import createInstitution from '@/components/Configuration/createInstitution'
import configureRequests from '@/components/Configuration/configRequests'
import landingPage from '@/components/landingPage'
import changePassword from '@/components/Users/changePassword'
import studentRegister from '@/components/Users/studentRegister'
import userLogin from '@/components/Users/userLogin'
import userDashboard from '@/components/configuration/userDashboard'
import monitorApplication from '@/components/Applications/monitorApplication'
import transcriptApplication from '@/components/Configuration/transcriptApplication'
import paymentPage from '@/components/configuration/paymentPage'
import flexisafDashboard from '@/components/Configuration/flexisafDashboard'
import userList from '@/components/Applications/userList'
import applicationList from '@/components/Applications/applicationList'
import institutionList from '@/components/Applications/institutionList'
import paymentSettings from '@/components/Configuration/paymentSettings'

Vue.use(Router)

export default new Router({
  routes:[
    {path:'/idashboard', name:'institution-dashboard',component:institutionDashboard,
      children:[
        {path:'/manage-requests', name:'manage-requests', component:requestsList},
        {path:'/institution-profile',name:'institution-profile',component:Profile},
        {path:'/config-requests', name:'configure-requests',component:configureRequests},
        {path:'/payment-log',name:'payment-log',component:paymentLogList}
       ] },
    {path:'/', name:'landing-page',component:landingPage},
    {name:'change-password', component:changePassword,path:'/changepassword'},
    {name:'user-login',component:userLogin,path:'/login'},
    {name:'register',component:studentRegister,path:'/register'},
    {name:'user-dashboard',component:userDashboard,path:'/userdashboard',
    children:[
        {name:'user-profile', component:Profile,path:'/user-profile'},
        {name:'monitor-application', component:applicationList,path:'/monitor-application'},
        { name:'transcript-application',component:transcriptApplication,path:'/transcript-application'},
        {name:'payment-page',component:paymentPage,path:'/payment-page'}
    ]
  },
  {path:'/fdashboard',name:'flexisaf-dashboard',component:flexisafDashboard,default:requestsList,
    children:[
      {path:'/manage-all-requests',name:'manage-all-requests',component:requestsList},
      {path:'/manage-all-institutions',name:'manage-all-institution',component:institutionList},
      {path:'/manage-users',name:'manage-users',component:userList},
      {path:'/add-institution',name:'create-institution',component:createInstitution},
      {path:'/payment-settings',name:'payment-settings',component:paymentSettings},
      {path:'/all-payment-log',name:'all-payment-log',component:paymentLogList}
    ]
  }
]
})
