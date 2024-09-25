<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const ws = ref(null);
const status = ref("text-gruvbox-gray");

const vscode = ref(null);
const spotify = ref(null);

const connectWebSocket = () => {
  ws.value = new WebSocket("wss://api.lanyard.rest/socket");
  ws.value.onopen = () => {
    console.log("WebSocket connection established.");
    ws.value.send(
      JSON.stringify({
        op: 2,
        d: { subscribe_to_id: "748539900793716887" },
      }),
    );
  };

  ws.value.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.t === "INIT_STATE" || data.t === "PRESENCE_UPDATE") {
      const presence = data.d;
      spotify.value = presence.spotify;
      vscode.value = presence.activities.find(
        (activity) => activity.name === "Visual Studio Code",
      );

      switch (presence.discord_status) {
        case "online":
          status.value = "text-gruvbox-green";
          break;
        case "idle":
          status.value = "text-gruvbox-yellow";
          break;
        case "dnd":
          status.value = "text-gruvbox-red";
          break;
        case "offline":
          status.value = "text-gruvbox-gray";
          break;
      }

      ws.value.onerror = (error) => {
        console.error("WebSocket error: ", error);
      };

      ws.value.onclose = () => {
        console.log("WebSocket connection closed.");
      };
    }
  };
};

onMounted(async () => {
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
    babaoglu<span :class="['text-2xl', status]">.dev</span>
  </div>
  <div>
    emirhan (aka larei), 18 years-old. self-taught developer,
    <a href="https://www.youtube.com/watch?v=9sJUDx7iEJw" target="_blank" class="underline">open-source</a>
    enthusiast. programming, music, math.
  </div>
  <div class="flex items-center gap-2 text-sm text-gruvbox-gray">
    <font-awesome-icon :icon="['fab', 'spotify']" class="w-4 h-4 mr-0.5" />
    <div v-if="spotify">
      i'm currently listening to
      <a :href="`https://open.spotify.com/track/${spotify.track_id}`" target="_blank" class="font-black underline">{{
        spotify.song }} - {{ spotify.artist }}</a>.
    </div>
    <div v-else>i'm not listening to anything right now.</div>
  </div>
  <div class="flex items-center gap-2 text-sm text-gruvbox-gray">
    <font-awesome-icon :icon="['fas', 'code']" class="w-4 h-4 mr-0.5" />
    <div v-if="vscode">
      i'm currently working on
      <span class="font-black">{{ vscode.details }}</span>
      <span v-if="vscode.state"> in <span class="font-black">{{ vscode.state }}</span></span>
    </div>
    <div v-else>i'm not working on anything right now.</div>
  </div>
  <div class="flex gap-10 mt-5 text-xl">
    <a href="https://github.com/lareii/" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /></a>
    <a href="https://www.linkedin.com/in/larei/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
    <a href="https://discord.com/users/748539900793716887" target="_blank"><font-awesome-icon :icon="['fab', 'discord']" /></a>
  </div>
</template>
