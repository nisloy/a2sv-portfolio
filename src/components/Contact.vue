<script setup lang="ts">
import SectionContainer from './SectionContainer.vue'
import ViewCounter from './ViewCounter.vue'
import { Mail, Phone, Linkedin, Gitlab } from 'lucide-vue-next'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const contacts = [
  {
    label: 'Email',
    value: 'nisloyamuza@gmail.com',
    href: 'mailto:nisloyamuza@gmail.com',
    icon: Mail
  },
  {
    label: 'Phone',
    value: '+250 783 527 013',
    href: 'tel:+250783527013',
    icon: Phone
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/amuzamugisha',
    href: 'https://linkedin.com/in/amuzamugisha',
    icon: Linkedin
  },
  {
    label: 'GitLab',
    value: 'gitlab.com/nisloy',
    href: 'https://gitlab.com/nisloy',
    icon: Gitlab
  }
]
</script>

<template>
  <SectionContainer id="contact" :title="t.contact.title">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <a 
        v-for="contact in contacts" 
        :key="contact.label"
        :href="contact.href"
        target="_blank"
        class="flex flex-col items-center p-8 rounded-2xl bg-muted/50 border border-border hover:border-accent/50 hover:bg-accent/5 transition-all group"
      >
        <div class="p-4 rounded-full bg-background text-accent mb-4 group-hover:scale-110 transition-transform">
          <component :is="contact.icon" :size="24" />
        </div>
        <span class="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{{ contact.label }}</span>
        <span class="text-foreground font-medium text-center break-all">{{ contact.value }}</span>
      </a>
    </div>
    
    <footer class="mt-24 pt-8 border-t border-border text-center text-muted-foreground text-sm flex flex-col items-center gap-6">
      <ViewCounter />
      <p>© {{ new Date().getFullYear() }} Amuza MUGISHA. Built with Vue.js & Tailwind CSS.</p>
    </footer>
  </SectionContainer>
</template>
