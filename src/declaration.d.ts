/* eslint-disable @typescript-eslint/naming-convention */
declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare module '*.svg' {
  import type React from 'react'
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  export default content
}
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.jpg'

declare const __IS_DEV__: boolean

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T
