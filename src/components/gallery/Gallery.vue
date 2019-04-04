<template lang="pug">
  .gallery(:style="{backgroundColor: bgColor}" v-if="active")
    .gallery-container
      a.action-close.gallery-action(@click="close")
        i.action-close-icon(v-if="closeIcon" :class="closeIcon")
        .action-close-icon.default-icon(v-else) &#9587;
      .gallery-visualization
        .gallery-box
          a.action-box.gallery-action.flex-center(@click="prevImage" :disabled="disabledPrev")
            i.action-icon(v-if="prevIcon" :class="prevIcon")
            .action-icon.font-lg(v-else) &#8249;
          .image-view
            .image(:style="{backgroundImage: `url(${selectedImage.src})`}")
              .image-info(v-if="showImageInfo")
                h1.image-info-title(v-if="selectedImage.title") {{ selectedImage.title }}
                p.image-info-description(v-if="selectedImage.description") {{ selectedImage.description }}
            image-preview(:images="images" :selected-index="index" @select="selectIndex")
          a.action-box.gallery-action.flex-center(@click="nextImage" :disabled="disabledNext")
            i.action-icon(v-if="prevIcon" :class="nextIcon")
            .action-icon.font-lg(v-else) &#8250;
</template>

<script>
  import ImagePreview from './ImagePreview'

  export default {
    props: {
      active: {type: Boolean, required: true},
      prevIcon: String,
      nextIcon: String,
      closeIcon: String,
      bgColor: { type: String, default: () => '#000' },
      images: {
        type: Array,
        required: true,
        validation: v => v.filter(i => !i.src) === 0
      },
      loop: { type: Boolean, default: () => false },
      initialIndex: { type: Number, default: () => 0 }
    },
    components: { ImagePreview },
    data() {
      return { index: 0 }
    },
    watch: {
      active(v){
        if (v) {
          this.index = this.initialIndex
          this.startListener()
        }
      }
    },
    computed: {
      maxIndex() {
        return this.images.length - 1
      },
      disabledPrev() {
        return this.index === 0 && !this.loop
      },
      disabledNext() {
        return this.index === this.maxIndex && !this.loop
      },
      selectedImage() {
        return this.images[this.index]
      },
      showImageInfo() {
        return this.selectedImage.title || this.selectedImage.description
      }
    },
    methods: {
      prevImage() {
        if (!this.disabledPrev) {
          if (this.index === 0) {
            this.index = this.maxIndex
            this.itemView(this.$el.getElementsByClassName('image-thumb')[this.index])
          } else {
            this.index -= 1
            this.itemView(this.$el.getElementsByClassName('image-thumb')[this.index - 2])
          }

        }
      },
      nextImage() {
        if (!this.disabledNext) {
          if (this.index === this.maxIndex) {
            this.index = 0
            this.itemView(this.$el.getElementsByClassName('image-thumb')[this.index])
          } else {
            this.index += 1
            this.itemView(this.$el.getElementsByClassName('image-thumb')[this.index + 2])
          }
        }
      },
      itemView(item) {
        if (item && item.scrollIntoView) {
          item.scrollIntoView(false)
        }
      },
      selectIndex(index) {
        this.index = index
        this.itemView(this.$el.getElementsByClassName('image-thumb')[index])
      },
      onKeyDown({ key }) {
        switch (key) {
          case 'ArrowLeft':
            return this.prevImage()
          case 'ArrowRight':
            return this.nextImage()
          case 'Escape':
            return this.close()
        }
      },
      close() {
        document.removeEventListener('keydown', this.onKeyDown)
        this.$emit('close')
      },
      startListener() {
        document.addEventListener('keydown', this.onKeyDown)
      }
    },
    mounted() {
      if(this.active) {
        this.index = this.initialIndex
        this.startListener()
      }
    }
  }
</script>

<style lang="stylus" src="./gallery.styl"></style>