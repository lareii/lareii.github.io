<script setup>
import { ref, onMounted } from 'vue';

const commit = ref(null);
const commitError = ref(false);

onMounted(async () => {
  try {
    const response = await fetch('https://api.github.com/repos/lostf1sh/website/commits');
    if (!response.ok) {
      throw new Error('Failed to fetch commits');
    }
    const data = await response.json();
    commit.value = data[0];
  } catch (error) {
    console.error('Error fetching commit:', error);
    commitError.value = true;
  }
});
</script>

<template>
  <div class="flex justify-between mt-10 gap-5 text-sm text-catppuccin-gray">
    <div class="flex gap-2">
      <font-awesome-icon :icon="['fas', 'code-branch']" class="mt-[3px]" />
      <div v-if="commit">{{ commit.sha.slice(0, 7) }} — {{ commit.commit.message }}</div>
      <div v-else-if="commitError">Latest commit could not be retrieved.</div>
      <div v-else>Loading commit...</div>
    </div>
    <a href="https://github.com/lostf1sh/website" target="_blank" class="whitespace-nowrap underline">View Source</a>
  </div>
</template>
