export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  imageUrl: string;
};

export type User = {
  name: string;
  title: string;
  description: string;
  skills: string[];
};
export type Education = {
  degree: string;
  institution: string;
  period: string;
  description: string;
  technologies: string[];
};
export type Testimonial = {
  name: string;
  role: string;
  company: string;
  imageUrl: string;
  testimonial: string;
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
