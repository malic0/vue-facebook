import './components';

/**
 * Register Facebook JS SDk
 */
let register = (d = document, s = 'script', id = 'facebook-jssdk') => {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2';
    fjs.parentNode.insertBefore(js, fjs);
}


const VueFacebook = {
    install(Vue, options) {
        Vue.mixin({
            created: function() {
                register()
            }
        })
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueFacebook)
}


export default VueFacebook