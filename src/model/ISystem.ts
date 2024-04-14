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
export interface ResMenuItem {
  id?:string;
  label: string;
  pid?: string;
  menuType: 'app' | 'directory';
  desc?: string;
  icon?: string;
  sortNum: number;
  address?:string;
  // table 预置列表爷 page 预置设计页面 front 前端代码页面 form 表单页面
  type: 'table' | 'page' | 'front' | 'form';
  openType: '_blank' | '_self';
}
export interface ResMenuDict {
  id:string,
  label:string,
  children:ResMenuDict[]
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
