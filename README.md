# Vue Facebook
<div>
	<a href="https://www.npmjs.com/package/vue-facebook"><img src="https://nodei.co/npm/vue-facebook.png"></a>
</div>

Vue components that are meant to ease the integration of Facebook API to your Vue Application
<a href="//malic0.github.io/vue-facebook">Demo</a>
### Features
* Facebook Comments


### Installation

``` 
npm install --save vue-facebook
```

## Usage

```js
// src/main.js
import Vue from 'vue';
import VueFacebook from 'vue-facebook';

Vue.use(VueFacebook)
```
or
```html
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-facebook"></script>
<script>
new Vue(
	{
		el: '#app'
	}
)
</script>
```

In Vue/HTML template

```vue
<template>
    <div class="content">
        <div class="post">
            <!-- Article -->
        </div>
        <fb-comment url="your-url.com/post-slug" />
    </div>
</template>
```

#### Contribute
All contributions are welcomed, but hey before working on a feature, please kindly suggest it as a new issue. Or a tweet <a href="https://twitter.com/malicoklash">@malicoklash</a>

And remember Clean code Rocks.
 
#### Author 

* <a href="https://malico.tk">Malico</a>


#### License
[MIT](LICENSE)