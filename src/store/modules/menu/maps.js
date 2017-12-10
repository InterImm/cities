import lazyLoading from './lazyLoading'

export default {
  name: 'Maps',
  meta: {
    expanded: false,
    title: '城市',
    sidemenu: 'true',
    iconClass: 'vuestic-icon vuestic-icon-maps'
  },

  children: [
    {
      name: 'Procyon',
      path: '/maps/procyon',
      component: lazyLoading('maps/procyon/LeafletMapsPage'),
      meta: {
        title: '南河城',
        sidemenu: 'true'
      }
    }
  ]
}
