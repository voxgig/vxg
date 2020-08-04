// Contracts
import { VxgServiceContract } from 'vxg/types/services/index'

// Types
import Vue from 'vue'

export class Service implements VxgServiceContract {
  framework = {}

  init(root: Vue, ssrContext?: object) { }
}
