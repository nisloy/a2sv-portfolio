<script setup lang="ts">
import SectionContainer from './SectionContainer.vue'
import { Briefcase } from 'lucide-vue-next'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <SectionContainer id="experience" :title="t.experience.title">
    <div class="space-y-16">
      <div v-for="(exp, index) in t.experience.items" :key="index" class="relative pl-12">
        <!-- Timeline line -->
        <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-accent/30 rounded-full"></div>
        
        <!-- Icon -->
        <div class="absolute left-0 top-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground">
          <Briefcase :size="16" />
        </div>

        <div class="flex flex-col md:flex-row md:items-baseline justify-between mb-8">
          <div>
            <h3 class="text-2xl font-bold text-foreground">{{ exp.role }}</h3>
            <p class="text-xl text-accent/80 font-medium">{{ exp.company }} — {{ exp.location }}</p>
          </div>
          <span class="text-muted-foreground font-medium md:text-right mt-2 md:mt-0">{{ exp.period }}</span>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div 
            v-for="(point, pIndex) in exp.highlights" 
            :key="pIndex"
            class="bg-muted/50 p-6 rounded-xl border border-border hover:border-accent/50 transition-colors"
          >
            <h4 class="text-lg font-bold mb-2 text-foreground">• {{ point.title }}</h4>
            <p class="text-muted-foreground">{{ point.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>
