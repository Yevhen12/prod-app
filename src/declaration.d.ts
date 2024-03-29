/* eslint-disable @typescript-eslint/naming-convention */
declare module '*.scss' {
  type IClassNames = Record<string, string>;
  const classNames: IClassNames;
  export = classNames;
}

type ProjectType = 'frontend' | 'storybook' | 'jest';

declare module '*.svg' {
  import type React from 'react';
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.jpg';

declare const __IS_DEV__: boolean;
declare const __PROJECT__: ProjectType;
declare const __API__: string;

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

type OptionalRecord<K extends string | number | symbol, T> = { [P in K]?: T };
