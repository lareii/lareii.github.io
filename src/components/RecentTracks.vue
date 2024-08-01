<template>
  <div class="mt-8">
    <h2 class="text-2xl font-bold mb-4 text-catppuccin-milk">songs/</h2>
    <div v-if="loading" class="text-catppuccin-gray text-center">Loading...</div>
    <div v-else-if="error" class="text-catppuccin-red text-center">{{ error }}</div>
    <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
      <div
        v-for="(track, index) in tracks"
        :key="`${track.date?.uts || track.url}-${updateCounter}-${index}`"
        class="border border-catppuccin-gray p-2 rounded-md bg-catppuccin-dark cursor-pointer text-center transition-all duration-300 hover:bg-catppuccin-milk hover:bg-opacity-20"
        @click="goToTrack(track.url)"
      >
        <img :src="track.image[2]['#text']" alt="track image" class="w-full rounded-md mb-2" />
        <div class="text-sm">
          <p class="font-bold mb-1 text-catppuccin-milk truncate" :title="track.name">{{ track.name }}</p>
          <p class="text-catppuccin-gray truncate" :title="track.artist['#text']">{{ track.artist['#text'] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getRecentTracks } from '@/services/lastfmService';
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const tracks = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const updateCounter = ref(0);
    let updateInterval = null;

    const fetchTracks = async () => {
      try {
        loading.value = true;
        const newTracks = await getRecentTracks();
        tracks.value = newTracks;
        updateCounter.value++;
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
      tracks,
      loading,
      error,
      updateCounter,
      goToTrack
    };
  }
};
</script>