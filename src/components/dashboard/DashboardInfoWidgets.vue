<template>
  <div class="row dashboard-info-widgets">
    <div class="col-md-6 col-xl-4">
      <vuestic-widget class="info-widget">
        <div class="info-widget-inner">
          <div class="stats">
            <div class="stats-number">
              Sketchup Make
            </div>
            <div class="stats-title">工具</div>
          </div>
        </div>
      </vuestic-widget>
    </div>
    <div class="col-md-6 col-xl-4">
      <vuestic-widget class="info-widget">
        <div class="info-widget-inner">
          <div class="stats">
            <div class="stats-number">
              南河城
            </div>
            <div class="stats-title">正在建设城市</div>
          </div>
        </div>
      </vuestic-widget>
    </div>
    <div class="col-md-6 col-xl-4">
      <vuestic-widget class="info-widget">
        <div class="info-widget-inner">
          <div class="info-widget-inner has-chart">
            <div class="stats">
              <div class="stats-number">
                中心区域
              </div>
              <div class="stats-title">城市进程</div>
            </div>
            <div class="chart-container">
              <progress-bar type="circle" ref="circleProgress" :colorName="'white'" :backgroundColorName="'info'"
                            :startColorName="'info'"></progress-bar>
            </div>
          </div>
        </div>
      </vuestic-widget>
    </div>

  </div>
</template>

<script>
  import ProgressBar from '../../components/vuestic-components/vuestic-progress-bar/VuesticProgressBar'

  export default {
    name: 'dashboard-info-widgets',
    components: {
      ProgressBar
    },

    mounted () {
      this.$refs.circleProgress.$data.value = 10
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../sass/_variables.scss";

  .stats-number, .stats-title {
    line-height: 1;
  }

  .info-widget-inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;

    &.has-chart {
      justify-content: space-between;
    }

    .stats {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }

  .stats-number {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 2.625rem;
    margin-bottom: 0.5rem;

    .stats-icon {
      font-size: 1.5625rem;
      position: absolute;
      top: 0.625rem;
      left: -1.25rem;

      &.icon-wide {
        left: -1.875rem;
      }
    }
  }

</style>
