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
        portfolioGithub: "https://github.com/Marcelo7211",
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
              techs: [ "Node.js", "Nestjs","Spring Boot", "Angular", "React", "SQL Server", "git/github"]
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
          description: "Plataforma gamificada de cursos online focada na capacitação em tecnologia. Atuei como Desenvolvedor Full Stack, participando ativamente da arquitetura da plataforma e na criação de conteúdos técnicos imersivos de alta performance.",
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
          githubLink: "https://github.com/Marcelo7211/Rob-de-Busca-de-Vagas-Tech",
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
          title: "Dashboards Educacionais & Analytics",
          description: "Solução de Business Intelligence para empresas de educação, focada em métricas de engajamento, retenção e performance acadêmica. Integração direta com LMS e análise preditiva.",
          longDescription: "Uma solução abrangente de Business Intelligence voltada para o setor educacional. Este dashboard interativo oferece visualizações detalhadas de métricas de engajamento, retenção de alunos e performance acadêmica. Construído com foco na experiência do usuário, permite a análise preditiva e integração direta com sistemas de gestão de aprendizagem (LMS), facilitando a tomada de decisão estratégica para instituições de ensino.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
          techs: ["Java", "Spring Boot", "Power BI", "SQL", "Data Warehouse", "Docker", "Kubernetes", "JWT", "OAuth2", "Jenkins"],
          results: "Otimização de estratégias pedagógicas baseada em dados",
          githubLink: "https://github.com/Marcelo7211/DashboardsEducacionais-Analytics",
          link: "https://dashboards-educacionais-analytics-kappa.vercel.app/"
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
          title: "Sistema ERP Imobiliário",
          description: "Plataforma de gestão para o setor imobiliário focada em performance e eficiência. Integração com múltiplos serviços de terceiros e mensageria para processamento assíncrono.",
          longDescription: "Sistema ERP completo para imobiliárias, cobrindo gestão de imóveis, propostas comerciais, funil de vendas e acompanhamento operacional em tempo real. A solução integra serviços de terceiros e mensageria assíncrona para manter alta performance em processos críticos, com foco em produtividade e escalabilidade para equipes comerciais e administrativas.",
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
          techs: ["C#", "ASP.NET Core", "React", "AWS SQS", "SQL Server", "Docker", "Kubernetes", "JWT", "OAuth2", "Jenkins"],
          results: "Aumentou a eficiência operacional em 35%",
          githubLink: "https://github.com/Marcelo7211/ERP-projeto",
          link: "https://erp-projeto.vercel.app/"
        },
        {
          title: "Portal Financeiro & Corretagem",
          description: "Aplicação robusta para corretoras, fornecendo análises em tempo real, integração de dados complexos e painéis de controle interativos de alta performance.",
          longDescription: "Uma aplicação web White-Label de alta performance para o mercado financeiro, desenvolvida para oferecer uma experiência de SaaS Financeiro premium. O sistema combina dados em tempo real, simulação de trading e gestão de carteira em uma interface sofisticada e totalmente personalizável. Permite personalização instantânea de cores da marca, suporte a Dark/Light Mode e integração híbrida de dados de mercado (Alpha Vantage + Mocks).",
          image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
          techs: ["Node.js", "NestJS", "React", "AWS", "Redis", "Docker", "Kubernetes", "JWT", "OAuth2", "Jenkins"],
          results: "Reduziu latência de processamento de dados em 50%",
          githubLink: "https://github.com/Marcelo7211/PortalFinanceiro",
          link: "https://portal-financeiro-ten.vercel.app/"
        },
        {
          title: "Dojo Paulista – Landing Page",
          description: "Landing page desenvolvida para academia de artes marciais com foco na captação de novos alunos. Design moderno com navegação fluida, apresentação dos planos, diferenciais da escola e formulário de contato estrategicamente posicionado.",
          longDescription: "Projeto de landing page completa para o Dojo Paulista, academia de artes marciais localizada em São Paulo. A página foi desenvolvida com foco total na conversão: apresenta o propósito da academia com a tagline 'Transformando Vidas, Forjando Campeões', detalha os planos disponíveis, destaca os diferenciais competitivos e oferece múltiplos pontos de contato ao longo da página. A navegação intuitiva inclui seções de Home, Nossos Planos, Loja, Sobre Nós e Fale Conosco, tudo com uma identidade visual forte e profissional que transmite credibilidade e inspira novos alunos.",
          image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop",
          techs: ["React", "Typescript", "JavaScript", "Tailwind CSS"],
          results: "Aumento de 40% na captação de novos alunos",
          githubLink: "https://github.com/Marcelo7211/dojo-landingpage-ui",
          link: "https://dojopaulista.vercel.app/"
        },
        {
          title: "Carlos TRG – Landing Page de Terapia",
          description: "Landing page criada para terapeuta com foco na captação e agendamento de consultas. Interface acolhedora e profissional com a proposta 'Transforme sua mente, reescreva sua história', otimizada para conversão de visitantes em pacientes.",
          longDescription: "Landing page desenvolvida para Carlos TRG, terapeuta com atuação em São Paulo. A proposta do projeto foi criar uma presença digital empática e profissional, transmitindo confiança e acolhimento ao visitante em busca de apoio terapêutico. A página apresenta o terapeuta, seus serviços e abordagem, além de uma seção dedicada ao agendamento de sessões — ponto central de conversão da página. A navegação contempla Home, Sobre Mim, Agende uma Sessão, Fale Conosco e Nossos Serviços, com uma identidade visual sofisticada em tons de azul e lilás que reforça a proposta transformadora da terapia.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
          techs: ["React", "Typescript", "CalendarApi", "JavaScript", "Tailwind CSS"],
          results: "Aumento em 80% na captação de novos pacientes, reduçao de 100% no indice de conflitos de agendamentos.",
          githubLink: "https://github.com/Marcelo7211/carlostrg",
          link: "https://carlostrg.vercel.app/"
        }
      ]
    },
  };

  return data[lang];
};
