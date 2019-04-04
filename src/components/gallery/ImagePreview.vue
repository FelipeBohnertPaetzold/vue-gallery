<template lang="pug">
  .image-preview
    .image-thumb(
      v-for="(image, index) in images"
      :class="{selected: selectedIndex === index }"
      :style="{backgroundImage: `url(${image.src})`}"
      @click="$emit('select', index)"
    )
</template>

<script>
  export default {
    props: {
      images: { type: Array, required: true },
      selectedIndex: { type: Number, required: true }
    }
  }
</script>

<style lang="stylus" src="./image-preview.styl"></style>
