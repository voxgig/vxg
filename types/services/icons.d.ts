// Types
import { Component } from 'vue'

export interface Icons extends IconsOptions {
  iconfont: Iconfont
  values: VxgIcons
}

export type Iconfont = 'mdi' | 'mdiSvg' | 'md' | 'fa' | 'faSvg' | 'fa4'

export interface IconsOptions {
  /**
   * Select a base icon font to use. Note that none of these are included, you must install them yourself
   *
   * md: <a href="https://material.io/icons">material.io</a> (default)
   * mdi: <a href="https://materialdesignicons.com">MDI</a>
   * fa: <a href="https://fontawesome.com/get-started/web-fonts-with-css">FontAwesome 5</a>
   * fa4: <a href="">FontAwesome 4</a> TODO: link
   * faSvg: <a href="https://fontawesome.com/how-to-use/on-the-web/using-with/vuejs">FontAwesome SVG</a>
   */
  iconfont?: Iconfont
  values?: Partial<VxgIcons>
}

export type VxgIconComponent = {
  component: Component | string
  props?: object
}

export type VxgIcon = string | VxgIconComponent

export interface VxgIcons {
  complete: VxgIcon
  cancel: VxgIcon
  close: VxgIcon
  delete: VxgIcon
  clear: VxgIcon
  success: VxgIcon
  info: VxgIcon
  warning: VxgIcon
  error: VxgIcon
  prev: VxgIcon
  next: VxgIcon
  checkboxOn: VxgIcon
  checkboxOff: VxgIcon
  checkboxIndeterminate: VxgIcon
  delimiter: VxgIcon
  sort: VxgIcon
  expand: VxgIcon
  menu: VxgIcon
  subgroup: VxgIcon
  dropdown: VxgIcon
  radioOn: VxgIcon
  radioOff: VxgIcon
  edit: VxgIcon
  ratingEmpty: VxgIcon
  ratingFull: VxgIcon
  ratingHalf: VxgIcon
  loading: VxgIcon
  first: VxgIcon
  last: VxgIcon
  unfold: VxgIcon
  [name: string]: VxgIcon
}
