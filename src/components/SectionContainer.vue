<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  id: string
  title?: string
}>()

const target = ref(null)
// Intersection observer simplified for now to ensure visibility
</script>

<template>
  <section 
    :id="id" 
    ref="target"
    class="section-padding"
  >
    <div class="max-w-6xl mx-auto">
      <div v-if="title" class="mb-12">
        <h2 class="text-3xl md:text-5xl font-black tracking-tight mb-4 uppercase">
          {{ title }}
        </h2>
        <div class="w-16 h-2 bg-accent rounded-full"></div>
      </div>
      <slot />
    </div>
  </section>
</template>
