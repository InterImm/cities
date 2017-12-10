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
           南河城的主要功能是服务业。位于城市中心的是星际移民中心的巨型建筑。关于南河城的起源可以参考<a href="http://book.interimm.org/history/mars_immigration.html#index-10">伊希地城市圈</a>。
           </p>

          <p>
          目前建设情况可以参考下面的3D模型（内容较多时加载会很慢）。
          </p>
          <iframe src="https://3dwarehouse.sketchup.com/embed.html?mid=8d548832-b6ca-4f43-8a68-8048369b14b7&width=580&height=326" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="100%" height="600" allowfullscreen></iframe>
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
