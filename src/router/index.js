import Vue from "vue";
import Router from "vue-router";
const Home = () => import("../views/home/Home.vue")
const Profile = () => import("../views/profile/Profile.vue")
const Cart = () => import("../views/shoppingCart/Cart.vue")
const Categroy = () => import("../views/category/Category.vue")
const Detail =() => import('../views/detail/Detail.vue')
Vue.use(Router);

const routes = [
  {
    path:"",
    redirect: "/home"
  },
  {
    path:"/home",
    component:Home
  },
  {
    path:"/profile",
    component:Profile
  },
  {
    path:"/categroy",
    component:Categroy
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:"/detail/:id",
    component:Detail
  },
];

export default new Router({
  routes,
  mode: "history"
});
