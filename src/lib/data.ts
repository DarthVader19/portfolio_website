import { type Project, type Experience, type BlogPost, type User, type Education,type Testimonial } from "@/lib/types";
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiHtml5, SiCss3, SiGit, SiGithub, SiFigma } from "react-icons/si";


export const techStack = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Figma", icon: SiFigma },
  // Add more as needed
];

export const user: User = {
  name: "Ashutosh Yadav",
  title: "AI & Machine Learning Engineer",
  description: "Welcome to my portfolio. I specialize in building intelligent systems and leveraging data to create impactful AI/ML solutions.",
  skills: [
    "Natural Language Processing",
    "Computer Vision",
    "Deep Learning Frameworks",
    "Predictive Analytics",
  ],
};
export const education: Education[]  = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "XYZ University",
    period: "2015 - 2019",
    description: "Focused on AI and machine learning, with projects in NLP and computer vision.",
    technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn"],
  },
  {
    degree: "Master of Science in Artificial Intelligence",
    institution: "ABC Institute of Technology",
    period: "2020 - 2022",
    description: "Specialized in deep learning and its applications in various domains.",
    technologies: ["PyTorch", "NLP", "Computer Vision"],
  },
];
export const testimonials: Testimonial[] = [
  {
    name: "Dr. Jane Smith",
    role: "Professor of Computer Science",
    company: "XYZ University",
    imageUrl: "https://placehold.co/100x100.png",
    testimonial: "Ashutosh is an exceptional student with a deep understanding of AI concepts. His projects demonstrate both creativity and technical expertise. I highly recommend him for any AI-related role.",
  },
  {
    name: "Mr. John Doe",
    role: "Senior AI Engineer",
    company: "Tech Innovations Ltd.",
    imageUrl: "https://placehold.co/100x100.png",
    testimonial: "Ashutosh has a remarkable ability to solve complex problems using AI. His work on our NLP project significantly improved our product's performance. He is a valuable asset to any team.",
  },
  {
    name: "Ms. Emily Johnson",
    role: "Project Manager",
    company: "ABC Corp.",
    imageUrl: "https://placehold.co/100x100.png",
    testimonial: "Ashutosh is a highly skilled AI professional. His ability to manage projects and collaborate with cross-functional teams is impressive. I have no doubt he will excel in any endeavor he pursues.",
  },
];


export const projects: Project[] = [
  {
    id: "sentiment-analyzer",
    title: "Sentiment Analyzer",
    description: "A web app that uses NLP to analyze the sentiment of user-provided text, classifying it as positive, negative, or neutral.",
    technologies: ["Python", "Flask", "React", "NLTK"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    imageUrl: "https://placehold.co/600x400.png",
  },
  {
    id: "image-classifier",
    title: "Image Classifier",
    description: "A deep learning model trained to classify images into various categories with high accuracy, built with TensorFlow and Keras.",
    technologies: ["TensorFlow", "Keras", "Next.js", "Python"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    imageUrl: "https://placehold.co/600x400.png",
  },
  {
    id: "recommendation-engine",
    title: "Recommendation Engine",
    description: "A collaborative filtering-based recommendation system for e-commerce, suggesting products to users based on their browsing history.",
    technologies: ["PySpark", "MLlib", "FastAPI", "Docker"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    imageUrl: "https://placehold.co/600x400.png",
  },
    {
    id: "stock-predictor",
    title: "Stock Market Predictor",
    description: "Utilizes time-series analysis and LSTMs to predict future stock prices based on historical data.",
    technologies: ["PyTorch", "Pandas", "Scikit-learn", "Streamlit"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    imageUrl: "https://placehold.co/600x400.png",
  },
  {
    id: "chatbot",
    title: "Customer Service Chatbot",
    description: "An intelligent chatbot designed to handle customer queries, integrated with a knowledge base for real-time assistance.",
    technologies: ["Dialogflow", "Node.js", "Webhook"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    imageUrl: "https://placehold.co/600x400.png",
  },
  {
    id: "fraud-detection",
    title: "Fraud Detection System",
    description: "A machine learning model that identifies fraudulent transactions in real-time, helping to reduce financial losses.",
    technologies: ["XGBoost", "FastAPI", "React"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    imageUrl: "https://placehold.co/600x400.png",
  },
];

export const contactinfo = {
  email: "ashutosh@example.com",
  phone: "+1234567890",
  linkedin: "https://www.linkedin.com/in/ashutosh-yadav",
  github: "https://github.com/ashutosh-yadav",
  twitter: "https://twitter.com/ashutosh_yadav",
  website: "https://ashutosh-yadav.com"
};

export const experiences: Experience[] = [
    {
        role: "Senior AI Engineer",
        company: "Innovate AI",
        period: "2021 - Present",
        description: "Led the development of large-scale NLP models and computer vision systems. Mentored junior engineers and contributed to key architectural decisions.",
        technologies: ["PyTorch", "TensorFlow", "Kubernetes", "GCP", "MLFlow"]
    },
    {
        role: "Machine Learning Engineer",
        company: "DataDriven Inc.",
        period: "2019 - 2021",
        description: "Designed and deployed predictive models for customer churn and fraud detection. Optimized data pipelines for model training and inference.",
        technologies: ["Scikit-learn", "XGBoost", "Airflow", "AWS Sagemaker"]
    },
    {
        role: "Software Engineer Intern",
        company: "Tech Solutions",
        period: "Summer 2018",
        description: "Assisted in developing a recommendation engine and contributed to the backend services. Gained experience in agile development and CI/CD practices.",
        technologies: ["Python", "Flask", "SQL", "Docker", "Jenkins"]
    }
];

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "The Future of Generative AI",
        description: "A deep dive into the latest advancements in generative models and their potential impact on various industries.",
        date: "October 26, 2023",
        imageUrl: "https://placehold.co/600x400.png",
        url: "#"
    },
    {
        id: "2",
        title: "Fine-Tuning LLMs for Custom Tasks",
        description: "A practical guide on how to fine-tune large language models for specific applications with your own data.",
        date: "September 15, 2023",
        imageUrl: "https://placehold.co/600x400.png",
        url: "#"
    },
    {
        id: "3",
        title: "From Pixels to Predictions: A CV Primer",
        description: "Exploring the fundamentals of computer vision, from basic image processing to complex object detection models.",
        date: "August 02, 2023",
        imageUrl: "https://placehold.co/600x400.png",
        url: "#"
    }
];
