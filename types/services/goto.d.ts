// Types
import Vue from 'vue'

type VxgGoToTarget = number | string | HTMLElement | Vue

export type VxgGoToEasing =
  ((t: number) => number) |
  'linear' |
  'easeInQuad' |
  'easeOutQuad' |
  'easeInOutQuad' |
  'easeInCubic' |
  'easeOutCubic' |
  'easeInOutCubic' |
  'easeInQuart' |
  'easeOutQuart' |
  'easeInOutQuart' |
  'easeInQuint' |
  'easeOutQuint' |
  'easeInOutQuint'

export interface GoToOptions {
  container?: string | HTMLElement | Vue
  duration?: number
  offset?: number
  easing?: VxgGoToEasing
  appOffset?: boolean
}
