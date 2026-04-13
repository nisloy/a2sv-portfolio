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
      mission: 'Mission'
    },
    experience: {
      title: 'Professional Experience'
    },
    skills: {
      title: 'Technical Skills'
    },
    education: {
      title: 'Education & Awards'
    },
    contact: {
      title: 'Get In Touch',
      views: 'Views'
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
      mission: 'Intego'
    },
    experience: {
      title: 'Uburambe mu kazi'
    },
    skills: {
      title: 'Ubumenyi mu bya Tekinoloji'
    },
    education: {
      title: 'Amashuri n\'Ibihembo'
    },
    contact: {
      title: 'Twandikire',
      views: 'Inshuro zasuwe'
    }
  }
}

export function useI18n() {
  const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'EN' ? 'RW' : 'EN'
  }

  const t = computed(() => translations[currentLanguage.value as keyof typeof translations])

  return {
    currentLanguage,
    toggleLanguage,
    t
  }
}
