type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "roid.rabbani@gmail.com",
  title: "Hi, I'm imbagila 👋",
  profile: "/profile.webp",
  description:
    "I'm an *Indonesian software engineer* with 5+ years of experience, currently working with *Go and PHP* in the Back-End field. I'm also exploring Front-End, DevOps, and Infra stuff. Beyond programming, I'm into DotA and anime.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/imbagila",
    },
    {
      label: "Instagram",
      link: "https://instagram.com/imbagila",
    },
    {
      label: "GitHub",
      link: "https://github.com/imbagila",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/roidrabbani/",
    },
  ],
};

export default presentation;
