# Vue Facebook

Vue components that are meant to ease the integration of Facebook API to your Vue Application
### Features
* Facebook Comments


### Installation

``` 
npm install --save vue-facebook
```

### Usage

All Features

```js

// src/main.js
import Vue from 'vue';
import VueFacebook from 'vue-facebook';

Vue.use(VueFacebook)
```
 or

```html
<script src="https://unpkg.com/vue-facebook"></script>
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
Browse through the documentation of each component [here](https://github.com/malic0/vue-facebook/wiki)

#### Contribute
All contributions are welcomed, but hey before working on a feature, please kindly suggest it as a new issue.
And remember Clean code Rocks.
 
#### License
[MIT](LICENSE)