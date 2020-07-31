/*
import * as components from './components'
import * as directives from './directives'
*/

import Vxg from './framework'


export default Vxg

const install = Vxg.install

Vxg.install = (Vue, args) => {
  install.call(Vxg, Vue, {
    //components,
    //directives,
    ...args,
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vxg)
}


