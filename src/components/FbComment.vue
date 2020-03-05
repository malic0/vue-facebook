<template>
  <div class="fb-comments" :data-colorscheme="colorsheme" :data-mobile="mobile" :data-width="width" :data-href="url" :data-numposts="numposts" :data-order-by="orderBy">
  </div>
</template>
<script>
export default {

  name: "fb-comment",

  props: {
    url: {
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
    width: {
      type: String,
      default: "100%"
    },
    colorsheme: {
      type: String,
      default: 'light'
    }
  }
}

</script>
