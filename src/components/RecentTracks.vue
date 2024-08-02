<template>
  <div class="mt-8">
    <h2 class="text-2xl font-bold mb-4 text-catppuccin-milk">songs/</h2>
    <div v-if="loading" class="text-catppuccin-gray text-center">Loading...</div>
    <div v-else-if="error" class="text-catppuccin-red text-center">{{ error }}</div>
    <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      <div
        v-for="track in displayedTracks"
        :key="`${track.name}-${track.artist['#text']}-${updateCounter}`"
        class="border border-catppuccin-gray p-2 rounded-md bg-catppuccin-dark cursor-pointer text-center transition-all duration-300 hover:bg-catppuccin-milk hover:bg-opacity-20"
        @click="goToTrack(track.url)"
      >
        <img :src="track.image[2]['#text']" alt="track image" class="w-full rounded-md mb-2" />
        <div class="text-sm">
          <p class="font-bold mb-1 text-catppuccin-milk truncate" :title="track.name">{{ track.name }}</p>
          <p class="text-catppuccin-gray truncate" :title="track.artist['#text']">{{ track.artist['#text'] }}</p>
          <p v-if="track['@attr']?.nowplaying" class="text-catppuccin-green">Now Playing</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getRecentTracks } from '@/services/lastfmService';
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const allTracks = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const updateCounter = ref(0);
    let updateInterval = null;

    const displayedTracks = computed(() => {
      let tracks = allTracks.value;
      let currentTrack = tracks.find(track => track['@attr']?.nowplaying);
      let recentTracks = tracks.filter(track => !track['@attr']?.nowplaying);

      // Remove duplicates
      const uniqueTracks = [];
      const seen = new Set();
      for (const track of recentTracks) {
        const key = `${track.name}-${track.artist['#text']}`;
        if (!seen.has(key)) {
          seen.add(key);
          uniqueTracks.push(track);
        }
      }

      // If there's a current track, show it first and 5 recent tracks
      if (currentTrack) {
        return [currentTrack, ...uniqueTracks.slice(0, 5)];
      } 
      // If no current track, show 6 recent tracks
      else {
        return uniqueTracks.slice(0, 6);
      }
    });

    const fetchTracks = async () => {
      try {
        loading.value = true;
        const newTracks = await getRecentTracks();
        allTracks.value = newTracks;
        updateCounter.value++; // Force re-render
        error.value = null;
      } catch (err) {
        error.value = "Failed to load tracks. Please try again later.";
        console.error('Error fetching tracks:', err);
      } finally {
        loading.value = false;
      }
    };

    const goToTrack = (url) => {
      window.open(url, '_blank');
    };

    onMounted(() => {
      fetchTracks();
      updateInterval = setInterval(fetchTracks, 30000); // Her 30 saniyede bir güncelle
    });

    onBeforeUnmount(() => {
      if (updateInterval) {
        clearInterval(updateInterval);
      }
    });

    return {
      displayedTracks,
      loading,
      error,
      updateCounter,
      goToTrack
    };
  }
};
</script>
