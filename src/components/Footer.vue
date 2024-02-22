<script setup>
import { ref, onMounted } from 'vue';

const currentTime = ref(null);

const updateTime = () => {
  const now = new Date();
  const options = {
    timeZone: 'Europe/Istanbul',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  };
  currentTime.value = now.toLocaleTimeString('tr-TR', options);
};
onMounted(() => {
  updateTime();
  setInterval(updateTime, 1000);
});
</script>

<template>
  <div class="flex justify-between mt-10 text-sm text-[var(--color-secondary)]">
    <div>
      <font-awesome-icon :icon="['fas', 'clock']" />
      {{ currentTime }} (UTC +03:00)
    </div>
    <a class="underline">gimme a ⭐</a>
  </div>
</template>