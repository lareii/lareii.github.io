<script setup>
import { ref, onMounted } from 'vue';

const commit = ref(null);

onMounted(async () => {
  const response = await fetch('https://api.github.com/repos/lareii/lareii.github.io/commits');
  if (!response.ok) {
    return;
  }
  const data = await response.json();
  commit.value = data[0]
})
</script>

<template>
  <div class="flex justify-between mt-10 text-sm text-[var(--color-secondary)]">
    <div v-if="commit">
      <font-awesome-icon :icon="['fas', 'code-branch']" />
      {{ commit.sha.slice(0, 7) }} — {{ commit.commit.message }}
    </div>
    <a href="https://github.com/lareii/lareii.github.io" target="_blank" class="underline">gimme a ⭐</a>
  </div>
</template>