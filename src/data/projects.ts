export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Jingu • Kong Admin UI",
    techs: ["Kong", "SvelteKit", "Rust", "Tauri"],
    link: "https://github.com/imbagila/jingu",
  },
  {
    title: "Treant • Mongo Shard Visualizer",
    techs: ["Mongo", "SvelteKit", "Rust", "Tauri"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
