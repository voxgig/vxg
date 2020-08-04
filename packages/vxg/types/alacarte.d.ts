declare module 'vxg/es5/install' {
  import { VueConstructor } from 'vue'

  const install: (Vue: VueConstructor, args: {}) => void

  export { install }
}
declare module 'vxg/es5/components/Vxg' {
  import Vxg from 'vxg'

  export default Vxg
}

declare module 'vxg/es5/components/*' {
  import { ComponentOrPack } from 'vxg'
  import { VueConstructor } from 'vue'

  const VxgComponent: {
    default: ComponentOrPack & VueConstructor
    [key: string]: ComponentOrPack & VueConstructor
  }

  export = VxgComponent
}

declare module 'vxg/es5/directives' {
  import { DirectiveOptions } from 'vue'

  const ClickOutside: DirectiveOptions
  const Intersect: DirectiveOptions
  const Mutate: DirectiveOptions
  const Resize: DirectiveOptions
  const Ripple: DirectiveOptions
  const Scroll: DirectiveOptions
  const Touch: DirectiveOptions

  export {
    ClickOutside,
    Intersect,
    Mutate,
    Ripple,
    Resize,
    Scroll,
    Touch
  }
}
