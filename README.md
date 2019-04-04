# vue-slim-lightbox
### A simple lightbox for vue

### Installation
```yarn add vue-slim-lightbox```

or

```npm install vue-slim-lightbox --save```

#### [Live Demo](https://felipebohnertpaetzold.github.io/vue-slim-lightbox)

### Important
Before using, import the css file into your project's *index.js*

```js
import 'vue-slim-lightbox/dist/vue-slim-lightbox.css'
```

### Locally registration

```vue
<template>
  <lightbox
    :images="images"
    :initial-index="index"
    :active="active"
    prev-icon="any-icon-class"
    next-icon="any-icon-class"
    bg-color="#000"
    @close="onClose"
  />
</template>

<script>
import { Lightbox } from 'vue-slim-lightbox'
import 'vue-slim-lightbox/dist/vue-slim-lightbox.css'

export default {
  computed: {
    images() {
      return [
        { src: 'https://path-to-your-image.com', title: 'Test title', description: 'Any description here' },
        { src: 'https://path-to-your-image.com', description: 'Any description here' },
        { src: 'https://path-to-your-image.com', title: 'Test title' },
        { src: 'https://path-to-your-image.com' }
      ]
    },
    data() {
      return { index: 0, active: true }
    },
    methods: {
      onClose() {
        this.active = false
      }
    }
  },
  components: { Lightbox }
}
</script>

```

### Globally registration

```js
import Vue from 'vue'
import Lightbox from 'vue-slim-lightbox'
import 'vue-slim-lightbox/dist/vue-slim-lightbox.css'

Vue.use(Lightbox)
```

### Array image formats
```js
const images = [
  {
    src: 'https://path-to-image.com', //required,
    title: 'Title image', //optional
    description: 'Description image', //optional
  }
]
```

### Props

| Property    |  Required |  Type |  Default | Description
|-------------|-----------|-------|----------|------------
|active       |  yes      |Boolean|          | display or hide lightbox
|images       |  yes      |Array  |          | array of images to render
|prev-icon    |  no       |String |          | prev icon class
|next-icon    |  no       |String |          | next icon class
|close-icon   |  no       |String |          | close icon class
|bg-color     |  no       |String | #000     | background color lightbox
|loop         |  no       |Boolean| false    | enable looping in images
|initial-index|  no       |Number | 0        | initial image to be selected for display

# To developer's
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```
