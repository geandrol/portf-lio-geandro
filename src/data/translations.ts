export type Language = 'pt';

export const translations = {
  pt: {
    nav: {
      about: 'Sobre',
      skills: 'Skills',
      experience: 'Experiência',
      education: 'Formação',
      projects: 'Projetos',
      contact: 'Contato',
      downloadCV: 'Baixar CV'
    },
    hero: {
      available: 'Disponível para novos projetos',
      hello: 'Olá, eu sou',
      description: 'Construindo soluções robustas, escaláveis e de alta performance. Especialista em arquitetura de software e desenvolvimento ponta a ponta com +10 anos de experiência.',
      viewProjects: 'Ver Projetos',
      contactMe: 'Falar Comigo',
      frontend: 'Frontend Moderno',
      backend: 'Backend Escalável',
      cloud: 'Cloud & DevOps'
    },
    about: {
      title: 'Sobre Mim',
      heading: 'Transformando complexidade em soluções elegantes.',
      p1: 'Com mais de 4 anos de experiência no mercado, tenho atuado na intersecção entre tecnologia, educação e transformação digital. Minha paixão é construir produtos que não apenas funcionam excepcionalmente bem, mas que entregam valor real aos usuários e negócios.',
      experience: 'de experiência',
      leadership: 'técnica de times',
      architecture: 'escalável',
      mentoring: 'e capacitação',
      careerSummary: 'Resumo de Carreira',
      role2Title: 'Tech Lead & Instrução',
      role2Desc: 'Coordenação de projetos e times, processos e indicadores.',
      role3Title: 'Arquiteto de Software Freelancer',
      role3Desc: 'Projetos sob demanda, Node.js, React.'
    },
    skills: {
      title: 'Expertise',
      heading: 'Habilidades e Competências',
      description: 'Domínio de tecnologias modernas para construir aplicações escaláveis e habilidades interpessoais para liderança e formação de equipes.',
      frontend: 'Frontend',
      backend: 'Backend',
      architecture: 'Arquitetura',
      devops: 'DevOps & Cloud',
      data: 'Análise de Dados',
      rpa: 'RPA e Automação',
      curriculum: 'Coordenação',
      instruction: 'Instrução e Mentoria',
      leadership: 'Gestão e Liderança'
    },
    experience: {
      title: 'Trajetória',
      heading: 'Experiência Profissional'
    },
    education: {
      title: 'Formação',
      heading: 'Formação Acadêmica'
    },
    projects: {
      title: 'Portfólio',
      heading: 'Projetos em Destaque desenvolvidos para clientes',
      results: 'Resultados:',
      seeMore: 'Ver mais',
      accessApp: 'Aplicação',
      close: 'Fechar'
    },
    contact: {
      title: 'Contato',
      heading: 'Vamos construir algo incrível juntos?',
      description: 'Estou sempre aberto a discutir projetos interessantes, oportunidades de consultoria ou simplesmente trocar ideias sobre arquitetura de software e tecnologia.',
      email: 'E-mail',
      location: 'Localização',
      whatsapp: 'WhatsApp',
      formName: 'Nome',
      formEmail: 'E-mail',
      formSubject: 'Assunto',
      formMessage: 'Mensagem',
      formPlaceholder: 'Como posso ajudar?',
      formSending: 'Enviando...',
      formSent: 'Mensagem Enviada!',
      formSend: 'Enviar Mensagem'
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      viewSource: 'Ver código fonte deste portfólio'
    }
  }
};

export type TranslationType = typeof translations.pt;
