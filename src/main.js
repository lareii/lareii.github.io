import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar, faCodeBranch, faCode } from '@fortawesome/free-solid-svg-icons'; // Add faCode here
import { faGithub, faLinkedin, faDiscord, faSpotify, faMastodon, faInstagram } from '@fortawesome/free-brands-svg-icons';

// Add icons to the library
library.add(faGithub, faLinkedin, faDiscord, faSpotify, faMastodon, faInstagram, faStar, faCodeBranch, faCode);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
