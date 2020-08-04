// Styles
import './VxgApp.sass'

// Mixins
import Themeable from '../../mixins/themeable'

// Utilities
import mixins from '../../util/mixins'

/* @vue/component */
export default mixins(
  Themeable
).extend({
  name: 'v-app',

  props: {
    dark: {
      type: Boolean,
      default: undefined,
    },
    id: {
      type: String,
      default: 'app',
    },
    light: {
      type: Boolean,
      default: undefined,
    },
  },

  computed: {
    isDark(): boolean {
      return this.$vxg.theme.dark
    },
  },

  beforeCreate() {
    if (!this.$vxg || (this.$vxg === this.$root as any)) {
      throw new Error('Vxg is not properly initialized, see https://vxgjs.com/getting-started/quick-start#bootstrapping-the-vxg-object')
    }
  },

  render(h) {
    const wrapper = h('div', { staticClass: 'v-application--wrap' }, this.$slots.default)

    return h('div', {
      staticClass: 'v-application',
      class: {
        'v-application--is-rtl': this.$vxg.rtl,
        'v-application--is-ltr': !this.$vxg.rtl,
        ...this.themeClasses,
      },
      attrs: { 'data-app': true },
      domProps: { id: this.id },
    }, [wrapper])
  },
})
