import type { Language } from './translations';

export const getCvData = (lang: Language = 'pt') => {
  const data = {
    pt: {
      personalInfo: {
        name: "Geandro Leite de Ararujo",
        title: "Instrutor Líder de Desenvolvimento FullStack na Generation Brasil",
        location: "São Paulo, SP – Brasil",
        email: "geandro_a@hotmail.com",
        whatsapp: "5511976320011",
        linkedin: "https://www.linkedin.com/in/geandro-ara%C3%BAjo/",
        github: "https://github.com/geandrol",
        portfolioGithub: "https://github.com/geandrol/portf-lio-geandro",
        cvUrl: "",
        summary: "Profissional com mais de 04 anos de experiência em desenvolvimento de software e liderança técnica. Atua na interseção entre tecnologia, educação e transformação digital, com foco em sistemas escaláveis, alta disponibilidade e formação de equipes de alto desempenho."
      },
      skills: {
        frontend: [
          { name: "React", level: 70 },
          { name: "Angular", level: 50 },
          { name: "TypeScript", level: 70 },
          { name: "JavaScript", level: 70 }
        ],
        backend: [
          { name: "JavaScript / TypeScript", level: 70 },
          { name: "Java / Spring Boot", level: 60 },
          { name: "Node.js", level: 70 },
          { name: "Python", level: 30 }
        ],
        devops: [
          { name: "Docker", level: 40 },
          { name: "Kubernetes", level: 40 },
          { name: "AWS", level: 40 },
          { name: "Google Cloud", level: 40 },
          { name: "CI/CD (Jenkins)", level: 40 }
        ],
        architecture: [
          { name: "Microsserviços", level: 50 },
          { name: "APIs REST", level: 90 },
          { name: "SRE & Observabilidade", level: 20 },
          { name: "Event-Driven", level: 20 }
        ],
        dataAnalytics: [
          { name: "Power BI", level: 50 },
          { name: "SQL Server", level: 70 },
          { name: "PostgreSQL", level: 70 }
        ],
        rpaAutomation: [
          { name: "Integração de APIs", level: 80 },
          { name: "Automação com Python", level: 40 }
        ],
        curriculumDesign: [
          { name: "Coordenação de Projetos", level: 70 },
          { name: "Planejamento Estratégico", level: 80 },
          { name: "Gestão de Processos", level: 80 },
          { name: "Gestão de OKRs e KPIs", level: 75 },
          { name: "Comunicação Interfuncional", level: 80 }
        ],
        techInstruction: [
          { name: "Mentoria Técnica", level: 90 },
          { name: "Comunicação e Didática", level: 90 },
          { name: "Code Review Educativo", level: 90 },
          { name: "Aprendizagem Ativa", level: 90 }
        ],
        leadershipManagement: [
          { name: "Liderança de Times Técnicos", level: 95 },
          { name: "Treinamento de Equipes", level: 95 },
          { name: "Gestão de KPIs", level: 80 },
          { name: "Alinhamento Estratégico", level: 90 }
        ]
      },
      experience: [
        {
          company: "Generation Brasil",
          period: "2020 – Atual",
          roles: [
            {
              title: "Instrutor Líder de Desenvolvimento FullStack",
              period: "2021 – Atual",
              description: [
                "Desenvolvimento Full Stack com Node.js/TypeScript, Spring Boot/Java, Angular/TypeScript, React/TypeScript e SQL Server/MySQL. Arquitetura de sistemas escaláveis, liderança técnica e mentoria de equipes.",
                "Formação de +900 alunos e desenvolvimento de LMS com microsserviços.",
              ],
              achievements: [
                "Leciono Arquitetura e implementação de sistemas corporativos",
                "Melhoria contínua de performance em queries e modelagem de dados (SQL Server)",
                "Integração de serviços e APIs com foco em segurança e escalabilidade",
                "Mentoria de projetos com foco em boas práticas e arquitetura"
              ],
              techs: ["Node.js", "Nestjs", "Spring Boot", "Angular", "React", "SQL Server", "git/github"]
            },
            {
              title: "Instrutor e Desenvolvedor",
              period: "2020 – 2021",
              description: "Formação de +200 alunos e desenvolvimento de LMS com microsserviços.",
              achievements: [
                "Lecionou Java, Angular e metodologias agil como Scrum e Kanban, soft skills como comunicação interfuncional e liderança de equipes",
                "Mentoria de projetos com foco em boas práticas e arquitetura",
                "Desenvolvimento FullStack Spring Boot/Java, Angular/TypeScript com foco em segurança e escalável"
              ],
              techs: ["Java", "Angular", "MySQL", "Scrum", "git/github"]
            }
          ]
        },
        {
          company: "Omni Hermes",
          period: "2018 – 2019",
          roles: [
            {
              title: "Desenvolvedor Full Stack FreeLancer",
              period: "2017 – 2019",
              description: "Arquitetura de software e APIs.",
              achievements: [
                "Construção de APIs REST",
                "Aplicações em Node.js, Java, React",
                "Foco em segurança, desempenho e escalabilidade"
              ],
              techs: ["Node.js", "Java", "React", "MySQL", "git/github"]
            }
          ]
        },
      ],
      education: [
        {
          institution: "Estácio",
          degree: "Pós-graduação: Arquitetura e Projetos de Cloud Computing",
          period: "",
          details: ["Projetar, implementar e gerenciar soluções em nuvem escaláveis, seguras e de alta disponibilidade, alinhadas às necessidades do negócio."]
        },
        {
          institution: "Estácio",
          degree: "Tecnólogo: Data Modeling / Warehousing and Database Administration",
          period: "",
          details: ["Modelar dados, administrar bancos de dados e implementar soluções de Data Warehouse, organização e análise eficiente de informações corporativas"]
        }
      ],
      projects: [
        {
          title: "NerdCodeFlix",
          description: "Plataforma gamificada de cursos online focada na capacitação em tecnologia. Atuo como Desenvolvedor Full Stack.",
          longDescription: "NerdCodeFlix é uma plataforma gamificada de ensino à distância projetada para revolucionar o aprendizado em tecnologia. Com uma interface UI/UX altamente imersiva inspirada em plataformas de streaming, o sistema oferece cursos dinâmicos e trilhas completas. Atuei de ponta a ponta, desde o desenho da arquitetura escalável utilizando Next.js, APIs de pagamento e mensageria, até a criação dos cursos oferecidos, garantindo alta disponibilidade, performance e uma jornada do usuário excepcional.",
          image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop",
          techs: ["Next.js", "TypeScript", "Stripe API", "Prisma ORM", "Redux", "Tailwind CSS", "JWT", "OAuth2", "Supabase API", "MySQL", "Docker", "Kubernetes", "Jenkins"],
          results: "Plataforma completa em produção com catálogo ativo de cursos de tecnologia",
          githubLink: "",
          link: "https://nerdcodeflix.com.br/"
        },
        {
          title: "Robô de Busca de Vagas Tech",
          description: "Automação inteligente desenvolvida para auxiliar mais de 2.000 alunos na recolocação profissional. O robô monitora e agrega vagas de tecnologia de múltiplas plataformas como Infojobs, Gupy e LinkedIn.",
          longDescription: "Uma aplicação web inteligente e white-label projetada para revolucionar a recolocação profissional de desenvolvedores. O sistema analisa currículos em PDF diretamente no navegador, extrai habilidades e experiências, e utiliza um algoritmo de matching avançado para recomendar as vagas mais adequadas ao perfil do candidato. Desenvolvida como uma plataforma SaaS voltada para bootcamps e HR Techs, possui um painel de configurações para customização instantânea da marca, suporte nativo a Dark Mode e animações fluidas.",
          image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
          techs: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "Docker", "Kubernetes", "JWT", "OAuth2", "Jenkins"],
          results: "+2.000 alunos impactados em diversas plataformas",
          githubLink: "https://github.com/geandrol/Rob-de-Busca-de-Vagas-Tech",
          link: "https://rob-de-busca-de-vagas-tech-delta.vercel.app/"
        },
        {
          title: "Plataforma para ONGs de Mulheres",
          description: "Sistema desenvolvido para apoiar o empreendedorismo feminino através de ONGs. Inclui ferramentas de cálculo de viabilidade de negócios, gestão financeira simplificada e mentorias.",
          image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop",
          techs: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Kubernetes", "JWT", "OAuth2", "Jenkins"],
          results: "Impacto social direto no apoio a microempreendedoras",
          link: "#"
        },
        {
          title: "Ovelhinha Game - Aplicativo Educacional Gamificado",
          description: "Aplicativo mobile desenvolvido para promover o aprendizado infantil por meio de atividades lúdicas, desafios interativos e mecânicas de gamificação, proporcionando uma experiência divertida e educativa.",
          longDescription: "Ovelhinha Game é uma aplicação mobile voltada para o público infantil, criada com o objetivo de tornar o processo de aprendizagem mais envolvente através da gamificação. O projeto utiliza uma interface intuitiva e responsiva, permitindo que crianças interajam com desafios educativos de forma simples e divertida. Desenvolvido com React Native e Expo, o aplicativo foi projetado para oferecer compatibilidade multiplataforma, boa performance e uma experiência fluida para os usuários.",
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
          techs: ["React Native", "Expo", "Expo Router", "TypeScript", "JavaScript", "Mobile Development", "Android", "iOS", "Responsive Design", "Git", "GitHub"],
          results: "Desenvolvimento de uma experiência educacional gamificada que estimula o aprendizado e o engajamento infantil através de dispositivos móveis.",
          githubLink: "https://github.com/geandrol/ovelhinha-game"
        },
        {
          title: "Plataforma LMS Escalonável",
          description: "Sistema de gerenciamento de aprendizagem (LMS) desenvolvido do zero, atendendo mais de 2.200 usuários. Inclui streaming de vídeo, correção de exercícios baseada em IA e monitoramento de progresso.",
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
          techs: ["React", "Java", "Spring Boot", "Docker", "Kubernetes", "JWT", "OAuth2", "Jenkins"],
          results: "Suportou pico de acessos com 99.9% de uptime",
          link: "#"
        },
        {
          title: "Yu-Gi-Oh! QR Cards - Scanner e Gerador de QR Codes",
          description: "Aplicação React inspirada no universo Yu-Gi-Oh!, permitindo escanear QR Codes de cartas e gerar novos códigos personalizados através de uma interface temática e interativa.",
          longDescription: "Yu-Gi-Oh! QR Cards é uma aplicação web desenvolvida em React que combina a tecnologia de QR Codes com a temática do famoso anime Yu-Gi-Oh!. O sistema permite aos usuários escanear QR Codes associados às cartas para acessar informações rapidamente, além de gerar novos códigos personalizados de forma simples e intuitiva. O projeto foi construído com foco na experiência do usuário, utilizando uma interface inspirada no universo do anime para proporcionar uma navegação envolvente e visualmente atrativa. A aplicação demonstra conhecimentos em manipulação de câmera, leitura de QR Codes, geração dinâmica de conteúdo e desenvolvimento de interfaces modernas com React.",
          image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800&auto=format&fit=crop",
          techs: ["React","JavaScript","HTML5","CSS3","QR Code Scanner","QR Code Generator","Web APIs","Responsive Design","Git","GitHub"],
          results: "Implementação de uma solução interativa capaz de escanear e gerar QR Codes em tempo real, combinando tecnologia web moderna com uma experiência inspirada no universo Yu-Gi-Oh!.",
          githubLink: "https://github.com/geandrol/ProjetinhoQRCode",
           link: "https://projetinho-qr-code.vercel.app/"
        },
      ]
    },
  };

  return data[lang];
};
