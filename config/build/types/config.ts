export type BuildMode = 'development' | 'production'

export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string
  locales: string
  buildLocales: string
}

export type ProjectType = 'frontend' | 'storybook' | 'jest'

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
  port: number
  project: ProjectType
  apiUrl: string
}

export interface BuildEnv {
  mode: BuildMode
  port: number
  apiUrl: string
}
