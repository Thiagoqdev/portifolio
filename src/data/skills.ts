import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: {
      pt: "IA Generativa & LLM",
      en: "Generative AI & LLM",
    },
    icon: "Brain",
    gridSpan: "wide",
    skills: [
      { name: "LLM", icon: "llm", level: 5 },
      { name: "RAG", icon: "rag", level: 5 },
      { name: "Embeddings", icon: "embeddings", level: 4 },
      { name: "IA Generativa", icon: "genai", level: 5 },
      { name: "Python", icon: "python", level: 5 },
      { name: "Langchain", icon: "langchain", level: 4 },
    ],
  },
  {
    title: {
      pt: "Backend",
      en: "Backend",
    },
    icon: "Server",
    gridSpan: "wide",
    skills: [
      { name: "Python", icon: "python", level: 5 },
      { name: "Java", icon: "java", level: 4 },
      { name: "FastAPI", icon: "fastapi", level: 5 },
      { name: "Django", icon: "django", level: 4 },
      { name: "Spring Boot", icon: "springboot", level: 4 },
      { name: "Node.js", icon: "nodejs", level: 4 },
      { name: "REST APIs", icon: "api", level: 5 },
      { name: "JavaScript", icon: "javascript", level: 4 },
      { name: "SQL", icon: "sql", level: 5 },
    ],
  },
  {
    title: {
      pt: "Frontend & Mobile",
      en: "Frontend & Mobile",
    },
    icon: "Monitor",
    gridSpan: "normal",
    skills: [
      { name: "Next.js", icon: "nextjs", level: 4 },
      { name: "React", icon: "react", level: 4 },
      { name: "React Native", icon: "reactnative", level: 4 },
      { name: "TypeScript", icon: "typescript", level: 4 },
      { name: "Tailwind CSS", icon: "tailwindcss", level: 4 },
    ],
  },
  {
    title: {
      pt: "Cloud & DevOps",
      en: "Cloud & DevOps",
    },
    icon: "Cloud",
    gridSpan: "normal",
    skills: [
      { name: "Azure", icon: "azure", level: 5 },
      { name: "AWS", icon: "aws", level: 4 },
      { name: "Docker", icon: "docker", level: 4 },
      { name: "CI/CD", icon: "cicd", level: 4 },
      { name: "Observabilidade", icon: "observability", level: 4 },
    ],
  },
  {
    title: {
      pt: "Banco de Dados",
      en: "Databases",
    },
    icon: "Database",
    gridSpan: "normal",
    skills: [
      { name: "PostgreSQL", icon: "postgresql", level: 5 },
      { name: "MySQL", icon: "mysql", level: 4 },
      { name: "MongoDB", icon: "mongodb", level: 4 },
      { name: "NoSQL", icon: "nosql", level: 4 },
    ],
  },
  {
    title: {
      pt: "Metodologias",
      en: "Methodologies",
    },
    icon: "Workflow",
    gridSpan: "normal",
    skills: [
      { name: "Scrum", icon: "scrum", level: 5 },
      { name: "Agile", icon: "agile", level: 5 },
      { name: "Testes Automatizados", icon: "testing", level: 4 },
      { name: "Clean Architecture", icon: "architecture", level: 4 },
    ],
  },
];
