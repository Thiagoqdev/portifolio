import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "rag-document-assistant",
    title: {
      pt: "Assistente de Documentos com RAG",
      en: "RAG Document Assistant",
    },
    description: {
      pt: "Sistema de Retrieval-Augmented Generation para consulta inteligente de documentos corporativos. Utiliza embeddings, busca vetorial e LLMs para respostas contextualizadas.",
      en: "Retrieval-Augmented Generation system for intelligent corporate document querying. Uses embeddings, vector search, and LLMs for contextualized responses.",
    },
    image: "/images/projects/rag-assistant.png",
    tags: ["Python", "FastAPI", "LLM", "RAG", "Embeddings", "Azure"],
    category: "ai-ml",
    github: "https://github.com/Thiagoqdev",
    featured: true,
  },
  {
    slug: "data-pipeline-platform",
    title: {
      pt: "Plataforma de Pipelines de Dados",
      en: "Data Pipeline Platform",
    },
    description: {
      pt: "Plataforma para estruturação de pipelines automatizados de extração, transformação e análise de dados com integração Azure e observabilidade.",
      en: "Platform for structuring automated data extraction, transformation, and analysis pipelines with Azure integration and observability.",
    },
    image: "/images/projects/data-pipeline.png",
    tags: ["Python", "Azure", "FastAPI", "Docker", "CI/CD"],
    category: "backend",
    github: "https://github.com/Thiagoqdev",
    featured: true,
  },
  {
    slug: "fullstack-saas-app",
    title: {
      pt: "Aplicação SaaS Full Stack",
      en: "Full Stack SaaS Application",
    },
    description: {
      pt: "Aplicação web completa com Next.js e React Native, integrando back-end Node.js, bancos SQL/NoSQL e metodologia Scrum para entregas ágeis.",
      en: "Complete web application with Next.js and React Native, integrating Node.js back-end, SQL/NoSQL databases, and Scrum methodology for agile deliveries.",
    },
    image: "/images/projects/saas-app.png",
    tags: ["Next.js", "React Native", "Node.js", "PostgreSQL", "MongoDB"],
    category: "fullstack",
    github: "https://github.com/Thiagoqdev",
    featured: true,
  },
  {
    slug: "spring-boot-microservices",
    title: {
      pt: "Microsserviços com Spring Boot",
      en: "Spring Boot Microservices",
    },
    description: {
      pt: "Arquitetura de microsserviços em Java/Spring Boot com testes automatizados, documentação Swagger e práticas de engenharia de software.",
      en: "Microservices architecture in Java/Spring Boot with automated testing, Swagger documentation, and software engineering practices.",
    },
    image: "/images/projects/microservices.png",
    tags: ["Java", "Spring Boot", "Docker", "PostgreSQL", "Swagger"],
    category: "backend",
    github: "https://github.com/Thiagoqdev",
    featured: false,
  },
  {
    slug: "ai-text-analysis",
    title: {
      pt: "Análise de Texto com IA",
      en: "AI Text Analysis",
    },
    description: {
      pt: "Ferramenta de análise e classificação de textos utilizando modelos de linguagem, embeddings e técnicas de NLP para extração de insights automatizados.",
      en: "Text analysis and classification tool using language models, embeddings, and NLP techniques for automated insight extraction.",
    },
    image: "/images/projects/text-analysis.png",
    tags: ["Python", "LLM", "NLP", "FastAPI", "Embeddings"],
    category: "ai-ml",
    github: "https://github.com/Thiagoqdev",
    featured: false,
  },
  {
    slug: "rest-api-django",
    title: {
      pt: "REST API Escalável com Django",
      en: "Scalable REST API with Django",
    },
    description: {
      pt: "API REST robusta com Django, autenticação JWT, rate limiting, testes automatizados e deploy com Docker em ambiente cloud.",
      en: "Robust REST API with Django, JWT authentication, rate limiting, automated tests, and Docker deployment in cloud environment.",
    },
    image: "/images/projects/django-api.png",
    tags: ["Python", "Django", "Docker", "PostgreSQL", "AWS"],
    category: "backend",
    github: "https://github.com/Thiagoqdev",
    featured: false,
  },
];
