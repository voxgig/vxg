import { install } from './install'

// Types
import Vue from 'vue'
import {
  UserVxgPreset,
  VxgPreset,
} from 'vxg/types/services/presets'
import {
  VxgService,
  VxgServiceContract,
} from 'vxg/types/services'

// Services
import * as services from './services'

export default class Vxg {
  static install = install

  static installed = false

  static version = __VXG_VERSION__

  static config = {
    silent: false,
  }

  public framework: Dictionary<VxgServiceContract> = {
    isHydrating: false,
  } as any

  public installed: string[] = []

  public preset = {} as VxgPreset

  public userPreset: UserVxgPreset = {}

  constructor(userPreset: UserVxgPreset = {}) {
    this.userPreset = userPreset

    this.use(services.Presets)
    this.use(services.Application)
    this.use(services.Lang)
    this.use(services.Theme)
  }

  // Called on the new vxg instance
  // bootstrap in install beforeCreate
  // Exposes ssrContext if available
  init(root: Vue, ssrContext?: object) {
    this.installed.forEach(property => {
      const service = this.framework[property]

      service.framework = this.framework

      service.init(root, ssrContext)
    })

    // rtl is not installed and
    // will never be called by
    // the init process
    this.framework.rtl = Boolean(this.preset.rtl) as any
  }

  // Instantiate a VxgService
  use(Service: VxgService) {
    const property = Service.property

    if (this.installed.includes(property)) return

    // TODO maybe a specific type for arg 2?
    this.framework[property] = new Service(this.preset, this as any)
    this.installed.push(property)
  }
}
