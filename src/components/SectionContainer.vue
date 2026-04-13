<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

defineProps<{
  id: string
  title?: string
}>()

const target = ref(null)
const isVisible = ref(false)

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    if (isIntersecting) isVisible.value = true
  },
  { threshold: 0.1 }
)
</script>

<template>
  <section 
    :id="id" 
    ref="target"
    class="section-padding transition-all duration-1000 transform"
    :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
  >
    <div class="max-w-6xl mx-auto">
      <h2 v-if="title" class="text-3xl md:text-4xl font-bold mb-12 text-accent">
        {{ title }}
      </h2>
      <slot />
    </div>
  </section>
</template>
