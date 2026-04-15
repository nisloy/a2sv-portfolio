<script setup lang="ts">
import { ref } from 'vue'
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-vue-next'
import { useI18n } from '../composables/useI18n'
import ViewCounter from './ViewCounter.vue'

const { t } = useI18n()
const formStatus = ref<'idle' | 'sending' | 'success' | 'error'>('idle')

const socialLinks = [
  { icon: Github, href: 'https://github.com/amuzamugisha', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/amuzamugisha', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/amuzamugisha', label: 'Twitter' },
  { icon: Mail, href: 'mailto:nisloyamuza@gmail.com', label: 'Email' }
]

// Note: Using Formspree for the contact form
const handleSubmit = async (e: Event) => {
  formStatus.value = 'sending'
  const form = e.target as HTMLFormElement
  const formData = new FormData(form)
  
  try {
    const response = await fetch('https://formspree.io/f/mqakvjnd', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    
    if (response.ok) {
      formStatus.value = 'success'
      form.reset()
    } else {
      formStatus.value = 'error'
    }
  } catch (error) {
    formStatus.value = 'error'
  }
}
</script>

<template>
  <section id="contact" class="section-padding bg-muted/30">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-5xl font-black mb-4 tracking-tight uppercase">{{ t.contact.title }}</h2>
        <div class="w-20 h-2 bg-accent mx-auto rounded-full mb-6"></div>
        <p class="text-muted-foreground max-w-xl mx-auto text-lg">
          {{ t.contact.placeholderMsg }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-start">
        <!-- Contact Info -->
        <div class="space-y-8">
          <div>
            <h3 class="text-xl font-bold mb-6">Let's Connect</h3>
            <div class="flex flex-col gap-4">
              <a 
                v-for="social in socialLinks" 
                :key="social.label"
                :href="social.href"
                target="_blank"
                class="flex items-center gap-4 p-4 rounded-xl border border-border bg-background hover:border-accent hover:shadow-md transition-all group"
              >
                <div class="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <component :is="social.icon" :size="20" />
                </div>
                <span class="font-medium">{{ social.label }}</span>
              </a>
            </div>
          </div>
          
          <div class="p-6 rounded-2xl bg-accent/5 border border-accent/10 text-center">
            <ViewCounter />
            <p class="text-xs text-muted-foreground mt-4 italic">
              "Building the future, one commit at a time."
            </p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-background p-8 rounded-2xl border border-border shadow-sm">
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label class="block text-sm font-bold mb-1.5 ml-1">{{ t.contact.name }}</label>
              <input 
                type="text" 
                name="name" 
                required 
                :placeholder="t.contact.placeholderName"
                class="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
              />
            </div>
            
            <div>
              <label class="block text-sm font-bold mb-1.5 ml-1">{{ t.contact.email }}</label>
              <input 
                type="email" 
                name="email" 
                required 
                :placeholder="t.contact.placeholderEmail"
                class="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
              />
              <input type="hidden" name="_to" value="nisloyamuza@gmail.com">
            </div>
            
            <div>
              <label class="block text-sm font-bold mb-1.5 ml-1">{{ t.contact.message }}</label>
              <textarea 
                name="message" 
                required 
                rows="4" 
                :placeholder="t.contact.placeholderMsg"
                class="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              :disabled="formStatus === 'sending'"
              class="w-full py-4 rounded-xl bg-accent text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50"
            >
              <template v-if="formStatus === 'sending'">
                <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                {{ t.contact.sending }}
              </template>
              <template v-else-if="formStatus === 'success'">
                {{ t.contact.sent }}
              </template>
              <template v-else>
                <Send :size="18" />
                {{ t.contact.send }}
              </template>
            </button>
            
            <p v-if="formStatus === 'success'" class="text-sm text-green-500 font-medium text-center mt-2">
              {{ t.contact.thanks }}
            </p>
            <p v-if="formStatus === 'error'" class="text-sm text-red-500 font-medium text-center mt-2">
              {{ t.contact.error }}
            </p>
          </form>
        </div>
      </div>
      
      <div class="mt-24 pt-8 border-t border-border text-center text-sm text-muted-foreground font-medium">
        &copy; {{ new Date().getFullYear() }} Amuza MUGISHA. All rights reserved.
      </div>
    </div>
  </section>
</template>
