import type { VNode } from "vue"
export interface SystemMenuItem {
  key: string
  label: string
  title?: string
  icon?: string
  children?: SystemMenuItem[]
}
export interface UIMenuItem extends Pick<SystemMenuItem,'key'|'label'|'title'> {
  icon?: VNode
  children?: UIMenuItem[]
}
export enum LayoutCategory {
  horizontal = 'horizontal',
  vertical = 'vertical'
}
export type LayoutType = keyof typeof LayoutCategory
export enum ThemeCategory {
  light = 'light',
  dark = 'dark'
}
export type themeType = keyof typeof ThemeCategory
export interface SystemThemeCfg {
  projectName: string
  colorPrimary: string
  headerBgColor: string
  headerFontColor: string
  layoutMode: LayoutType
  watermarkVisible: boolean
  watermarkText: string
  menuTheme: themeType
}
