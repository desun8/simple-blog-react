/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

// For .css imports
// declare module '*.css' {
//   const content: string;
//   export default content;
// }

// For .module.css imports
declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
