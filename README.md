# Vue Facebook

### Installation

``` 
npm install --save vue-facebook
```

### Usage
```js

// src/main.js
import Vue from 'vue';
import VueFacebook from 'vue-facebook';

Vue.use(VueFacebook)
```

In Vue template
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


#### License
[MIT](LICENSE)