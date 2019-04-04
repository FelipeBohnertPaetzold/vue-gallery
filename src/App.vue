<template lang="pug">
  gallery(:active="true" :initial-index="2" :images="images" close-icon="fas fa-times" next-icon="fas fa-chevron-right" prev-icon="fas fa-chevron-left")
</template>

<script>
  import Gallery from '@/components/gallery/Gallery'

  export default {
    components: { Gallery },
    computed: {
      images() {
        return [
          {
            src: 'https://www.petz.com.br/blog/wp-content/uploads/2017/07/gato02.jpg',
            title: 'Test title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus nibh eros, in congue quam porta ac. Vivamus pretium mattis quam, et laoreet arcu venenatis quis. Integer iaculis eget lacus non mollis. Vestibulum ultrices velit imperdiet libero sagittis, vitae tincidunt purus lacinia. Mauris commodo pellentesque velit, quis commodo metus aliquet non.'
          },
          {
            src: 'https://www.petlove.com.br/dicas/wp-content/uploads/2017/08/curiosidades-sobre-gatos-2.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus nibh eros, in congue quam porta ac. Vivamus pretium mattis quam, et laoreet arcu venenatis quis. Integer iaculis eget lacus non mollis. Vestibulum ultrices velit imperdiet libero sagittis, vitae tincidunt purus lacinia. Mauris commodo pellentesque velit, quis commodo metus aliquet non.'
          },
          {
            src: 'http://2.bp.blogspot.com/-5Dbg2pQnhzg/UEOa13n19pI/AAAAAAAAMDg/-o8O3jPOTIw/s1600/8.jpg',
            title: 'Test title'
          },
          { src: 'https://www.petlove.com.br/dicas/wp-content/uploads/2017/08/curiosidades-sobre-gatos-2.jpg' },
          { src: 'http://2.bp.blogspot.com/-5Dbg2pQnhzg/UEOa13n19pI/AAAAAAAAMDg/-o8O3jPOTIw/s1600/8.jpg' },
          { src: 'https://www.petlove.com.br/dicas/wp-content/uploads/2017/08/curiosidades-sobre-gatos-2.jpg' },

          { src: 'http://2.bp.blogspot.com/-5Dbg2pQnhzg/UEOa13n19pI/AAAAAAAAMDg/-o8O3jPOTIw/s1600/8.jpg' },
          { src: 'https://www.petlove.com.br/dicas/wp-content/uploads/2017/08/curiosidades-sobre-gatos-2.jpg' },

          { src: 'http://2.bp.blogspot.com/-5Dbg2pQnhzg/UEOa13n19pI/AAAAAAAAMDg/-o8O3jPOTIw/s1600/8.jpg' },

          { src: 'https://www.petlove.com.br/dicas/wp-content/uploads/2017/08/curiosidades-sobre-gatos-2.jpg' },
          { src: 'http://2.bp.blogspot.com/-5Dbg2pQnhzg/UEOa13n19pI/AAAAAAAAMDg/-o8O3jPOTIw/s1600/8.jpg' },

          { src: 'https://www.petlove.com.br/dicas/wp-content/uploads/2017/08/curiosidades-sobre-gatos-2.jpg' },
          { src: 'http://2.bp.blogspot.com/-5Dbg2pQnhzg/UEOa13n19pI/AAAAAAAAMDg/-o8O3jPOTIw/s1600/8.jpg' }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans')

  *
    font-family 'Open Sans', sans-serif
</style>
