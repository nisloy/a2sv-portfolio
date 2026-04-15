<script setup lang="ts">
import { useI18n } from '../composables/useI18n'
import { ArrowRight, Download, Terminal } from 'lucide-vue-next'

const { t } = useI18n()
</script>

<template>
  <section class="min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden relative">
    <!-- Background Decoration -->
    <div class="absolute top-1/4 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

    <div class="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative">
      <div class="text-center lg:text-left order-2 lg:order-1">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-black uppercase tracking-wider mb-6">
          <Terminal :size="14" />
          <span>Available for New Projects</span>
        </div>
        
        <h1 class="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-tight">
          {{ t.hero.title }} <span class="text-accent">MUGISHA</span>
        </h1>
        
        <p class="text-xl md:text-2xl text-muted-foreground mb-10 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
          {{ t.hero.subtitle }}. Crafting scalable solutions and automating complex workflows with precision.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a 
            href="#contact" 
            class="px-8 py-4 rounded-xl bg-accent text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-accent/20"
          >
            {{ t.hero.cta }}
            <ArrowRight :size="18" />
          </a>
          
          <a 
            href="/Amuza_MUGISHA_Resume.pdf" 
            target="_blank"
            class="px-8 py-4 rounded-xl border-2 border-border font-bold flex items-center justify-center gap-2 hover:bg-muted/50 active:scale-[0.98] transition-all"
          >
            <Download :size="18" />
            Download CV
          </a>
        </div>
      </div>
      
      <div class="relative order-1 lg:order-2 flex justify-center">
        <div class="w-64 h-64 md:w-80 md:h-80 relative group">
          <div class="absolute inset-0 bg-accent rounded-3xl rotate-6 group-hover:rotate-3 transition-transform duration-500 opacity-20"></div>
          <div class="absolute inset-0 bg-accent rounded-3xl -rotate-3 group-hover:-rotate-1 transition-transform duration-500 opacity-10"></div>
          <div class="relative w-full h-full rounded-3xl overflow-hidden border-4 border-background shadow-2xl">
            <img 
              src="/src/assets/profile11.png" 
              alt="Amuza MUGISHA" 
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          
          <!-- Floating Badge -->
          <div class="absolute -bottom-6 -right-6 bg-background p-4 rounded-2xl shadow-xl border border-border animate-bounce-slow">
            <div class="text-accent font-black text-2xl leading-none">3+</div>
            <div class="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Years Exp.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-bounce-slow {
  animation: bounce-slow 4s infinite ease-in-out;
}

@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>
