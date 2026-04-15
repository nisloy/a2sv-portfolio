<script setup lang="ts">
import SectionContainer from './SectionContainer.vue'
import { useI18n } from '../composables/useI18n'
import { Heart } from 'lucide-vue-next'

const { t } = useI18n()
</script>

<template>
  <SectionContainer id="about" :title="t.about.title">
    <div class="grid md:grid-cols-2 gap-12 items-start">
      <div class="space-y-8">
        <div class="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p v-html="t.about.p1"></p>
          <p v-html="t.about.p2"></p>
        </div>

        <!-- Hobbies Section -->
        <div class="pt-4">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
            <Heart :size="20" class="text-accent" />
            {{ t.about.hobbiesTitle }}
          </h3>
          <div class="flex flex-wrap gap-3">
            <span 
              v-for="hobby in t.about.hobbies" 
              :key="hobby"
              class="px-4 py-2 rounded-xl bg-accent/5 border border-accent/10 text-muted-foreground text-sm font-medium hover:bg-accent/10 hover:text-accent transition-all cursor-default"
            >
              {{ hobby }}
            </span>
          </div>
        </div>
      </div>
      
      <div class="relative group mt-8 md:mt-0">
        <div class="absolute inset-0 bg-accent/20 rounded-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
        <div class="relative bg-muted p-8 rounded-2xl border border-border">
          <h3 class="text-2xl font-bold mb-4 text-foreground">{{ t.about.mission }}</h3>
          <p class="text-muted-foreground italic">
            {{ t.about.missionText }}
          </p>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>
