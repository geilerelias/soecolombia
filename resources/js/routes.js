import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";

Vue.use(VueRouter);

const withPrefix = (prefix, routes) =>
    routes.map(route => {
        route.path = prefix + route.path;
        return route;
    });

let routes = [
    {
        path: "/",
        component: () => import("./components/layout.vue"),
        children: [{
            path: "",
            name: "inicio",
            component: () => import("./components/page/Inicio"),
        },
        {
            path: "/quienes-somos",
            name: "quienes-somos",
            component: () => import("./components/page/QuienesSomos.vue")
        },
        {
            path: "/no-mas-violencia",
            name: "no-mas-violencia",
            component: () => import("./components/page/NoMasViolencia.vue")
        },
        {
            path: "/empoderamiento",
            name: "empoderamiento",
            component: () => import("./components/page/Empoderamiento.vue")
        },
        {
            path: "/servicios",
            name: "servicios",
            component: () => import("./components/page/Servicios.vue")
        },
        
        {
            path: "/tienda",
            name: "tienda",
            component: () => import("./components/page/Tienda.vue")
        },
        {
            path: "/detalle-producto",
            name: "detalle-producto",
            component: () => import("./components/page/Tienda.vue")
        },
        {
            path: "/contactenos",
            name: "contactenos",
            component: () => import("./components/page/Contactenos.vue")
        }
        ]

    },
    {
        path: "/login",
        name: "login",
        component: () => import("./components/Auth/Login.vue"),
        meta: {
            withAuth: true
        }
    },
    {
        path: "/register",
        name: "register",
        component: () => import("./components/Auth/Register.vue"),
        meta: {
            withAuth: true
        }
    },
    {
        path: "/send-notification",
        name: "send-notification",
        component: () => import("./components/Auth/sendNotificationPassword.vue")
    },
    {
        path: "/reset-password/:id",
        name: "reset-password",
        component: () => import("./components/Auth/ResetPassword.vue")
    },
    {
        path: "*",
        name: "404",
        component: () => import("./components/errors/404.vue")
    }
];

const router = new VueRouter({
    routes,
    mode: "history",
     scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.middlewareAuth)) {
        if (!auth.check()) {
            next({
                path: "/login",
                query: {
                    redirect: to.fullPath
                }
            });

            return;
        }
    } else if (to.matched.some(record => record.meta.withAuth)) {
        if (auth.check()) {
            next({
                path: "/dashboard",
                query: {
                    redirect: to.fullPath
                }
            });

            return;
        }
    }

    next();
});

//opcion 1
router.beforeResolve((to, from, next) => {
    if (to.name) {
        NProgress.start()
    }
    next()
});


router.afterEach((to, from) => {
    NProgress.done()
});

//opcion 2
router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})

router.afterEach(() => {
    NProgress.done()
})

export default router;
