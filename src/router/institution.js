// import institutionDashboard from '@/components/Configuration/institutionDashboard'
// import manageTranscriptRequest from '@/components/Configuration/manageTranscriptRequest'
// import paymentLog from '@/components/Configuration/paymentLog'
// import manageInstitution from '@/components/Configuration/manageInstitution'
// import config from '@/components/Configuration/config'
// import configureRequests from '@/components/Configuration/configRequests'

// export default[
//     {
//         path:'/idashboard',
//         name:'institution-dashboard',
//         component:institutionDashboard,
//         children:[
//           {
//             path:'/manage-requests',
//             name:'manage-request',
//             component:manageTranscriptRequest
//           },
//           {
//             path:'/config',
//             name:'configuration',
//             component:config,
//             children:[
//               {
//                 path:'/manage-institution',
//                 name:'manage-institution',
//                 component:manageInstitution
//               },
//               {
//                 path:'/config-requests',
//                 name:'configure-requests',
//                 component:configureRequests
//               }
//             ]
//           },
//           {
//             path:'/payment-log',
//             name:'payment-log',
//             component:paymentLog
//           }
//         ]
//     }
// ]