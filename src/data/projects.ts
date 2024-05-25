export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Kantonq • Simple Money Management",
    techs: ["Financial", "SvelteKit", "Go"],
    link: "https://github.com/imbagila/kantonq",
  },
  {
    title: "Jingu • Kong Admin UI",
    techs: ["Kong", "SvelteKit", "Rust"],
    link: "https://github.com/imbagila/jingu",
  },
  {
    title: "Treant • Mongo Shard Visualizer",
    techs: ["Mongo", "SvelteKit", "Rust"],
    link: "https://github.com/imbagila/treant",
  },
  {
    title: "docusaurus-decentralized-docs",
    techs: ["Library", "Docusaurus", "TypeScript"],
    link: "https://github.com/imbagila/docusaurus-decentralized-docs",
  },
  {
    title: "Zero • Go Project Boilerplate",
    techs: ["Go"],
    link: "https://github.com/imbagila/zero",
    isComingSoon: true,
  },
];

export default projects;
