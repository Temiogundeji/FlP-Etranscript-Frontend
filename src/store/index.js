import Vue from 'vue'
import Vuex from 'vuex'

import {userMutations,institutionMutations,flexisafMutations} from './mutations'
import {userGetters,institutionGetters,flexisafGetters} from './getters'
import {userActions,institutionActions,flexisafActions} from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    strict:true,
    state:{
        //Students/Alumni information
     users:[
            {
                id:1,
                firstname:'Yusuff',
                lastname:'Ogundeji',
                email:'yusuffogundeji@gmail.com',
                phone:'08075081819',
                password:'Temi900',
                address:'14, Ifeloju Street, Gbaremu Ibadan.',
                user_type:'applicant'
            },
            {
                id:2,
                firstname:'Lamide',
                lastname:'Ogundeji',
                email:'midetobi@gmail.com',
                phone:'08075081819',
                password:'mide900',
                address:'14, Ifeloju Street, Gbaremu Ibadan.',
                user_type:'applicant'
            },

        ],
        //Institution admin details 
        institutionAdmin:[
            {   user_id:'#ghjklv',
                institution_name:'University Of Ibadan',
                institution_id:1,
            },
            {

            }
        ],
         //institution information
        institutions:[
            {
                id:1,
                name:'University Of Ibadan,Ibadan.',
                logo:'../src/assets/logo.png',
                description:'The first and the best',
                admin:{
                    id:1,
                    name:'Olayinka Idowu',
                    password:'bello_108',
                    email:'olayinka_idowu@unilag.com'
                }
            },
            {
                id:2,
                name:'University Of lagos, Akoka.',
                logo:'C/path',
                description:'The akokite',
                admin:{
                    id:2,
                    name:'Rahman Bello',
                    password:'bello_108',
                    email:'rahman_bello@unilag.com'
                }
            },
            {
                id:3,
                name:'Ahmadu Bello University,Zaria.',
                logo:'C/path',
                description:'The Abusite',
                admin:{
                    id:1,
                    name:'Ibrahim Garba',
                    password:'bello_108',
                    email:'olayinka_idowu@unilag.com'
                }
            },
            {
                id:4,
                name:'University Of Nigeria,Nsukka',
                logo:'C/path',
                description:'The first after indepence',
                admin:{
                    id:1,
                    name:'Olayinka Idowu',
                    password:'bello_108',
                    email:'olayinka_idowu@unilag.com'
                }
            },
            {
                id:5,
                name:'Federal University Oye-Ekiti',
                logo:'../src/assets/logo.png',
                description:'The first and the best',
                admin:{
                    id:1,
                    name:'Olayinka Idowu',
                    password:'bello_108',
                    email:'olayinka_idowu@unilag.com'
                }
            },
        ],
        //All transcript
        requests:[
            {
                order_id:1,
                user_id:1,
                prog_type:'BSc',
                receiver:'Unilag',
                sender:'Ahmadu Bello Uinversity',
                order_date:'5-3-2017',
                application_status:'pending'
            },
            {
                order_id:2,
                user_id:2,
                prog_type:'MSc',
                receiver:'Unilag',
                sender:'Ahmadu Bello University',
                order_date:'5-4-2017',
                application_status:'completed'
                
            }
        ],

        //All payment log
        paymentLogs:[
            {
                user_id:1,
                payment_ref:'#1',
                payment_status:'completed',
                amount:'#5000',
                order_date:'5-4-2017'
            },
            {
                user_id:2,
                payment_ref:'#2',
                payment_status:'completed',
                amount:'#5000',
                order_date:'5-4-2017'
            }
        ],
        
        //selected user information
        currentUser:{},

        //single institution information
        currentInstitution:{},

        //user types
        userTypes:['student','institutionAdmin','flexiSafAdmin'],

        //application status
        application_status:["Waiting for confirmation","Confirmed"],

        //payment status
        payment_status:["Completed","Pending"],

        //check user login
        isLoggedIn:localStorage.getItem("token"),
        // isLoggedIn:!!localStorage.getItem("fetusers"),
        isLoggedIn:false,
        //Response Message 
        // messages :["You are now logged in","You have logged out"]
    },
    mutations: Object.assign({},userMutations, institutionMutations, flexisafMutations),
    getters: Object.assign({}, userGetters, institutionGetters,flexisafGetters),
    actions: Object.assign({}, userActions, institutionActions,flexisafActions)

})


