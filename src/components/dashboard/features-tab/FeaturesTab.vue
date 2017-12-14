<template>
  <div class="overview-tab dashboard-tab">
    <div class="d-flex overview-row flex-row w-100 justify-content-sm-around justify-content-xs-start">

      <div class="overview-col">
        <div class="overview-item">
          <div class="overview-icon-container">
          <i class="fa fa-anchor fa-2x"></i>
          </div>
          建设城市核心地段
        </div>
        <div class="overview-item">
          <div class="overview-icon-container">
          <i class="fa fa-american-sign-language-interpreting fa-2x"></i>
          </div>
          逐步扩展城市服务领域
        </div>
        <div class="overview-item">
          <div class="overview-icon-container">
          <i class="fa fa-hotel fa-2x"></i>
          </div>
          外环居民区精心挑选
        </div>
      </div>

      <div class="overview-col">
        <div class="overview-item">
          <div class="overview-icon-container">
          <i class="fa fa-diamond fa-2x"></i>
          </div>
          城市完整三维建模
        </div>
        <div class="overview-item">
          <div class="overview-icon-container">
          <i class="fa fa-shopping-bag fa-2x"></i>
          </div>
          规划黄金商圈
        </div>
        <div class="overview-item">
          <div class="overview-icon-container">
          <i class="fa fa-institution fa-2x"></i>
          </div>
          精雕私有豪华住房
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'features-tab'
  }
</script>

<style lang="scss" scoped>
  @import "../../../sass/_variables.scss";
  @import "../../../../node_modules/bootstrap/scss/variables";
  @import "../../../../node_modules/bootstrap/scss/mixins/breakpoints";

  .overview-item {
    display: flex;
    align-items: center;
    height: 55px;
    margin-bottom: 3rem;
    padding-right: 1rem;
    font-size: 1.25rem;
    font-weight: bold;

    .overview-icon-container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      min-width: 85px;
      max-width: 85px;
      height: 100%;
    }
  }

  .overview-row {
    @include media-breakpoint-down(xs) {
      flex-wrap: wrap;
    }
  }

  .overview-col:first-child {
    margin-left: 2rem;
    @include media-breakpoint-down(md) {
      margin-left: 0;
    }
  }

  .explore-btn {
    margin-top: 6rem;
    margin-bottom: 1rem;
  }

</style>
