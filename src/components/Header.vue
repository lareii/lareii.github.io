<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
// axios is not used in the user-provided script for Lanyard, so removing unless needed for something else later.
// import axios from 'axios'; 

const discordStatusColor = ref('text-catppuccin-subtle'); // Default from new theme
const spotify = ref(null);
const discordStatus = ref('offline');
const vscodeActivity = ref(null); // Using user's variable name
const ws = ref(null);

// Removed fetchLanguageColors, getLanguageFromFile, languageColors, and currentLanguageColor

const vscodeStatus = computed(() => {
  if (!vscodeActivity.value) return null;
  
  // The user's example shows details like "Editing Projects.vue"
  // and state like "Workspace: website"
  // The toLowerCase().includes('idling') check might be too specific if Lanyard doesn't always use that for idling.
  // For now, let's assume if details are generic like "Idling", Lanyard sends that.
  // If Lanyard payload has a specific activity_type or similar for idling, that would be more robust.
  if (vscodeActivity.value.details && vscodeActivity.value.details.toLowerCase().includes('idling')) {
    return 'idling';
  }
  return {
    name: vscodeActivity.value.name, // Keep the name of the app (e.g., Visual Studio Code)
    details: vscodeActivity.value.details, // e.g., "Editing Projects.vue"
    state: vscodeActivity.value.state // e.g., "Workspace: website"
  };
});

const connectWebSocket = () => {
  ws.value = new WebSocket('wss://api.lanyard.rest/socket');

  ws.value.onopen = () => {
    ws.value.send(JSON.stringify({
      op: 2,
      d: { subscribe_to_id: '470904884946796544' } // User's ID
    }));
  };

  ws.value.onmessage = (event) => {
    try {
      const message = JSON.parse(event.data);
      if (message.t === "INIT_STATE" || message.t === "PRESENCE_UPDATE") {
        const data = message.d;
        if (!data) return;

        spotify.value = data.spotify;
        // Using user's exact logic for finding VS Code activity
        vscodeActivity.value = data.activities.find(activity => activity && activity.name === "Visual Studio Code") || null;

        switch (data.discord_status) {
          case 'online':
            discordStatusColor.value = 'text-catppuccin-green';
            discordStatus.value = 'online';
            break;
          case 'idle':
            discordStatusColor.value = 'text-catppuccin-gold'; // Was user's text-catppuccin-yellow (#fabd2f)
            discordStatus.value = 'idle';
            break;
          case 'dnd':
            discordStatusColor.value = 'text-catppuccin-red';
            discordStatus.value = 'do not disturb';
            break;
          default:
            discordStatusColor.value = 'text-catppuccin-subtle'; // User had text-catppuccin-gray, subtle is a good new equivalent
            discordStatus.value = 'offline';
            break;
        }
      }
    } catch (e) {
      console.error('Error processing Lanyard message:', e);
      vscodeActivity.value = null;
      spotify.value = null;
      discordStatus.value = 'offline'; 
      discordStatusColor.value = 'text-catppuccin-subtle';
    }
  };

  ws.value.onerror = (error) => {
    console.error('WebSocket error (Lanyard):', error);
    vscodeActivity.value = null;
    spotify.value = null;
    discordStatus.value = 'offline';
    discordStatusColor.value = 'text-catppuccin-subtle';
  };

  ws.value.onclose = () => {
    console.log('WebSocket connection closed (Lanyard)');
    vscodeActivity.value = null;
    spotify.value = null;
    discordStatus.value = 'offline';
    discordStatusColor.value = 'text-catppuccin-subtle';
  };
};

onMounted(() => {
  connectWebSocket();
  // fetchLanguageColors(); // Removed
});

onUnmounted(() => {
  if (ws.value) {
    ws.value.close();
  }
});
</script>

<template>
  <div class="font-sans font-black text-5xl text-catppuccin-mauve animate-fade-in">
    f1sh.pics
  </div>
  <div class="mt-2 text-catppuccin-text animate-fade-in" style="animation-delay: 0.1s;">
    moli, aka duhan. 16 years-old. chef, professional table tennis player. hyprland enjoyer.
    sports, music, chemistry. contact : lostf1sh@outlook.com
  </div>

  <!-- Lanyard Section -->
  <div class="mt-6 animate-slide-up" style="animation-delay: 0.2s;">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Spotify Card -->
      <div class="lanyard-card flex items-center gap-3 p-3 rounded-lg text-sm bg-catppuccin-surface/30 border-catppuccin-overlay border-[0.5px] hover:bg-catppuccin-surface hover:border-catppuccin-text transition-all duration-300">
        <font-awesome-icon :icon="['fab', 'spotify']" class="text-2xl text-catppuccin-green w-6 h-6" />
        <div class="text-sm font-sans">
          <div v-if="spotify" class="text-catppuccin-text">
            Listening to 
            <a :href="`https://open.spotify.com/track/${spotify.track_id}`" target="_blank" class="underline hover:text-catppuccin-green">
              {{ spotify.song }} - {{ spotify.artist }}
            </a>.
          </div>
          <div v-else class="text-catppuccin-subtle">
            Not listening to anything.
          </div>
        </div>
      </div>

      <!-- Discord Card -->
      <div class="lanyard-card flex items-center gap-3 p-3 rounded-lg text-sm bg-catppuccin-surface/30 border-catppuccin-overlay border-[0.5px] hover:bg-catppuccin-surface hover:border-catppuccin-text transition-all duration-300">
        <font-awesome-icon :icon="['fab', 'discord']" class="text-2xl w-6 h-6" :class="discordStatusColor" />
        <div class="text-sm font-sans">
          <div :class="discordStatusColor">
            {{ discordStatus.charAt(0).toUpperCase() + discordStatus.slice(1) }} on Discord.
          </div>
        </div>
      </div>

      <!-- VS Code Card: Conditional on vscodeActivity -->
      <div v-if="vscodeActivity" class="lanyard-card flex items-center gap-3 p-3 rounded-lg text-sm bg-catppuccin-surface/30 border-catppuccin-overlay border-[0.5px] hover:bg-catppuccin-surface hover:border-catppuccin-text transition-all duration-300">
        <font-awesome-icon :icon="['fas', 'code']" class="text-2xl w-6 h-6 text-catppuccin-blue" /> 
        <div class="text-sm text-catppuccin-text font-sans">
          <div v-if="typeof vscodeStatus === 'string' && vscodeStatus === 'idling'">
            Currently idling.
          </div>
          <div v-else-if="vscodeStatus && vscodeStatus.details">
            <strong>{{ vscodeStatus.details }}</strong>
            <span v-if="vscodeStatus.state"> in {{ vscodeStatus.state }}</span>.
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Social Links -->
  <div class="flex gap-6 mt-8 text-2xl animate-fade-in" style="animation-delay: 0.3s;">
    <a href="https://github.com/lostf1sh/" target="_blank" class="text-catppuccin-subtle hover:text-catppuccin-mauve transition-colors duration-300">
      <font-awesome-icon :icon="['fab', 'github']" />
    </a>
    <a href="https://www.instagram.com/lxstf1sh" target="_blank" class="text-catppuccin-subtle hover:text-catppuccin-pink transition-colors duration-300">
      <font-awesome-icon :icon="['fab', 'instagram']" />
    </a>
    <a href="https://discord.com/user/470904884946796544" target="_blank" class="text-catppuccin-subtle hover:text-catppuccin-blue transition-colors duration-300">
      <font-awesome-icon :icon="['fab', 'discord']" />
    </a>
  </div>
</template>
