<script setup lang="ts">
import SectionContainer from './SectionContainer.vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <SectionContainer id="about" :title="t.about.title">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>
          A results-driven <span class="text-foreground font-semibold">Software Engineer</span> holding a BSc in Computer Science from the University of Rwanda. 
          Currently deepening expertise in <span class="text-accent">DevOps</span>, I bring practical full-stack and system integration experience.
        </p>
        <p>
          I have contributed to high-impact national projects including automated billing integrations and custom Monitoring & Evaluation (M&E) systems. 
          My focus is on strengthening end-to-end software delivery through <span class="text-foreground">CI/CD pipelines</span>, <span class="text-foreground">container orchestration</span>, and <span class="text-foreground">cloud infrastructure</span>.
        </p>
      </div>
      
      <div class="relative group">
        <div class="absolute inset-0 bg-accent/20 rounded-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
        <div class="relative bg-muted p-8 rounded-2xl border border-border">
          <h3 class="text-2xl font-bold mb-4 text-foreground">{{ t.about.mission }}</h3>
          <p class="text-muted-foreground italic">
            "To build resilient, scalable systems that bridge the gap between development and operations, delivering high-value technical solutions at a national scale."
          </p>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>
