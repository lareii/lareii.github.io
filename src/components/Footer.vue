<script setup>
import { ref, onMounted } from 'vue';

const commit = ref(null);

onMounted(async () => {
  await fetch('https://api.github.com/repos/lostf1sh/website/commits')
    .then(response => response.json())
    .then(data => {
      commit.value = data[0]
    })
    .catch(() => {
      return;
    });
})
</script>

<template>
  <div class="flex justify-between mt-10 gap-5 text-sm text-catppuccin-gray">
    <div class="flex gap-2">
      <font-awesome-icon :icon="['fas', 'code-branch']" class="mt-[3px]" />
      <div v-if="commit">{{ commit.sha.slice(0, 7) }} — {{ commit.commit.message }}</div>
      <div v-else>latest commit could not be retrieved.</div>
    </div>
    <a href="https://api.github.com/repos/lostf1sh/lostf1sh.github.io" target="_blank" class="whitespace-nowrap underline">i ❤️ boobs</a>
  </div>
</template>
