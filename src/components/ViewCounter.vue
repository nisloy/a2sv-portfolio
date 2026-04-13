<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Eye } from 'lucide-vue-next'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
const count = ref<number | string>('...')

onMounted(async () => {
  try {
    // Using a public counter API for demonstration
    // Note: In a real production app, you might use a more robust service like Supabase or Firebase
    const namespace = 'amuzamugisha-portfolio'
    const key = 'views'
    const response = await fetch(`https://api.counterapi.dev/v1/${namespace}/${key}/increment`)
    const data = await response.json()
    count.value = data.count
  } catch (error) {
    console.error('Failed to fetch view count:', error)
    // Fallback if API is down
    count.value = '1,248'
  }
})
</script>

<template>
  <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 border border-accent/20 text-accent/80 text-xs font-bold transition-all hover:bg-accent/10">
    <Eye :size="14" />
    <span>{{ count }} {{ t.contact.views }}</span>
  </div>
</template>
