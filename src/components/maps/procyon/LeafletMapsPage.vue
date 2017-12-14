<template>
  <div>
     <div class="row">
       <div class="col-md-12">
         <vuestic-widget>
         <div class="typo-headers">
          <h2>南河城</h2>
         </div>
         <div class="typo-articles">
           <p>
           由于历史原因，南河城的主要功能是服务业。位于城市中心的是星际移民中心的巨型建筑。关于南河城的起源可以参考<a href="http://book.interimm.org/history/mars_immigration.html#index-10">伊希地城市圈</a>。
           </p>

          <p>
          目前建设情况可以参考下面的3D模型。可以在我们的 GitHub 创建新的 Issues 来提出你的建筑或者地标设想，并且命名。
          </p>

          <div class="sketchfab-embed-wrapper"><iframe width="100%" height="600" src="https://sketchfab.com/models/38483b36866847baba1dd115066dd5eb/embed" frameborder="0" allowvr allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe>

         </div>

          </div>
         </vuestic-widget>
       </div>
     </div>
     <!--
     <div class="google-maps-page">
       <div class="row">
         <vuestic-widget class="col-sm-12 widget-viewport-height" headerText="南河城">
           <leaflet-map></leaflet-map>
         </vuestic-widget>
       </div>
     </div>
     -->
  </div>
</template>

<script>
  import LeafletMap from './LeafletMap'

  export default {
    name: 'leaflet-maps-page',
    components: {
      LeafletMap
    }
  }
</script>

<style lang="scss">

</style>
