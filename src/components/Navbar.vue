<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n'

const { currentLanguage, toggleLanguage, t } = useI18n()
const isScrolled = ref(false)
const activeSection = ref('')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  
  const sections = ['about', 'experience', 'skills', 'education', 'contact']
  for (const section of sections) {
    const el = document.getElementById(section)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
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
    :class="[isScrolled ? 'bg-background/80 backdrop-blur-md py-4 border-b border-border' : 'bg-transparent py-6']"
  >
    <div class="max-w-6xl mx-auto px-6 flex justify-between items-center">
      <a href="#" class="text-xl font-black tracking-tighter text-accent">AM.</a>
      
      <div class="flex items-center gap-8">
        <div class="hidden md:flex gap-8">
          <a 
            v-for="link in navLinks" 
            :key="link.name" 
            :href="link.href"
            class="text-sm font-bold uppercase tracking-widest transition-colors"
            :class="[activeSection === link.id ? 'text-accent' : 'text-muted-foreground hover:text-accent']"
          >
            {{ t.nav[link.name as keyof typeof t.nav] }}
          </a>
        </div>
        
        <button 
          @click="toggleLanguage"
          class="px-3 py-1 rounded border border-accent/30 text-xs font-bold hover:bg-accent/10 transition-colors text-accent uppercase"
        >
          {{ currentLanguage }}
        </button>
      </div>
    </div>
  </nav>
</template>
