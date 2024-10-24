// src/vite-env.d.ts
/// <reference types="vite/client" />

//ADDED THIS

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

//The vite-env.d.ts file is a TypeScript declaration file that provides type definitions for the import.meta.env properties used in Vite projects