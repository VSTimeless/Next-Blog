// Global type declarations to fix namespace errors

declare namespace NodeJS {
  interface Process {
    browser: boolean;
  }
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    [key: string]: string | undefined;
  }
}

// Fix namespace path errors
declare module '*/Next-Blog-main/*' {
  const content: any;
  export default content;
  export * from content;
} 