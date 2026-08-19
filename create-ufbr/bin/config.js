import pc from "picocolors";

export const LANGUAGES = {
  js: pc.yellowBright("JavaScript"),
  ts: pc.blueBright("TypeScript"),
  jsx: pc.cyanBright("JSX"),
  tsx: pc.magentaBright("TSX"),
};

export const PRESETS = [
  { name: "Ziko", label: pc.blueBright("ziko"), languages : ['js', 'ts', 'jsx', 'tsx'] },
  { name: "react", label: pc.cyan("React"), languages : ['jsx', 'tsx'] },
  { name: "vue", label: pc.green("Vue"), languages : ['js', 'ts']},
  { name: "solid", label: pc.blue("Solid"), languages : ['jsx', 'tsx'] },
  { name: "preact", label: pc.magenta("Preact"), languages : ['jsx', 'tsx'] },
  { name: "svelte", label: pc.red("Svelte"), languages : ['js', 'ts'] },
  { name: "van", label: pc.redBright("Van"), languages : ['js', 'ts', 'jsx', 'tsx'] },
];
