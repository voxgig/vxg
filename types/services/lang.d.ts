export interface Lang {
  locales: LangLocales
  current: string
  t: LangTranslator
}

export interface LangOptions {
  locales?: LangLocales
  current?: string
  t?: LangTranslator
}

// TODO: complete list of keys?
export interface VxgLocale {
  [key: string]: VxgLocale | string
}

export type LangLocales = Record<string, VxgLocale>
export type LangTranslator = (key: string, ...params: Array<string | number>) => string
