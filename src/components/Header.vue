<script setup>
import { ref, onMounted } from 'vue';

const discordStatusColor = ref('text-catppuccin-gray');
const spotify = ref(null);
const discordStatus = ref('offline');

onMounted(async () => {
  await fetch('https://api.lanyard.rest/v1/users/470904884946796544')
    .then(response => response.json())
    .then(data => {
      spotify.value = data.data.spotify;
      switch (data.data.discord_status) {
        case 'online':
          discordStatusColor.value = 'text-catppuccin-green';
          discordStatus.value = 'online';
          break;
        case 'idle':
          discordStatusColor.value = 'text-catppuccin-yellow';
          discordStatus.value = 'idle';
          break;
        case 'dnd':
          discordStatusColor.value = 'text-catppuccin-red';
          discordStatus.value = 'do not disturb';
          break;
        default:
          discordStatusColor.value = 'text-catppuccin-gray';
          discordStatus.value = 'offline';
          break;
      }
    })
    .catch(() => {
      return;
    });
})
</script>

<template>
  <div class="font-sans font-black text-5xl">
    moli.lat
  </div>
  <div>
    moli, 16 years-old. chef, professional table tennis player. hyprland enjoyer. 
    sports, music, chemistry.
  </div>
  <div class="flex gap-2 text-sm text-catppuccin-green">
    <font-awesome-icon :icon="['fab', 'spotify']" class="mt-[3px]" />
    <div v-if="spotify">
      i'm currently listening to 
      <a :href="`https://open.spotify.com/track/${spotify.track_id}`" target="_blank" class="underline">
        {{ spotify.song }} - {{ spotify.artist }}
      </a>.
    </div>
    <div v-else>
      i'm not listening to anything right now.
    </div>
  </div>
  <div class="flex gap-2 text-sm mt-2" :class="discordStatusColor">
    <font-awesome-icon :icon="['fab', 'discord']" class="mt-[3px]" />
    <div>
      i'm currently {{ discordStatus }} on discord.
    </div>
  </div>
  <div class="flex gap-10 mt-5 text-xl">
    <a href="https://github.com/lostf1sh/" target="_blank">
      <font-awesome-icon :icon="['fab', 'github']" />
    </a>
    <a href="https://www.instagram.com/lxstf1sh" target="_blank">
      <font-awesome-icon :icon="['fab', 'instagram']" />
    </a>
    <a href="https://discord.com/user/470904884946796544" target="_blank">
      <font-awesome-icon :icon="['fab', 'discord']" />
    </a>
  </div>
</template>
