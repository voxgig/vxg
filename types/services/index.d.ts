// Types
import Vue from 'vue'
import Framework from '../'
import { VxgPreset } from 'vxg/types/services/presets'

export interface VxgServiceContract {
  framework: Record<string, VxgServiceContract>
  init: (root: Vue, ssrContext?: object) => void
}

export interface VxgService {
  property: string
  new(
    preset: VxgPreset,
    parent: InstanceType<typeof Framework>
  ): VxgServiceContract
}
