<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import axios from 'axios';

const discordStatusColor = ref('text-catppuccin-gray');
const spotify = ref(null);
const discordStatus = ref('offline');
const vscodeActivity = ref(null);
const ws = ref(null);
const languageColors = ref({});

const fetchLanguageColors = async () => {
  try {
    const response = await axios.get('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json');
    languageColors.value = response.data;
  } catch (error) {
    console.error('Error fetching language colors:', error);
  }
};

const getLanguageFromFile = (filename) => {
  if (!filename) return 'default';
  const ext = filename.split('.').pop().toLowerCase();
  const extensionMap = {
    // Programming Languages
    'js': 'JavaScript',
    'ts': 'TypeScript',
    'py': 'Python',
    'java': 'Java',
    'html': 'HTML',
    'css': 'CSS',
    'php': 'PHP',
    'c': 'C',
    'cpp': 'C++',
    'cs': 'C#',
    'go': 'Go',
    'rb': 'Ruby',
    'rs': 'Rust',
    'swift': 'Swift',
    'kt': 'Kotlin',
    'scala': 'Scala',
    'groovy': 'Groovy',
    'pl': 'Perl',
    'lua': 'Lua',
    'r': 'R',
    'dart': 'Dart',
    'f': 'Fortran',
    'f90': 'Fortran',
    'hs': 'Haskell',
    'jl': 'Julia',
    'lisp': 'Lisp',
    'ml': 'OCaml',
    'pas': 'Pascal',
    'sql': 'SQL',
    'sh': 'Shell',
    'vb': 'Visual Basic',
    'asm': 'Assembly',
    'clj': 'Clojure',
    'erl': 'Erlang',
    'ex': 'Elixir',
    'fs': 'F#',
    'm': 'Objective-C',
    'php': 'PHP',
    'rkt': 'Racket',
    'scm': 'Scheme',
    'tex': 'TeX',
    'vim': 'Vim script',
    'zig': 'Zig',

    // Web Technologies and Frameworks
    'jsx': 'React',
    'tsx': 'React',
    'vue': 'Vue',
    'svelte': 'Svelte',
    'angular': 'Angular',
    'ember': 'Ember',
    'backbone': 'Backbone.js',
    'preact': 'Preact',
    'mjs': 'Node.js',
    'graphql': 'GraphQL',
    'prisma': 'Prisma',
    'astro': 'Astro',

    // Markup and Style
    'md': 'Markdown',
    'scss': 'SCSS',
    'sass': 'Sass',
    'less': 'Less',
    'styl': 'Stylus',
    'pug': 'Pug',
    'haml': 'Haml',
    'slim': 'Slim',
    'xml': 'XML',
    'yaml': 'YAML',
    'toml': 'TOML',

    // Data Formats
    'json': 'JSON',
    'csv': 'CSV',

    // Configuration
    'dockerfile': 'Dockerfile',
    'ini': 'INI',
    'editorconfig': 'EditorConfig',
    'gitignore': 'Git',
    'env': 'DotENV',

    // Build Tools
    'gradle': 'Gradle',
    'maven': 'Maven',
    'ant': 'Ant',

    // Others
    'ipynb': 'Jupyter Notebook',
    'proto': 'Protocol Buffers',
    'sol': 'Solidity',
  };
  return extensionMap[ext] || 'default';
};

const currentLanguageColor = computed(() => {
  if (vscodeActivity.value) {
    const language = getLanguageFromFile(vscodeActivity.value.details.split(' ').pop());
    return `color: ${languageColors.value[language]?.color || '#4F5D95'}`;
  }
  return '';
});

const vscodeStatus = computed(() => {
  if (!vscodeActivity.value) return null;
  
  if (vscodeActivity.value.details.toLowerCase().includes('idling')) {
    return 'idling';
  } else {
    return {
      details: vscodeActivity.value.details,
      state: vscodeActivity.value.state
    };
  }
});

const connectWebSocket = () => {
  ws.value = new WebSocket('wss://api.lanyard.rest/socket');

  ws.value.onopen = () => {
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
      vscodeActivity.value = data.activities.find(activity => activity.name === "Visual Studio Code") || null;

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
  };
};

onMounted(() => {
  connectWebSocket();
  fetchLanguageColors();
});

onUnmounted(() => {
  if (ws.value) {
    ws.value.close();
  }
});
</script>

<template>
  <div class="font-sans font-black text-5xl">
    f1sh.pics
  </div>
  <div>
    moli, aka duhan. 16 years-old. chef, professional table tennis player. hyprland enjoyer. 
    sports, music, chemistry. contact : lostf1sh@outlook.com
  </div>
  <div class="flex gap-2 items-center text-sm text-catppuccin-green">
    <font-awesome-icon :icon="['fab', 'spotify']" class="text-xl w-5 h-5" />
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
  <div class="flex gap-2 items-center text-sm mt-2" :class="discordStatusColor">
    <font-awesome-icon :icon="['fab', 'discord']" class="text-xl w-5 h-5" />
    <div>
      i'm currently {{ discordStatus }} on discord.
    </div>
  </div>
  <div v-if="vscodeActivity" class="flex gap-2 items-center text-sm mt-2" :style="currentLanguageColor">
    <font-awesome-icon :icon="['fas', 'code']" class="text-xl w-5 h-5" />
    <div v-if="typeof vscodeStatus === 'string'">
      i'm currently {{ vscodeStatus }} in VSCode.
    </div>
    <div v-else-if="vscodeStatus">
      i'm currently editing <strong>{{ vscodeStatus.details }}</strong> in Workspace: <strong>{{ vscodeStatus.state }}</strong>.
    </div>
  </div>
  <div class="flex gap-10 mt-5 text-xl">
    <a href="https://github.com/lostf1sh/" target="_blank" class="flex items-center justify-center">
      <font-awesome-icon :icon="['fab', 'github']" class="w-5 h-5" />
    </a>
    <a href="https://www.instagram.com/lxstf1sh" target="_blank" class="flex items-center justify-center">
      <font-awesome-icon :icon="['fab', 'instagram']" class="w-5 h-5" />
    </a>
    <a href="https://discord.com/user/470904884946796544" target="_blank" class="flex items-center justify-center">
      <font-awesome-icon :icon="['fab', 'discord']" class="w-5 h-5" />
    </a>
  </div>
</template>
