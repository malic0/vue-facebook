# Documentation of ```vue-facebook```

## Installation

##### Via NPM
```bash
npm install vue-facebook
```

##### Via CDN
```html
<!-- <script src="https://vue-cdn"></script> -->

<script src="https://unpkg.com/vue-facebook@0.2.2/dist/vue-facebook.min.js"></script>
```

## Usage

##### in Vue App
```js
import Vue from 'vue'
import VueFacebook from 'vue-facebook'

Vue.use(VueFacebook)
```
Vue Template
```html
<template>
 <div class="content">
        <div class="post">
            <!-- Article -->
        </div>
        <fb-comment url="your-url.com/post-slug" />
    </div>
</template>
```

##### HTML File
```html
<!-- <script src="https://vue-cdn"></script> -->
<script src="https://unpkg.com/vue-facebook@0.2.2/dist/vue-facebook.min.js"></script>

<div id="app">
  <div class="content">
    <div class="post">
        <!-- Article -->
    </div>
    <fb-comment url="your-url.com/post-slug" />
  </div>
</div>
```

## Features

1. [Facebook Comments](./components/fb-comment.md)

