import Vue from 'vue'

import Vxg, {
  VBtn,
  VCard,
  VCardText,
} from 'vxg/lib'

import * as directives from 'vxg/lib/directives'

Vxg.install(Vue)

Vxg.install(Vue, {})

Vxg.install(Vue, {
  components: {
    VBtn,
    VCard,
    VCardText,
  },
  directives,
})

/* eslint-disable-next-line no-new */
new Vue({
  vxg: new Vxg(),
})

VBtn.extend()

Vue.extend({
  extends: VBtn,
})
