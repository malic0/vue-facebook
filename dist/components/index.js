import FbComment from "./FbComment.vue";


export default function install(Vue) {
    Vue.component('FbComment', FbComment)
}

// auto install
if (typeof window !== 'undefined' && typeof window.Vue !== 'undefined') {
    window.Vue.use(install)
}
