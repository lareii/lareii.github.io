<script setup>
import { ref, onMounted } from 'vue';

const status = ref('text-gruvbox-gray');
const spotify = ref(null);

onMounted(async () => {
  await fetch('https://api.lanyard.rest/v1/users/748539900793716887')
    .then(response => response.json())
    .then(data => {
      spotify.value = data.data.spotify;
      switch (data.data.discord_status) {
        case 'online':
          status.value = 'text-gruvbox-green';
          break;
        case 'idle':
          status.value = 'text-gruvbox-yellow';
          break;
        case 'dnd':
          status.value = 'text-gruvbox-red';
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
    babaoglu<span :class="['text-2xl', status]">.dev</span>
  </div>
  <div>emirhan (aka larei), 18 years-old. mathematics student, self-taught developer, <a href="https://www.youtube.com/watch?v=9sJUDx7iEJw" target="_blank" class="underline">open-source</a> enthusiast. programming, music, math.</div>
  <div class="flex gap-2 text-sm text-gruvbox-gray">
    <font-awesome-icon :icon="['fab', 'spotify']" class="mt-[3px]" />
    <div v-if="spotify">
      i'm currently listening to <a :href="`https://open.spotify.com/track/${spotify.track_id}`" target="_blank"
        class="font-black underline">{{ spotify.song }} - {{ spotify.artist }}</a>.
    </div>
    <div v-else>
      i'm not listening to anything right now.
    </div>
  </div>
  <div class="flex gap-10 mt-5 text-xl">
    <a href="https://github.com/lareii/" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /></a>
    <a href="https://www.linkedin.com/in/larei/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
    <a href="https://discord.gg/6FwNtZdbWH" target="_blank"><font-awesome-icon :icon="['fab', 'discord']" /></a>
  </div>
</template>