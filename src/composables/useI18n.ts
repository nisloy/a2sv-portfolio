import { ref, computed } from 'vue'

const currentLanguage = ref('EN')

const translations = {
  EN: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact'
    },
    hero: {
      title: 'Amuza',
      subtitle: 'Software Engineer & DevOps Specialist',
      cta: 'Explore my work'
    },
    about: {
      title: 'About Me',
      mission: 'Mission',
      hobbiesTitle: 'Hobbies',
      hobbies: ['Football', 'Watching football', 'Chilling with friends', 'Adventure'],
      p1: 'A results-driven <span class="text-foreground font-semibold">Software Engineer</span> holding a BSc in Computer Science from the University of Rwanda. Currently deepening expertise in <span class="text-accent">DevOps</span>, I bring practical full-stack and system integration experience.',
      p2: 'I have contributed to high-impact national projects including automated billing integrations and custom Monitoring & Evaluation (M&E) systems. My focus is on strengthening end-to-end software delivery through <span class="text-foreground">CI/CD pipelines</span>, <span class="text-foreground">container orchestration</span>, and <span class="text-foreground">cloud infrastructure</span>.',
      missionText: '"To build resilient, scalable systems that bridge the gap between development and operations, delivering high-value technical solutions at a national scale."'
    },
    experience: {
      title: 'Professional Experience',
      items: [
        {
          role: 'Applications Developer',
          company: 'Africlouds Ltd',
          location: 'Kigali, Rwanda',
          period: '2023 – Present',
          highlights: [
            {
              title: 'Billing Integration',
              description: 'Supported 20% of the WASAC EBM integration, automating customer invoicing and securing reliable data transmission.'
            },
            {
              title: 'Full-Stack M&E System',
              description: 'Led the complete lifecycle of a Monitoring & Evaluation platform — from Figma prototyping to production — using Node.js, Vue.js and Tailwind CSS.'
            },
            {
              title: 'National Projects',
              description: 'Delivered technical solutions for NAEB and Never Again Rwanda, maintaining data integrity within Linux-based environments.'
            },
            {
              title: 'Mobile & Web',
              description: 'Built cross-platform apps with Dart/Flutter and the Frappe Framework for seamless mobile and web performance.'
            }
          ]
        }
      ]
    },
    skills: {
      title: 'Technical Skills'
    },
    education: {
      title: 'Education & Awards',
      items: [
        {
          degree: 'BSc Computer Science',
          institution: 'University of Rwanda',
          period: 'Expected 2028',
          description: 'Deepening foundational knowledge in computer science, algorithms, and systems engineering.'
        },
        {
          degree: 'A-Level (MPC)',
          institution: 'Nyagatare Secondary School',
          period: '',
          description: 'Mathematics, Physics, and Computer Science.'
        }
      ],
      awards: [
        {
          title: 'Best Performer — National Examination',
          institution: 'Nyagatare Secondary School',
          description: 'Recognized for outstanding academic performance at the national level.'
        }
      ]
    },
    contact: {
      title: 'Get In Touch',
      views: 'Views',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      sent: 'Message Sent!',
      error: 'Something went wrong. Please try again.',
      thanks: 'Thank you! I\'ll get back to you soon.',
      placeholderName: 'Your Name',
      placeholderEmail: 'your@email.com',
      placeholderMsg: 'How can I help you?'
    }
  },
  RW: {
    nav: {
      about: 'Ibijyanye nanjye',
      experience: 'Uburambe',
      skills: 'Ubumenyi',
      education: 'Amashuri',
      contact: 'Twandikire'
    },
    hero: {
      title: 'Amuza',
      subtitle: 'Software Engineer & Inzobere mu bya DevOps',
      cta: 'Reba ibyo nakoze'
    },
    about: {
      title: 'Ibijyanye nanjye',
      mission: 'Intego',
      hobbiesTitle: 'Ibyo nkunda',
      hobbies: ['Umupira w\'amaguru', 'Kureba umupira', 'Gusura inshuti', 'Gutembera'],
      p1: 'Ndi <span class="text-foreground font-semibold">Inzobere mu gukora Porogaramu</span> ufite impamyabumenyi ya BSc muri Computer Science yakuye muri Kaminuza y\'u Rwanda. Kuri ubu ndimo kwagura ubumenyi muri <span class="text-accent">DevOps</span>, kandi mfite uburambe mu gukora porogaramu zaba izo ku ruhande rw\'inyuma n\'izigaragarira ukoresha (full-stack).',
      p2: 'Nagiye ngira uruhare mu mishinga ikomeye ku rwego rw\'igihugu irimo guhuza sisitemu z\'ishura no gukora sisitemu zigenzura imigendekere y\'imishinga (M&E). Intego yanjye ni ugukomeza uburyo bwo gutanga porogaramu hifashishijwe <span class="text-foreground">CI/CD pipelines</span>, <span class="text-foreground">container orchestration</span>, n\'uburyo bwo kubika amakuru ku mbuga (cloud infrastructure).',
      missionText: '"Gukora sisitemu zikomeye kandi zaguka zihuza iterambere rya porogaramu n\'imikorere yazo, hagamijwe gutanga ibisubizo bya tekiniki bifite agaciro gakomeye ku rwego rw\'igihugu."'
    },
    experience: {
      title: 'Uburambe mu kazi',
      items: [
        {
          role: 'Applications Developer',
          company: 'Africlouds Ltd',
          location: 'Kigali, Rwanda',
          period: '2023 – Kugeza ubu',
          highlights: [
            {
              title: 'Guhuza Sisitemu z\'Ishura',
              description: 'Nafashije mu gice cya 20% cyo guhuza WASAC na EBM, hagamijwe kwikora kw\'inyandiko z\'ubwishyu no kwizera ko amakuru ageze ku gihe.'
            },
            {
              title: 'Sisitemu ya M&E',
              description: 'Nayoboye ikorwa rya sisitemu igenzura imishinga (Monitoring & Evaluation) — kuva ku gishushanyo kugeza ishyizwe mu bikorwa — nkoresheje Node.js, Vue.js na Tailwind CSS.'
            },
            {
              title: 'Imishinga y\'Igihugu',
              description: 'Natanze ibisubizo bya tekiniki kuri NAEB na Never Again Rwanda, ndinda umutekano w\'amakuru muri sisitemu za Linux.'
            },
            {
              title: 'Mobile & Web',
              description: 'Nakoze porogaramu zikora kuri mobile na web nkoresheje Dart/Flutter na Frappe Framework.'
            }
          ]
        }
      ]
    },
    skills: {
      title: 'Ubumenyi mu bya Tekinoloji'
    },
    education: {
      title: 'Amashuri n\'Ibihembo',
      items: [
        {
          degree: 'BSc Computer Science',
          institution: 'Kaminuza y\'u Rwanda',
          period: '2028',
          description: 'Kwiga ibijyanye na siyansi ya mudasobwa, algorithms, n\'uburyo sisitemu zikorwa.'
        },
        {
          degree: 'A-Level (MPC)',
          institution: 'Ishuri rya Nyagatare',
          period: '',
          description: 'Imibare, Fiziki, na Mudasobwa.'
        }
      ],
      awards: [
        {
          title: 'Uwitwaye neza — Ikizamini cya Leta',
          institution: 'Ishuri rya Nyagatare',
          description: 'Gushimirwa gutsinda neza cyane mu kizamini cya Leta.'
        }
      ]
    },
    contact: {
      title: 'Twandikire',
      views: 'Inshuro zasuwe',
      name: 'Izina',
      email: 'Imeri',
      message: 'Ubutumwa',
      send: 'Ohereza ubutumwa',
      sending: 'Turimo kohereza...',
      sent: 'Ubutumwa bwoherejwe!',
      error: 'Hari ikibazo cyavutse. Ongera ugerageze.',
      thanks: 'Murakoze! Nzabasubiza vuba.',
      placeholderName: 'Izina ryawe',
      placeholderEmail: 'imeri@yawe.com',
      placeholderMsg: 'Nafasha nte?'
    }
  },
  FR: {
    nav: {
      about: 'À propos',
      experience: 'Expérience',
      skills: 'Compétences',
      education: 'Éducation',
      contact: 'Contact'
    },
    hero: {
      title: 'Amuza',
      subtitle: 'Ingénieur Logiciel & Spécialiste DevOps',
      cta: 'Découvrez mon travail'
    },
    about: {
      title: 'À propos de moi',
      mission: 'Mission',
      hobbiesTitle: 'Loisirs',
      hobbies: ['Football', 'Regarder le football', 'Se détendre avec des amis', 'Aventure'],
      p1: 'Un <span class="text-foreground font-semibold">Ingénieur Logiciel</span> axé sur les résultats, titulaire d\'un BSc en informatique de l\'Université du Rwanda. Approfondissant actuellement mon expertise en <span class="text-accent">DevOps</span>, j\'apporte une expérience pratique en full-stack et en intégration de systèmes.',
      p2: 'J\'ai contribué à des projets nationaux à fort impact, notamment des intégrations de facturation automatisées et des systèmes de suivi et d\'évaluation (S&E) personnalisés. Mon objectif est de renforcer la livraison de logiciels de bout en bout grâce aux <span class="text-foreground">pipelines CI/CD</span>, à l\'<span class="text-foreground">orchestration de conteneurs</span> et à l\'<span class="text-foreground">infrastructure cloud</span>.',
      missionText: '"Construire des systèmes résilients et évolutifs qui comblent le fossé entre le développement et les opérations, en fournissant des solutions techniques de grande valeur à l\'échelle nationale."'
    },
    experience: {
      title: 'Expérience Professionnelle',
      items: [
        {
          role: 'Développeur d\'Applications',
          company: 'Africlouds Ltd',
          location: 'Kigali, Rwanda',
          period: '2023 – Présent',
          highlights: [
            {
              title: 'Intégration de la Facturation',
              description: 'Soutien à 20 % de l\'intégration WASAC EBM, automatisant la facturation des clients et sécurisant la transmission fiable des données.'
            },
            {
              title: 'Système S&E Full-Stack',
              description: 'Direction du cycle de vie complet d\'une plateforme de suivi et d\'évaluation — du prototypage Figma à la production — en utilisant Node.js, Vue.js et Tailwind CSS.'
            },
            {
              title: 'Projets Nationaux',
              description: 'Fourniture de solutions techniques pour le NAEB et Never Again Rwanda, maintenant l\'intégrité des données dans des environnements Linux.'
            },
            {
              title: 'Mobile & Web',
              description: 'Développement d\'applications multiplateformes avec Dart/Flutter et le framework Frappe pour des performances mobiles et web fluides.'
            }
          ]
        }
      ]
    },
    skills: {
      title: 'Compétences Techniques'
    },
    education: {
      title: 'Éducation & Distinctions',
      items: [
        {
          degree: 'BSc en Informatique',
          institution: 'Université du Rwanda',
          period: 'Attendu 2028',
          description: 'Approfondissement des connaissances fondamentales en informatique, algorithmes et ingénierie des systèmes.'
        },
        {
          degree: 'A-Level (MPC)',
          institution: 'Nyagatare Secondary School',
          period: '',
          description: 'Mathématiques, Physique et Informatique.'
        }
      ],
      awards: [
        {
          title: 'Meilleur Performant — Examen National',
          institution: 'Nyagatare Secondary School',
          description: 'Reconnu pour ses performances académiques exceptionnelles au niveau national.'
        }
      ]
    },
    contact: {
      title: 'Contactez-moi',
      views: 'Vues',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer',
      sending: 'Envoi...',
      sent: 'Message Envoyé!',
      error: 'Une erreur s\'est produite. Veuillez réessayer.',
      thanks: 'Merci ! Je vous répondrai bientôt.',
      placeholderName: 'Votre Nom',
      placeholderEmail: 'votre@email.com',
      placeholderMsg: 'Comment puis-je vous aider ?'
    }
  }
}

export function useI18n() {
  const toggleLanguage = () => {
    const languages: (keyof typeof translations)[] = ['EN', 'RW', 'FR']
    const currentIndex = languages.indexOf(currentLanguage.value as keyof typeof translations)
    currentLanguage.value = languages[(currentIndex + 1) % languages.length]
  }

  const t = computed(() => translations[currentLanguage.value as keyof typeof translations])

  return {
    currentLanguage,
    toggleLanguage,
    t
  }
}
