<template>
  <div class="data-visualisation-tab dashboard-tab">
    <div class="row">
      <div class="col-md-12 d-flex">
         <vuestic-widget headerText="南河城建设" class="city-card-widget">
           <vuestic-city-card :name="'南河城'" :location="'火星，伊希地'" :progressValue="5" :cityInfo="'南河城是火星一号城，是星际移民中心的核心所在，同时也有很多服务型的企业落户于此。目前主干道已经施工完毕，城市中心区域的辅路和建筑正在建设中。'"
                                 :reference="{github: 'github.com/interimm/martian-cities',book:'book.interimm.org',model:'3dwarehouse.sketchup.com/model/8d548832-b6ca-4f43-8a68-8048369b14b7/Isidis-City-Procyon'}">
           </vuestic-city-card>
         </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import BadgeColumn from '../../tables/BadgeColumn.vue'

  Vue.component('badge-column', BadgeColumn)

  export default {
    name: 'data-visualisation-tab'
  }
</script>

<style lang="scss" scoped>
  @import "../../../sass/_variables.scss";
  @import "../../../../node_modules/bootstrap/scss/variables";
  @import "../../../../node_modules/bootstrap/scss/mixins/breakpoints";

  .chart-container {
    padding: 0 2rem;
    height: 24rem;
  }


</style>
