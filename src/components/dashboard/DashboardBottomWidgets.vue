<template>
  <div class="row bottom-widgets">
    <div class="col-md-6 d-flex">
      <vuestic-widget>
         <p>
         这是星际移民中心正在进行的城市建设。我们计划使用 Sketchup 来完成火星主要城市的三维建模，并且开放城市地图，以供大家使用。
         </p>
         <p>
         目前的计划是：
         </p>
            <ul class="vue-unordered">
               <li>
               构建街道和主要建筑；
               </li>
               <li>
               开放地图供大家认领自己的地盘并且提供自己的企业建筑设想；
               </li>
               <li>
               为大家建设企业建筑。
               </li>
            </ul>
      </vuestic-widget>
    </div>
    <div class="col-md-6 d-flex">
      <vuestic-widget>
        <p>
        相关链接：
        </p>

        <ul class="vue-unordered">
           <li>
           <a class="btn btn-micro" href="http://interimm.org">星际移民中心：interimm.org</a>
           </li>
           <li>
           <a class="btn btn-micro" href="https://github.com/InterImm/martian-cities">城市建设代码：github.com/InterImm/martian-cities</a>
           </li>
        </ul>

        <p>
        开源工具：
        </p>
        <ul class="vue-unordered">
        <li>
        <a class="btn btn-micro" href="https://github.com/epicmaxco/vuestic-admin">vuestic-admin, MIT License</a>
        </li>
        </ul>
      </vuestic-widget>
    </div>
  </div>
</template>

<script>
  import VuesticWidget from '../vuestic-components/vuestic-widget/VuesticWidget'

  export default {
    name: 'dashboard-bottom-widgets',
    components: {
      VuesticWidget
    }
  }
</script>

<style lang="scss" scoped>

  .bottom-widgets {
    > div[class^='col'] {
      & > div {
        width: 100%;
      }
    }
  }
</style>
