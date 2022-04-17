import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import Detail from '../views/Detail.vue'
import Profile from '../views/Profile.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { requiresAuth: true },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const pathData = to.matched[0];
  if (pathData.meta.requiresAuth && !store.state.auth) {
    next({
      path: "/login",
      query: { redirect: to.fullPath },
    });
  } else if(pathData.path == '/login' && store.state.auth) {
    next({
      path: "/",
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});
export default router
