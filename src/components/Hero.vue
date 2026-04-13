<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ArrowDown } from 'lucide-vue-next'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
const mounted = ref(false)
onMounted(() => {
  mounted.value = true
})
</script>

<template>
  <header class="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
    <!-- Animated background subtle effect -->
    <div class="absolute inset-0 z-0">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-accent opacity-5 blur-[120px] rounded-full animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent opacity-5 blur-[120px] rounded-full animate-pulse delay-700"></div>
    </div>

    <div class="z-10 text-center px-4 space-y-6">
      <h1 
        class="text-6xl md:text-8xl font-black tracking-tighter transition-all duration-1000 delay-300 transform"
        :class="[mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        {{ t.hero.title }} <span class="text-accent">MUGISHA</span>
      </h1>
      
      <p 
        class="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto transition-all duration-1000 delay-500 transform"
        :class="[mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        {{ t.hero.subtitle }}
      </p>

      <div 
        class="pt-10 transition-all duration-1000 delay-700 transform"
        :class="[mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
      >
        <a 
          href="#about" 
          class="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-bold hover:scale-105 active:scale-95 transition-transform"
        >
          {{ t.hero.cta }}
          <ArrowDown :size="20" />
        </a>
      </div>
    </div>

    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
      <ArrowDown :size="24" />
    </div>
  </header>
</template>
