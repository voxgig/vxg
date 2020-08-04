import OurVue, { VueConstructor } from 'vue'
import { VxgUseOptions } from 'vxg/types'
import { consoleError } from './util/console'

export function install(Vue: VueConstructor, args: VxgUseOptions = {}) {
  if ((install as any).installed) return
  (install as any).installed = true

  if (OurVue !== Vue) {
    consoleError('Multiple instances of Vue detected\nSee https://github.com/vxgjs/vxg/issues/4068\n\nIf you\'re seeing "$attrs is readonly", it\'s caused by this')
  }

  const components = args.components || {}
  const directives = args.directives || {}

  for (const name in directives) {
    const directive = directives[name]

    Vue.directive(name, directive)
  }

  (function registerComponents(components: any) {
    if (components) {
      for (const key in components) {
        const component = components[key]
        if (component && !registerComponents(component.$_vxg_subcomponents)) {
          Vue.component(key, component as typeof Vue)
        }
      }
      return true
    }
    return false
  })(components)

  // Used to avoid multiple mixins being setup
  // when in dev mode and hot module reload
  // https://github.com/vuejs/vue/issues/5089#issuecomment-284260111
  if (Vue.$_vxg_installed) return
  Vue.$_vxg_installed = true

  Vue.mixin({
    beforeCreate() {
      const options = this.$options as any

      if (options.vxg) {
        options.vxg.init(this, this.$ssrContext)
        this.$vxg = Vue.observable(options.vxg.framework)
      } else {
        this.$vxg = (options.parent && options.parent.$vxg) || this
      }
    },
    beforeMount() {
      // @ts-ignore
      if (this.$options.vxg && this.$el && this.$el.hasAttribute('data-server-rendered')) {
        // @ts-ignore
        this.$vxg.isHydrating = true
        // @ts-ignore
        this.$vxg.breakpoint.update(true)
      }
    },
    mounted() {
      // @ts-ignore
      if (this.$options.vxg && this.$vxg.isHydrating) {
        // @ts-ignore
        this.$vxg.isHydrating = false
        // @ts-ignore
        this.$vxg.breakpoint.update()
      }
    },
  })
}
