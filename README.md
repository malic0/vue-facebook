# Vue Facebook

Vue components that are meant to ease the integration of Facebook API to your Vue Application
### Features
* Facebook Comments


### Installation

``` 
npm install --save vue-facebook
```

### Usage

##### All Features

```js

// src/main.js
import Vue from 'vue';
import VueFacebook from 'vue-facebook';

Vue.use(VueFacebook)
```

##### Specific Components
``` js
// test.vue

<script>

import FbComment from "vue-facebook/components/_fb-comment";

// Use either this method
export default {
	components: {
		FbComment
	},
}

// or 
Vue.component(FbComment);

</script>

```
In Vue/HTML template
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

#### Documentation
Browse through the documentation of each component [here](docs)

#### License
[MIT](LICENSE)