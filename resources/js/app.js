import './bootstrap';
//material icons
import "@mdi/font/css/materialdesignicons.css";
import '../css/app.css';

import Vue from 'vue'
import {createInertiaApp, Head, Link, router} from '@inertiajs/vue2'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';

import {ZiggyVue} from '../../vendor/tightenco/ziggy/dist/vue.m';
import {Ziggy} from './ziggy.js';


import vuetify from '../plugins/vuetify'
import store from '../plugins/store'

import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

Vue.use(PerfectScrollbar)

import.meta.glob([
    '../images/**',
]);

Vue.prototype.$route = route

// ziggy end here
createInertiaApp({
    progress: {
        color: '#29d',
    },

    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        return pages[`./Pages/${name}.vue`]
    },

    setup({el, App, props, plugin, Ziggy}) {
        Vue.use(plugin)
        Vue.use(ZiggyVue, Ziggy)
        Vue.use(router)
        Vue.component('InertiaHead', Head)
        Vue.component('InertiaLink', Link)
        new Vue({
            vuetify,
            store,
            render: h => h(App, props),
        }).$mount(el)
    },
})
