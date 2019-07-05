import store from '@/store'

export default {
  async install (Vue, options) {
    try {
      Vue.prototype.$store = store
    } catch (error) {
      console.error('[Bootstrap:install]', error)
    }
  }
}
