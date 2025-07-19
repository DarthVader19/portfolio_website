export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  imageUrl: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
};

export type BlogPost = {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  url: string;
};
