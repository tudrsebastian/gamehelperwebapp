/// <reference types="vite/client" />

declare namespace NodeJS {
  export interface ProcessEnv {
    VITE_HOST: string
  }
}

interface ImportMetaEnv {
  readonly VITE_HOST: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
