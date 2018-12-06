<template>
    <div class="fb-comments" :data-colorscheme="colorsheme" :data-mobile="mobile" :data-href="'https://developers.facebook.com/docs/plugins/comments#configurator'" :data-numposts="numposts" :data-order-by="orderBy">
    </div>
</template>
<script>
export default {


    props: {
        href: {
            type: String
        },
        mobile: {
            type: Boolean,
            default: false
        },
        numposts: {
            type: Number,
            default: 10
        },
        orderBy: {
            type: String,
            default: "social"
        },
        colorsheme: {
            type: String,
            default: 'light'
        }
    }
}
</script>