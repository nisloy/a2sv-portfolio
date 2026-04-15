<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n'
import { Sun, Moon, Languages, Menu, X } from 'lucide-vue-next'

const { currentLanguage, toggleLanguage, t } = useI18n()
const isScrolled = ref(false)
const activeSection = ref('')
const isDark = ref(true)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  
  const sections = ['about', 'experience', 'skills', 'education', 'contact']
  for (const section of sections) {
    const el = document.getElementById(section)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 150 && rect.bottom >= 150) {
        activeSection.value = section
        break
      }
    }
  }
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light') {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  } else {
    document.documentElement.classList.add('dark')
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navLinks = [
  { name: 'about', href: '#about', id: 'about' },
  { name: 'experience', href: '#experience', id: 'experience' },
  { name: 'skills', href: '#skills', id: 'skills' },
  { name: 'education', href: '#education', id: 'education' },
  { name: 'contact', href: '#contact', id: 'contact' },
]
</script>

<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[isScrolled ? 'bg-background/90 backdrop-blur-md py-4 border-b border-border shadow-sm' : 'bg-transparent py-6']"
  >
    <div class="max-w-6xl mx-auto px-6 flex justify-between items-center">
      <a href="#" class="text-2xl font-black tracking-tighter text-accent">AM.</a>
      
      <!-- Desktop Menu -->
      <div class="flex items-center gap-4 md:gap-8">
        <div class="hidden md:flex gap-8">
          <a 
            v-for="link in navLinks" 
            :key="link.name" 
            :href="link.href"
            class="text-xs font-black uppercase tracking-widest transition-colors relative group py-2"
            :class="[activeSection === link.id ? 'text-accent' : 'text-muted-foreground hover:text-accent']"
          >
            {{ t.nav[link.name as keyof typeof t.nav] }}
            <span 
              class="absolute bottom-0 left-0 w-full h-0.5 bg-accent transform origin-left transition-transform duration-300"
              :class="[activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100']"
            ></span>
          </a>
        </div>
        
        <div class="flex items-center gap-2">
          <button 
            @click="toggleTheme"
            class="p-2 rounded-full hover:bg-accent/10 text-muted-foreground hover:text-accent transition-colors"
            :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          >
            <Sun v-if="isDark" :size="20" />
            <Moon v-else :size="20" />
          </button>
          
          <button 
            @click="toggleLanguage"
            class="flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 text-xs font-black hover:bg-accent/10 transition-colors text-accent uppercase"
          >
            <Languages :size="14" />
            <span>{{ currentLanguage }}</span>
          </button>

          <!-- Mobile Menu Toggle -->
          <button 
            @click="toggleMobileMenu"
            class="md:hidden p-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <Menu v-if="!isMobileMenuOpen" :size="24" />
            <X v-else :size="24" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div 
      v-if="isMobileMenuOpen"
      class="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300 shadow-xl"
    >
      <a 
        v-for="link in navLinks" 
        :key="link.name" 
        :href="link.href"
        @click="isMobileMenuOpen = false"
        class="text-sm font-black uppercase tracking-widest py-3 border-b border-border/50 last:border-0"
        :class="[activeSection === link.id ? 'text-accent' : 'text-muted-foreground']"
      >
        {{ t.nav[link.name as keyof typeof t.nav] }}
      </a>
    </div>
  </nav>
</template>

<style scoped>
.animate-in {
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
