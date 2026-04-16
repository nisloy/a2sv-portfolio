<script setup lang="ts">
defineProps<{
  id: string
  title?: string
}>()
</script>

<template>
  <section 
    :id="id" 
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
