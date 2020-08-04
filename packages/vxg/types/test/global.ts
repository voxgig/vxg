import Vue from 'vue'
import Vxg from 'vxg'

Vxg.config.silent = true

Vue.component('breakpoint', {
  created() {
    const name = this.$vxg.breakpoint.name
    const numbers: number[] = [
      this.$vxg.breakpoint.height,
      this.$vxg.breakpoint.width,
      this.$vxg.breakpoint.scrollBarWidth,
    ]
    const objects: Object[] = [
      this.$vxg.breakpoint.thresholds,
    ]
    const booleans: boolean[] = [
      this.$vxg.breakpoint.lg,
      this.$vxg.breakpoint.lgAndDown,
      this.$vxg.breakpoint.lgAndUp,
      this.$vxg.breakpoint.lgOnly,
      this.$vxg.breakpoint.md,
      this.$vxg.breakpoint.mdAndDown,
      this.$vxg.breakpoint.mdAndUp,
      this.$vxg.breakpoint.mdOnly,
      this.$vxg.breakpoint.sm,
      this.$vxg.breakpoint.smAndDown,
      this.$vxg.breakpoint.smAndUp,
      this.$vxg.breakpoint.smOnly,
      this.$vxg.breakpoint.xl,
      this.$vxg.breakpoint.xlOnly,
      this.$vxg.breakpoint.xs,
      this.$vxg.breakpoint.xsOnly,
    ]
  },
})

Vue.component('theme', {
  created() {
    // Can't do this, some components rely on the pre-defined values
    // this.$vxg.theme = { primary: 123 }

    Object.assign(this.$vxg.theme.themes.light, {
      primary: 123,
    })

    this.$vxg.theme.themes.light.primary = 132
  },
})
