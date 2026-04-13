<script setup lang="ts">
import SectionContainer from './SectionContainer.vue'
import { GraduationCap, Award } from 'lucide-vue-next'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const education = [
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
]

const awards = [
  {
    title: 'Best Performer — National Examination',
    institution: 'Nyagatare Secondary School',
    description: 'Recognized for outstanding academic performance at the national level.'
  }
]
</script>

<template>
  <SectionContainer id="education" :title="t.education.title">
    <div class="grid md:grid-cols-2 gap-12">
      <div class="space-y-8">
        <div v-for="(edu, index) in education" :key="index" class="relative pl-8">
          <div class="absolute left-0 top-1 text-accent">
            <GraduationCap :size="20" />
          </div>
          <h3 class="text-xl font-bold">{{ edu.degree }}</h3>
          <p class="text-accent/80 font-medium">{{ edu.institution }} <span v-if="edu.period" class="text-muted-foreground ml-2">({{ edu.period }})</span></p>
          <p class="mt-2 text-muted-foreground">{{ edu.description }}</p>
        </div>
      </div>

      <div class="space-y-8">
        <div v-for="(award, index) in awards" :key="index" class="p-6 rounded-2xl bg-accent/5 border border-accent/20 flex gap-4">
          <div class="text-accent shrink-0">
            <Award :size="24" />
          </div>
          <div>
            <h3 class="text-xl font-bold mb-1">{{ award.title }}</h3>
            <p class="text-accent/80 font-medium mb-2">{{ award.institution }}</p>
            <p class="text-muted-foreground">{{ award.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>
