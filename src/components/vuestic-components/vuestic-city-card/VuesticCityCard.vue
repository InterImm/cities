<template>
  <div class="vuestic-city-card d-flex flex-column align-items-center">

    <div style="margin-top:1.25rem;">
     <div class="chart-container">
     <button class="btn btn-secondary btn-sm" @click="showCityModal()">
      完成度：{{progressValue}} %
      </button>
      </div>
    </div>
    <h5 class="name">{{name}}</h5>
    <span class="location"><span class="icon glyphicon glyphicon-map-marker"></span> {{location}}</span>
    <div class="reference">
      <a class="icon fa fa-link"
         v-if="reference.link" :href="'http://' + reference.link" target="_blank"></a>
      <a class="icon fa fa-github"
         v-if="reference.github" :href="'http://' + reference.github" target="_blank"></a>
      <a class="icon fa fa-book"
         v-if="reference.book" :href="'http://' + reference.book" target="_blank"></a>
      <a class="icon fa fa-globe"
         v-if="reference.model" :href="'http://' + reference.model" target="_blank"></a>
    </div>
    <modal :show.sync="show" v-bind:large="true" :cancelClass="'none'" :okText="'关闭'" ref="cityModal">
     <div slot="title">{{name}}信息</div>
     <div>
       {{cityInfo}}
     </div>
   </modal>
  </div>
</template>

<script>
  import Widget from '../../vuestic-components/vuestic-widget/VuesticWidget'
  import Modal from '../../vuestic-components/vuestic-modal/VuesticModal'

  export default {
    name: 'vuestic-city-card',
    props: ['cityInfo', 'name', 'location', 'reference', 'progressValue'],
    components: {
      Widget,
      Modal
    },
    data () {
      return {
        show: true
      }
    },
    methods: {
      showCityModal () {
        this.$refs.cityModal.open()
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/variables";
  @import "../../../sass/icons-styles";

  $vuestic-city-card-width: 12.6875rem;
  $vuestic-city-card-photo-diameter: 9.375rem;

  .vuestic-city-card {
    width: $vuestic-city-card-width;
    .photo {
      height: $vuestic-city-card-photo-diameter;
      width: $vuestic-city-card-photo-diameter;
      border-radius: 50%;
      background-color: $lighter-gray;
      overflow: hidden;

      img {
        height: 100%;
        width: 100%;
      }
    }
    .name {
      margin-top: 1.325rem;
      margin-bottom: 0;
    }
    .location {
      margin-top: 0.8125rem;
      .icon {
        color: $lighter-gray;
        font-size: $font-size-larger;
      }
      &:hover {
        cursor: pointer;
        .icon {
          color: red;
        }
      }
    }
    .reference {
      display: flex;
      justify-content: center;
      padding-top: 1rem;
      margin-top: 1.25rem;
      margin-bottom: 1.25em;
      width: 100%;
      border-top: solid .125rem $light-gray;
      .icon {
        color: $gray;
        text-decoration: none;
        font-size: $font-size-h4;
        margin-right: .4375rem;
        margin-left: .4375rem;
        &:hover {
          cursor: pointer;
          color: darken($gray, 50%);
        }
      }
    }
  }
</style>
