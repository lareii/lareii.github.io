import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpotify, faDiscord, faLinkedin, faReddit, faGithub, faMastodon } from '@fortawesome/free-brands-svg-icons'

library.add(faSpotify, faDiscord, faLinkedin, faReddit, faGithub, faMastodon)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')