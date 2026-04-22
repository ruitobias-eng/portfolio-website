import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  pt: {
    nav: {
      home: 'Início',
      services: 'Serviços',
      team: 'Equipe',
      projects: 'Projetos',
      contact: 'Contato',
      quote: 'Solicitar Orçamento'
    },
    hero: {
<<<<<<< HEAD
=======
      engineering: 'Engenharia 5.0',
>>>>>>> 3faf164 (feat: implementando traduções e componente Hero)
      tagline: 'Soluções em Engenharia, Automação e Computação',
      description: 'Inovação e inteligência aplicadas à indústria, sistemas e TI.',
      ctaServices: 'Conheça Nossos Serviços',
      ctaProjects: 'Ver Projetos',
<<<<<<< HEAD
      industry: 'INDÚSTRIA 4.0',
=======
      industry: 'INDÚSTRIA 5.0',
>>>>>>> 3faf164 (feat: implementando traduções e componente Hero)
      projects: 'Projetos',
      automation: 'Automação'
    },
    services: {
      badge: 'SERVIÇOS ESPECIALIZADOS',
      title: 'Soluções Completas em',
      titleHighlight: 'Automação',
      description: 'Oferecemos uma gama abrangente de serviços especializados em engenharia de automação, projetados para atender às necessidades específicas do seu negócio.',
      items: [
        {
          title: 'Automação Industrial',
          description: 'Projetos com CLPs, IHMs e SCADA. Integração de sensores, atuadores e sistemas industriais inteligentes.',
          tags: ['CLPs', 'SCADA', 'Sensores']
        },
        {
          title: 'AI Chatbot',
          description: 'Soluções inteligentes de chatbot com IA para atendimento 24/7, escalável e multilíngue.',
          tags: ['IA', 'Chatbot', 'Automação']
        },
        {
          title: 'Infraestrutura Cloud',
          description: 'Administração de servidores, cloud computing (Azure, AWS, Google Cloud), backups e suporte técnico.',
          tags: ['Azure', 'AWS', 'Cloud']
        },
        {
          title: 'Ciência de Dados',
          description: 'Análise de dados, machine learning e inteligência artificial para otimização de processos.',
          tags: ['ML', 'IA', 'Analytics']
        },
        {
          title: 'Sistemas ERP',
          description: 'Desenvolvimento de sistemas personalizados: C, C++, Java, .NET, Python e integração de APIs.',
          tags: ['ERP', 'Java', '.NET']
        },
        {
          title: 'App Delivery',
          description: 'Desenvolvimento de aplicativos mobile para delivery e logística com rastreamento em tempo real.',
          tags: ['Mobile', 'Delivery', 'IoT']
        }
      ]
    },
    team: {
      badge: 'EQUIPE TÉCNICA',
      title: 'Profissionais com ampla',
      titleHighlight: 'experiência',
      description: 'Somos engenheiros apaixonados por tecnologia e inovação. Atuamos com desenvolvimento de sistemas, automação industrial, inteligência artificial e consultoria em TI. Com experiência em projetos públicos e privados, buscamos transformar processos através de soluções eficientes e inteligentes.',
      members: [
        {
          name: 'Rodrigo',
          role: 'Engenharia | Inovação Tecnológica | BI',
          description: 'Especialista em soluções tecnológicas para engenharia de computação, IoT e sistemas embarcados, com sólida experiência em integração de sistemas, engenharia de computação e análise de dados aplicada ao setor financeiro. Combinando expertise técnica e visão estratégica, atua na interseção entre tecnologia e finanças, entregando projetos com eficiência e inovação.'
        },
        {
          name: 'Rui',
          role: 'Engenharia de Computação | Ciência de Dados | Indústria 4.0',
          description: 'Expertise Multidisciplinar: Automação Industrial (CLPs, SCADA, Redes Industriais), Engenharia de Software (Java, .NET, Python, Delphi, Bancos de Dados), TI & Infraestrutura (Servidores, Cloud, Cibersegurança), Data Science (Análise de Dados, Machine Learning, IoT), Docência Técnica (Formação de profissionais em tecnologia).'
        }
      ]
    },
    projects: {
      badge: 'PROJETOS REALIZADOS',
      title: 'Casos de',
      titleHighlight: 'Sucesso',
      description: 'Conheça alguns dos nossos projetos mais recentes e veja como transformamos desafios em resultados tangíveis.',
      items: [
        {
          title: 'Automação de Linha de Produção',
          client: 'Indústria Alimentícia',
          description: 'Implementação de sistema completo de automação para linha de produção, resultando em 30% de aumento na capacidade produtiva.',
          result: '+30% produtividade'
        },
        {
          title: 'Sistema de Controle de Água',
          client: 'Estação de Tratamento',
          description: 'Modernização do sistema de controle com redução de 25% no consumo de energia e melhoria na qualidade da água tratada.',
          result: '-25% energia'
        },
        {
          title: 'Automação Predial Inteligente',
          client: 'Edifício Comercial',
          description: 'Sistema BMS integrado para controle de iluminação, climatização e segurança, com economia de 40% no consumo energético.',
          result: '-40% consumo'
        }
      ]
    },
    contact: {
      badge: 'ENTRE EM CONTATO',
      title: 'Vamos Conversar Sobre',
      titleHighlight: 'Seu Projeto',
      description: 'Entre em contato para projetos, consultorias ou parcerias em automação, TI e inovação.',
      info: {
        phone: 'Telefone',
        email: 'E-mail',
        location: 'Localização'
      },
      form: {
        title: 'Solicite um',
        titleHighlight: 'Orçamento',
        subtitle: 'Preencha o formulário e entraremos em contato em breve.',
        name: 'Nome',
        namePlaceholder: 'Seu nome',
        email: 'E-mail',
        emailPlaceholder: 'seu@email.com',
        subject: 'Assunto',
        subjectPlaceholder: 'Assunto da mensagem',
        message: 'Mensagem',
        messagePlaceholder: 'Descreva seu projeto ou necessidade...',
        submit: 'Enviar Mensagem',
        submitting: 'Enviando...',
        success: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        error: 'Erro ao enviar mensagem. Por favor, tente novamente.'
      }
    },
    footer: {
      description: 'Especialista em engenharia de automação e Indústria 4.0, transformando desafios em soluções inteligentes.',
      services: 'Serviços',
      servicesList: [
        'Automação de Processos',
        'Desenvolvimento de Sistemas',
        'Infraestrutura de TI',
        'Ciência de Dados e ML',
        'Educação e Treinamento'
      ],
      company: 'Empresa',
      companyList: ['Equipe', 'Contato'],
      contactTitle: 'Contato',
      rights: '© 2025 Rui & Rodrigo. Todos os direitos reservados.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      team: 'Team',
      projects: 'Projects',
      contact: 'Contact',
      quote: 'Request Quote'
    },
    hero: {
<<<<<<< HEAD
=======
      engineering: 'Engineering 5.0',
>>>>>>> 3faf164 (feat: implementando traduções e componente Hero)
      tagline: 'Engineering, Automation and Computing Solutions',
      description: 'Innovation and intelligence applied to industry, systems and IT.',
      ctaServices: 'Discover Our Services',
      ctaProjects: 'View Projects',
<<<<<<< HEAD
      industry: 'INDUSTRY 4.0',
=======
      industry: 'INDUSTRY 5.0',
>>>>>>> 3faf164 (feat: implementando traduções e componente Hero)
      projects: 'Projects',
      automation: 'Automation'
    },
    services: {
      badge: 'SPECIALIZED SERVICES',
      title: 'Complete Solutions in',
      titleHighlight: 'Automation',
      description: 'We offer a comprehensive range of specialized automation engineering services, designed to meet your business specific needs.',
      items: [
        {
          title: 'Industrial Automation',
          description: 'Projects with PLCs, HMIs and SCADA. Integration of sensors, actuators and intelligent industrial systems.',
          tags: ['PLCs', 'SCADA', 'Sensors']
        },
        {
          title: 'AI Chatbot',
          description: 'Intelligent AI chatbot solutions for 24/7 support, scalable and multilingual.',
          tags: ['AI', 'Chatbot', 'Automation']
        },
        {
          title: 'Cloud Infrastructure',
          description: 'Server administration, cloud computing (Azure, AWS, Google Cloud), backups and technical support.',
          tags: ['Azure', 'AWS', 'Cloud']
        },
        {
          title: 'Data Science',
          description: 'Data analysis, machine learning and artificial intelligence for process optimization.',
          tags: ['ML', 'AI', 'Analytics']
        },
        {
          title: 'ERP Systems',
          description: 'Custom systems development: C, C++, Java, .NET, Python and API integration.',
          tags: ['ERP', 'Java', '.NET']
        },
        {
          title: 'Delivery App',
          description: 'Mobile app development for delivery and logistics with real-time tracking.',
          tags: ['Mobile', 'Delivery', 'IoT']
        }
      ]
    },
    team: {
      badge: 'TECHNICAL TEAM',
      title: 'Professionals with extensive',
      titleHighlight: 'experience',
      description: 'We are engineers passionate about technology and innovation. We work with systems development, industrial automation, artificial intelligence and IT consulting. With experience in public and private projects, we seek to transform processes through efficient and intelligent solutions.',
      members: [
        {
          name: 'Rodrigo',
          role: 'Engineering | Technology Innovation | BI',
          description: 'Specialist in technological solutions for computer engineering, IoT and embedded systems, with solid experience in systems integration, computer engineering and data analysis applied to the financial sector. Combining technical expertise and strategic vision, he works at the intersection between technology and finance, delivering projects with efficiency and innovation.'
        },
        {
          name: 'Rui',
          role: 'Computer Engineering | Data Science | Industry 4.0',
          description: 'Multidisciplinary Expertise: Industrial Automation (PLCs, SCADA, Industrial Networks), Software Engineering (Java, .NET, Python, Delphi, Databases), IT & Infrastructure (Servers, Cloud, Cybersecurity), Data Science (Data Analysis, Machine Learning, IoT), Technical Teaching (Training technology professionals).'
        }
      ]
    },
    projects: {
      badge: 'COMPLETED PROJECTS',
      title: 'Success',
      titleHighlight: 'Stories',
      description: 'Discover some of our most recent projects and see how we transform challenges into tangible results.',
      items: [
        {
          title: 'Production Line Automation',
          client: 'Food Industry',
          description: 'Implementation of complete automation system for production line, resulting in 30% increase in production capacity.',
          result: '+30% productivity'
        },
        {
          title: 'Water Control System',
          client: 'Treatment Plant',
          description: 'Control system modernization with 25% reduction in energy consumption and improvement in treated water quality.',
          result: '-25% energy'
        },
        {
          title: 'Smart Building Automation',
          client: 'Commercial Building',
          description: 'Integrated BMS system for lighting, climate and security control, with 40% savings in energy consumption.',
          result: '-40% consumption'
        }
      ]
    },
    contact: {
      badge: 'GET IN TOUCH',
      title: "Let's Talk About",
      titleHighlight: 'Your Project',
      description: 'Get in touch for projects, consulting or partnerships in automation, IT and innovation.',
      info: {
        phone: 'Phone',
        email: 'Email',
        location: 'Location'
      },
      form: {
        title: 'Request a',
        titleHighlight: 'Quote',
        subtitle: 'Fill out the form and we will contact you soon.',
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        subject: 'Subject',
        subjectPlaceholder: 'Message subject',
        message: 'Message',
        messagePlaceholder: 'Describe your project or need...',
        submit: 'Send Message',
        submitting: 'Sending...',
        success: 'Message sent successfully! We will contact you soon.',
        error: 'Error sending message. Please try again.'
      }
    },
    footer: {
      description: 'Specialist in automation engineering and Industry 4.0, transforming challenges into intelligent solutions.',
      services: 'Services',
      servicesList: [
        'Process Automation',
        'Systems Development',
        'IT Infrastructure',
        'Data Science and ML',
        'Education and Training'
      ],
      company: 'Company',
      companyList: ['Team', 'Contact'],
      contactTitle: 'Contact',
      rights: '© 2025 Rui & Rodrigo. All rights reserved.'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      team: 'Equipo',
      projects: 'Proyectos',
      contact: 'Contacto',
      quote: 'Solicitar Presupuesto'
    },
    hero: {
<<<<<<< HEAD
=======
      engineering: 'Ingeniería 5.0',
>>>>>>> 3faf164 (feat: implementando traduções e componente Hero)
      tagline: 'Soluciones en Ingeniería, Automatización y Computación',
      description: 'Innovación e inteligencia aplicadas a la industria, sistemas y TI.',
      ctaServices: 'Conozca Nuestros Servicios',
      ctaProjects: 'Ver Proyectos',
<<<<<<< HEAD
      industry: 'INDUSTRIA 4.0',
=======
      industry: 'INDUSTRIA 5.0',
>>>>>>> 3faf164 (feat: implementando traduções e componente Hero)
      projects: 'Proyectos',
      automation: 'Automatización'
    },
    services: {
      badge: 'SERVICIOS ESPECIALIZADOS',
      title: 'Soluciones Completas en',
      titleHighlight: 'Automatización',
      description: 'Ofrecemos una amplia gama de servicios especializados en ingeniería de automatización, diseñados para satisfacer las necesidades específicas de su negocio.',
      items: [
        {
          title: 'Automatización Industrial',
          description: 'Proyectos con PLCs, HMIs y SCADA. Integración de sensores, actuadores y sistemas industriales inteligentes.',
          tags: ['PLCs', 'SCADA', 'Sensores']
        },
        {
          title: 'AI Chatbot',
          description: 'Soluciones inteligentes de chatbot con IA para atención 24/7, escalable y multilingüe.',
          tags: ['IA', 'Chatbot', 'Automatización']
        },
        {
          title: 'Infraestructura Cloud',
          description: 'Administración de servidores, cloud computing (Azure, AWS, Google Cloud), backups y soporte técnico.',
          tags: ['Azure', 'AWS', 'Cloud']
        },
        {
          title: 'Ciencia de Datos',
          description: 'Análisis de datos, machine learning e inteligencia artificial para optimización de procesos.',
          tags: ['ML', 'IA', 'Analytics']
        },
        {
          title: 'Sistemas ERP',
          description: 'Desarrollo de sistemas personalizados: C, C++, Java, .NET, Python e integración de APIs.',
          tags: ['ERP', 'Java', '.NET']
        },
        {
          title: 'App Delivery',
          description: 'Desarrollo de aplicaciones móviles para delivery y logística con seguimiento en tiempo real.',
          tags: ['Mobile', 'Delivery', 'IoT']
        }
      ]
    },
    team: {
      badge: 'EQUIPO TÉCNICO',
      title: 'Profesionales con amplia',
      titleHighlight: 'experiencia',
      description: 'Somos ingenieros apasionados por la tecnología e innovación. Trabajamos con desarrollo de sistemas, automatización industrial, inteligencia artificial y consultoría en TI. Con experiencia en proyectos públicos y privados, buscamos transformar procesos a través de soluciones eficientes e inteligentes.',
      members: [
        {
          name: 'Rodrigo',
          role: 'Ingeniería | Innovación Tecnológica | BI',
          description: 'Especialista en soluciones tecnológicas para ingeniería informática, IoT y sistemas embebidos, con sólida experiencia en integración de sistemas, ingeniería informática y análisis de datos aplicado al sector financiero. Combinando experiencia técnica y visión estratégica, actúa en la intersección entre tecnología y finanzas, entregando proyectos con eficiencia e innovación.'
        },
        {
          name: 'Rui',
          role: 'Ingeniería Informática | Ciencia de Datos | Industria 4.0',
          description: 'Experiencia Multidisciplinaria: Automatización Industrial (PLCs, SCADA, Redes Industriales), Ingeniería de Software (Java, .NET, Python, Delphi, Bases de Datos), TI e Infraestructura (Servidores, Cloud, Ciberseguridad), Data Science (Análisis de Datos, Machine Learning, IoT), Docencia Técnica (Formación de profesionales en tecnología).'
        }
      ]
    },
    projects: {
      badge: 'PROYECTOS REALIZADOS',
      title: 'Casos de',
      titleHighlight: 'Éxito',
      description: 'Conozca algunos de nuestros proyectos más recientes y vea cómo transformamos desafíos en resultados tangibles.',
      items: [
        {
          title: 'Automatización de Línea de Producción',
          client: 'Industria Alimenticia',
          description: 'Implementación de sistema completo de automatización para línea de producción, resultando en 30% de aumento en la capacidad productiva.',
          result: '+30% productividad'
        },
        {
          title: 'Sistema de Control de Agua',
          client: 'Estación de Tratamiento',
          description: 'Modernización del sistema de control con reducción del 25% en el consumo de energía y mejora en la calidad del agua tratada.',
          result: '-25% energía'
        },
        {
          title: 'Automatización Predial Inteligente',
          client: 'Edificio Comercial',
          description: 'Sistema BMS integrado para control de iluminación, climatización y seguridad, con ahorro del 40% en el consumo energético.',
          result: '-40% consumo'
        }
      ]
    },
    contact: {
      badge: 'PÓNGASE EN CONTACTO',
      title: 'Hablemos Sobre',
      titleHighlight: 'Su Proyecto',
      description: 'Póngase en contacto para proyectos, consultoría o asociaciones en automatización, TI e innovación.',
      info: {
        phone: 'Teléfono',
        email: 'Correo',
        location: 'Ubicación'
      },
      form: {
        title: 'Solicite un',
        titleHighlight: 'Presupuesto',
        subtitle: 'Complete el formulario y nos pondremos en contacto pronto.',
        name: 'Nombre',
        namePlaceholder: 'Su nombre',
        email: 'Correo',
        emailPlaceholder: 'su@correo.com',
        subject: 'Asunto',
        subjectPlaceholder: 'Asunto del mensaje',
        message: 'Mensaje',
        messagePlaceholder: 'Describa su proyecto o necesidad...',
        submit: 'Enviar Mensaje',
        submitting: 'Enviando...',
        success: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.',
        error: 'Error al enviar mensaje. Por favor, intente nuevamente.'
      }
    },
    footer: {
      description: 'Especialista en ingeniería de automatización e Industria 4.0, transformando desafíos en soluciones inteligentes.',
      services: 'Servicios',
      servicesList: [
        'Automatización de Procesos',
        'Desarrollo de Sistemas',
        'Infraestructura de TI',
        'Ciencia de Datos y ML',
        'Educación y Capacitación'
      ],
      company: 'Empresa',
      companyList: ['Equipo', 'Contacto'],
      contactTitle: 'Contacto',
      rights: '© 2025 Rui & Rodrigo. Todos los derechos reservados.'
    }
  }
};

// =======================
// 🎨 Criação do contexto
// =======================
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // 🔤 Idioma
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("dibitech-language");
    return saved || "pt";
  });

  // 🎨 Tema (light | dark | system)
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("dibitech-theme");
    return savedTheme || "system";
  });

  // =======================
  // 🌗 Funções do Tema
  // =======================
  const applyTheme = (selectedTheme) => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (selectedTheme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.add(prefersDark ? "dark" : "light");
    } else {
      root.classList.add(selectedTheme);
    }
  };

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("dibitech-theme", theme);

    // Detecta mudanças no sistema
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") applyTheme("system");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  // Alterna manualmente entre dark/light
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // =======================
  // 💬 Traduções
  // =======================
  const t = translations[language];

  // Função segura para acessar caminhos
  const getTranslation = (path) => {
    const keys = path.split(".");
    return keys.reduce((acc, key) => acc?.[key], t) ?? path;
  };

  // =======================
  // 🔁 Retorno do Provider
  // =======================
  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        getTranslation,
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}