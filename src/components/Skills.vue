<script setup lang="ts">
import SectionContainer from './SectionContainer.vue'
import { Server, Database, Code, Layout, Wrench, Languages } from 'lucide-vue-next'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const skillGroups = [
  {
    name: 'Infra & Ops',
    icon: Server,
    skills: ['Linux', 'Nginx', 'Git', 'ArgoCD', 'Kubernetes (Learning)']
  },
  {
    name: 'Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MariaDB']
  },
  {
    name: 'Backend',
    icon: Code,
    skills: ['Node.js', 'Python', 'Frappe Framework']
  },
  {
    name: 'Frontend & App',
    icon: Layout,
    skills: ['Vue.js', 'Tailwind CSS', 'Flutter', 'Dart']
  },
  {
    name: 'Languages',
    icon: Languages,
    skills: ['Kinyarwanda (Native)', 'English (Professional)', 'French (Intermediate)']
  },
  {
    name: 'Tooling',
    icon: Wrench,
    skills: ['Postman', 'Git']
  }
]
</script>

<template>
  <SectionContainer id="skills" :title="t.skills.title">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="(group, index) in skillGroups" 
        :key="index"
        class="p-8 rounded-2xl bg-muted/30 border border-border hover:border-accent/40 transition-all duration-300 group hover:-translate-y-2"
      >
        <div class="flex items-center gap-4 mb-6">
          <div class="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
            <component :is="group.icon" :size="24" />
          </div>
          <h3 class="text-xl font-bold">{{ group.name }}</h3>
        </div>
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="skill in group.skills" 
            :key="skill"
            class="px-3 py-1 text-sm rounded-full bg-background border border-border text-muted-foreground hover:border-accent/50 hover:text-accent transition-colors"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>
