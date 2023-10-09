import {createRouter, createWebHistory} from 'vue-router'

import LandingPage from "./../components/LandingPage.vue"
import AboutUs from "./../components/AboutUs.vue"
import SignUp from "./../components/SignUp.vue"
import Login from "./../components/Login.vue"
import Register from "./../components/Register.vue"
import Student  from "./../components/Student.vue"


const routes =[
    {
        path: '/',
        name: 'landingpage',
        component: LandingPage,
    },
    {
        path: '/aboutus',
        name: 'aboutus',
        component: AboutUs,
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUp,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    },
    {
        path: '/student',
        name: 'student',
        component: Student,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
 export default router