import { createRouter, createWebHistory } from "vue-router";
import CoachDetail from "./pages/coaches/CoachesDetail.vue";
import CoachRegistration from "./pages/coaches/CoachRegistration.vue";
import ContactCoach from "./pages/requests/ContactCoach.vue";
import RequestsReceived from "./pages/requests/RequestsReceived.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
    history: createWebHistory(), 
    routes: [ 
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: () => import("./pages/coaches/CoachesList.vue") },
    { path: "/coaches/:id", component: CoachDetail,
      props: true ,
        children: [ { path: "contact", component: ContactCoach } ] 
    },
    { path: "/register", component: CoachRegistration },
    { path: "/requests", component: RequestsReceived },
    { path: "/:notFound(.*)", component: NotFound },
    ]
 });
 
 export default router;