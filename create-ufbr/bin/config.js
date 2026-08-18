import pc from "picocolors";

export const TEMPLATES = {
  ziko :  { 
    js : 'ziko-js', 
    ts : 'ziko-ts' , 
    jsx : 'ziko-jsx', 
    tsx : 'ziko-tsx' 
  },
  react :  { jsx : 'react-jsx', tsx : 'react-tsx' },
  vue :  { jsx : 'vue-js', tsx : 'vue-ts' },
  svelte :  { jsx : 'svelte-js', tsx : 'svelte-ts' },
  solid :  { jsx : 'solid-jsx', tsx : 'solid-tsx' },
  preact :  { jsx : 'preact-jsx', tsx : 'preact-tsx' },
  van :  { 
    js : 'van-js', 
    ts : 'van-ts' , 
    jsx : 'van-jsx', 
    tsx : 'van-tsx' 
  },
};

// export const TEMPLATES = {
//   react: { js: "react-js", ts: "react-ts", jsx: "react-jsx", tsx: "react-tsx" },
//   fbr: { js: "fbr-js", ts: "fbr-ts", jsx: "fbr-jsx" },
//   ssr: { js: "ssr-js", ts: "ssr-ts" },
// };

export const LANGUAGES = {
  js: pc.yellowBright("JavaScript"),
  ts: pc.blueBright("TypeScript"),
  jsx: pc.cyanBright("JSX"),
  tsx: pc.magentaBright("TSX"),
};

export const PROJECT_TYPES = [
  { label: "React", name: "react" },
  { label: "Vue", name: "vue" },
  { label: "Solid", name: "solid" },
  { label: "Preact", name: "preact" },
  { label: "Svelte", name: "svelte" },
  { label: "Van", name: "van" },
];
