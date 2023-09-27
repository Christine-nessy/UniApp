import Vue from 'vue'
import VueRouter from 'vue-router'

import LandingPage from "./components/LandingPage"
import AboutUs from "./components/AboutUs"
import SignUp from "./components/SignUp"
import Login from "./components/Login"


Vue.use(VueRouter)

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
    }
]