import { type Project, type Experience, type BlogPost } from "@/lib/types";

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
