import Lightbox from '@/components/gallery/Gallery'

export { Lightbox }

export default {
  install(Vue) {
    Vue.component('lightbox', Lightbox)
  }
}