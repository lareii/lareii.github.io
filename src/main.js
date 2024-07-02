import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faDiscord, faSpotify, faMastodon, faInstagram} from '@fortawesome/free-brands-svg-icons';

// Add Instagram to the library
library.add(faGithub, faLinkedin, faDiscord, faSpotify, faMastodon, faStar, faCodeBranch, faInstagram);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
