import lazyLoading from './lazyLoading'

export default {
  name: 'Dashboard',
  path: '/dashboard',
  component: lazyLoading('dashboard/Dashboard'),
  meta: {
    default: true,
    title: '总览',
    sidemenu: 'true',
    iconClass: 'vuestic-icon vuestic-icon-dashboard'
  }
}
