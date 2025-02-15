<script setup>
import { ref, onMounted } from 'vue';

const projects = ['lareii.github.io', 'copl.uk', 'FdF', 'colorify']
const repos = ref([]);

onMounted(async () => {
  await fetch('https://api.github.com/users/lareii/repos')
    .then(response => response.json())
    .then(data => {
      data.sort((a, b) => b.stargazers_count - a.stargazers_count);

      data.forEach(repo => {
        if (projects.includes(repo.name)) {
          repos.value.push(repo);
        }
      });
    })
    .catch(() => {
      return;
    });
})
</script>

<template>
  <div class="mb-2 font-black text-2xl">projects/</div>
  <div class="grid md:grid-cols-2 gap-2">
    <div v-if="!repos.length">projects could not be retrieved.</div>
    <a v-for="repo in repos" :href="repo.html_url" target="_blank"
      class="flex flex-col justify-between px-5 py-3 bg-[#202020]/[.3] border-[#504945] border-[0.5px] rounded-lg text-sm">
      <div>
        <div class="flex items-center gap-1 text-gruvbox-gray">
          <img :src="repo.owner.avatar_url" class="rounded-full w-4">
          {{ repo.owner.login }}
        </div>
        <div :class="['font-bold', 'text-lg', repo.archived ? 'line-through' : '']">{{ repo.name }}</div>
        <div>{{ repo.description }}</div>
      </div>
      <div class="flex mt-2 gap-5">
        <div>
          <font-awesome-icon :icon="['fas', 'star']" />
          {{ repo.stargazers_count }}
        </div>
        <div>
          <font-awesome-icon :icon="['fas', 'code-branch']" />
          {{ repo.forks_count }}
        </div>
      </div>
    </a>
  </div>
</template>