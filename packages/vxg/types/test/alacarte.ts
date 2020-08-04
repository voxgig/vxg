import Vue from 'vue'

import { install } from 'vxg/es5/install'
import VBtn from 'vxg/es5/components/VBtn'
import * as VCard from 'vxg/es5/components/VCard'
import { Ripple } from 'vxg/es5/directives'
import * as directives from 'vxg/es5/directives'

install(Vue, {
  components: {
    VBtn,
    ...VCard
  },
  directives: {
    ...directives
  }
})

Vue.extend({
  components: {
    VBtn,
    ...VCard
  },
  directives: {
    Ripple
  }
})

VBtn.extend()

Vue.extend({
  extends: VBtn,
})
