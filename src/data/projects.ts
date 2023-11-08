export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  // {
  //   title: "Dictionary App",
  //   techs: ["ReactJS (NextJS)", "react-query", "zod"],
  //   link: "https://github.com/MaeWolff/dictionary-app",
  // },
  {
    title: "Jingu • Kong Admin UI",
    techs: ["Kong", "SvelteKit", "Rust", "Tauri"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
