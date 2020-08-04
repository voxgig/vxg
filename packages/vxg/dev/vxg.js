import Vue from 'vue'
import Vxg from 'vxg'
import * as locales from '../src/locale'

Vue.use(Vxg)

export default new Vxg({
  lang: {
    locales,
  },
})
