<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const discordStatusColor = ref('text-catppuccin-gray');
const spotify = ref(null);
const discordStatus = ref('offline');
const vscodeActivity = ref(null);
const ws = ref(null);
let reconnectAttempts = 0;
const maxReconnectAttempts = 5;

const connectWebSocket = () => {
  ws.value = new WebSocket('wss://api.lanyard.rest/socket');

  ws.value.onopen = () => {
    reconnectAttempts = 0;
    ws.value.send(JSON.stringify({
      op: 2,
      d: { subscribe_to_id: '470904884946796544' }
    }));
  };

  ws.value.onmessage = (event) => {
    const message = JSON.parse(event.data);
    if (message.t === "INIT_STATE" || message.t === "PRESENCE_UPDATE") {
      const data = message.d;

      spotify.value = data.spotify;
      vscodeActivity.value = data.vscode; // Add VSCode handling

      switch (data.discord_status) {
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
    }
  };

  ws.value.onerror = (error) => {
    console.error('WebSocket error', error);
  };

  ws.value.onclose = () => {
    console.log('WebSocket connection closed');
    if (reconnectAttempts < maxReconnectAttempts) {
      setTimeout(connectWebSocket, Math.pow(2, reconnectAttempts) * 1000);
      reconnectAttempts++;
    }
  };
};

onMounted(() => {
  connectWebSocket();
});

onUnmounted(() => {
  if (ws.value) {
    ws.value.close();
  }
});
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
  <div v-if="vscodeActivity" class="flex gap-2 text-sm mt-2 text-catppuccin-blue">
    <font-awesome-icon :icon="['fab', 'code']" class="mt-[3px]" />
    <div>
      i'm currently editing <strong>{{ vscodeActivity.file }}</strong> using {{ vscodeActivity.language }}.
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
