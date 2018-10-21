import Vue from "vue";
import Router from "vue-router";
import ModelComparison from "./views/ModelComparison.vue";
import VehicleList from "./views/VehicleList.vue";
import VehicleListColorado from "./views/VehicleListColorado.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "VehicleList",
      component: VehicleList
    },
    {
      path: "/vehicle/Holden",
      name: "VehicleListColorado",
      component: VehicleListColorado
    },
    {
      path: "/vehicle/:vehiclename",
      name: "ModelComparison",
      component: ModelComparison,
      props: true
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
