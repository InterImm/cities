<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-md-12">
        <vuestic-alert type="success" :withCloseBtn="true">
          <span class="badge badge-pill badge-success">建筑命名征集中</span>
          在我们的地图上标注你的公司和房子：<a href="https://github.com/InterImm/martian-cities/issues/" target="_blank">Martian Cities @ GitHub</a>
          <i class="fa fa-close alert-close"></i>
        </vuestic-alert>
      </div>
    </div>


    <vuestic-widget class="no-padding no-v-padding">
      <vuestic-tabs :names="['城市发展计划', '城市发展报告']" ref="tabs">
        <div slot="城市发展计划">
          <features-tab></features-tab>
        </div>
        <div slot="城市发展报告">
          <data-visualisation-tab></data-visualisation-tab>
        </div>
      </vuestic-tabs>
    </vuestic-widget>

    <dashboard-info-widgets></dashboard-info-widgets>

    <dashboard-bottom-widgets></dashboard-bottom-widgets>

  </div>
</template>

<script>
  import VuesticWidget from '../vuestic-components/vuestic-widget/VuesticWidget'
  import VuesticAlert from '../vuestic-components/vuestic-alert/VuesticAlert'
  import DashboardInfoWidgets from './DashboardInfoWidgets'
  import VuesticTabs from '../vuestic-components/vuestic-tabs/VuesticTabs.vue'
  import UsersMembersTab from './users-and-members-tab/UsersMembersTab.vue'
  import SetupProfileTab from './setup-profile-tab/SetupProfileTab.vue'
  import FeaturesTab from './features-tab/FeaturesTab.vue'
  import DataVisualisationTab from './data-visualisation-tab/DataVisualisation.vue'
  import DashboardBottomWidgets from './DashboardBottomWidgets.vue'

  export default {
    name: 'dashboard',
    components: {
      DataVisualisationTab,
      VuesticWidget,
      VuesticAlert,
      DashboardInfoWidgets,
      VuesticTabs,
      UsersMembersTab,
      SetupProfileTab,
      FeaturesTab,
      DashboardBottomWidgets
    },
    meta: {
      title: '总览',
      sidemenu: 'true'
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../sass/_variables.scss";
</style>
