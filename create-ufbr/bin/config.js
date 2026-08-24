import pc from "picocolors";

export const LANGUAGES = {
  js: pc.yellowBright("JavaScript"),
  ts: pc.blueBright("TypeScript"),
  jsx: pc.cyanBright("JSX"),
  tsx: pc.magentaBright("TSX"),
};

export const PRESETS = [
  // { name: "Ziko", label: pc.blueBright("ziko"), languages : ['js', 'jsx'] },
  { name: "react", label: pc.cyan("React"), languages : ['jsx'] },
  { name: "vue", label: pc.green("Vue"), languages : ['js']},
  { name: "solid", label: pc.blue("Solid"), languages : ['jsx'] },
  { name: "preact", label: pc.magenta("Preact"), languages : ['jsx'] },
  { name: "svelte", label: pc.red("Svelte"), languages : ['js'] },
  // { name: "van", label: pc.redBright("Van"), languages : ['js', 'jsx'] },
];
